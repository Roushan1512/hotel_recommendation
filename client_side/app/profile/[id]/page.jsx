"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProfilePage({ params }) {
  const { user, isLoading, error } = useUser();
  const { id } = params;
  const [searches, setSearches] = useState([]);

  const countryMapping = {
    UK: "United Kingdom",
    FR: "France",
    NL: "Netherlands",
    ES: "Spain",
    IT: "Italy",
    AT: "Austria",
  };

  const sortMapping = {
    0: "Hotel Rating",
    1: "Customer Review Score",
    2: "Price Per Night",
  };

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
      hour: "2-digit",
      minute: "2-digit",
    };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  useEffect(() => {
    const getUserSearches = async () => {
      if (user) {
        const { email } = user;
        await axios
          .get(`/api/search/getById/${email}`)
          .then((res) => {
            setSearches(res.data); // Save the data to state.
            console.log(res.data); // Log the data to the console.
          })
          .catch((err) => console.log(err));
      }
    };
    getUserSearches();
  }, [user]);

  if (isLoading) return <div className="text-center mt-10">Loading...</div>;
  if (error)
    return (
      <div className="text-center mt-10 text-red-500">
        Error: {error.message}
      </div>
    );
  if (!user) return <div className="text-center mt-10">User not logged in</div>;
  console.log(user.picture);
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#ECE3D4] to-[#FAF9F6] flex flex-col items-center px-4 py-10">
      {/* Profile Card */}
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg flex flex-col items-center py-10 px-6 mb-10">
        <div className="rounded-full w-32 h-32 object-cover border-4 border-[#C3A983] shadow-md overflow-hidden">
          <img
            src="https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg"
            alt={user.name}
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-2xl font-bold text-[#1A1A1A] mt-4">{user.name}</h1>
        <p className="text-gray-600">{user.email}</p>
      </div>

      {/* History Section */}
      <div className="w-full max-w-3xl bg-[#f8f4ef] rounded-2xl shadow-inner p-8">
        <h2 className="text-xl font-semibold text-[#4B3F2F] mb-6">
          🔍 Recent Searches
        </h2>
        <ul className="space-y-4 text-[#3f3f3f]">
          {searches.length > 0 ? (
            searches.map((search, index) => (
              <li
                key={index}
                className="bg-[#f1dbc0] px-4 py-2 rounded-lg shadow-sm border-l-4 border-[#C3A983] font-medium"
              >
                📍{countryMapping[search.country] || search.country} ⭐
                {search.stars == 0 ? "Any" : search.stars} 🔃
                {sortMapping[search.sortBy]} 💲
                {search.fromNum} - {search.toNum} 💬{search.description}
                <div className="font-thin">
                  {formatDate(search.created_at || "2025-04-14T13:23:47.000Z")}
                </div>
              </li>
            ))
          ) : (
            <li className="text-center">No recent searches found</li>
          )}
        </ul>
      </div>
    </div>
  );
}

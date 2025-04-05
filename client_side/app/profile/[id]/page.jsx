"use client";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function ProfilePage({ params }) {
  const { user, isLoading, error } = useUser();
  const { id } = params;

  if (isLoading) return <div className="text-center mt-10">Loading...</div>;
  if (error)
    return (
      <div className="text-center mt-10 text-red-500">
        Error: {error.message}
      </div>
    );
  if (!user) return <div className="text-center mt-10">User not logged in</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#ECE3D4] to-[#FAF9F6] flex flex-col items-center px-4 py-10">
      {/* Profile Card */}
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg flex flex-col items-center py-10 px-6 mb-10">
        <img
          src={user.picture}
          alt={user.name}
          className="rounded-full w-32 h-32 object-cover border-4 border-[#C3A983] shadow-md"
        />
        <h1 className="text-2xl font-bold text-[#1A1A1A] mt-4">{user.name}</h1>
        <p className="text-gray-600">{user.email}</p>
      </div>

      {/* History Section */}
      <div className="w-full max-w-3xl bg-[#f8f4ef] rounded-2xl shadow-inner p-8">
        <h2 className="text-xl font-semibold text-[#4B3F2F] mb-6">
          🔍 Recent Searches
        </h2>
        <ul className="space-y-4 text-[#3f3f3f]">
          <li className="bg-[#f1dbc0] px-4 py-2 rounded-lg shadow-sm border-l-4 border-[#C3A983]">
            📍Netherlands ⭐4 Stars 🔃Customer Review Score 💲200 - 2000
            💬Habibi
          </li>
          <li className="bg-[#f1dbc0] px-4 py-2 rounded-lg shadow-sm border-l-4 border-[#C3A983]">
            📍Netherlands ⭐4 Stars 🔃Customer Review Score 💲200 - 2000
            💬Habibi
          </li>
          <li className="bg-[#f1dbc0] px-4 py-2 rounded-lg shadow-sm border-l-4 border-[#C3A983]">
            📍Netherlands ⭐4 Stars 🔃Customer Review Score 💲200 - 2000
            💬Habibi
          </li>
          <li className="bg-[#f1dbc0] px-4 py-2 rounded-lg shadow-sm border-l-4 border-[#C3A983]">
            📍Netherlands ⭐4 Stars 🔃Customer Review Score 💲200 - 2000
            💬Habibi
          </li>
        </ul>
      </div>
    </div>
  );
}

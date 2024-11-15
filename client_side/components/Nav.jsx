"use client";
import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

const Nav = () => {
  const { user, error, isLoading } = useUser();
  return (
    <div>
      <nav className="flex justify-between items-center p-4 bg-[#ECE3D4]">
        <h1 className="text-2xl font-bold text-[#1A1A1A] cursor-default">
          HotelSage
        </h1>
        <div className=" flex justify-center items-center gap-3 font-mono font-semibold text-lg">
          <div>
            {user ? (
              <div className="flex justify-center items-center gap-6">
                <div className="flex flex-col justify-center items-center">
                  <img
                    src={user.picture}
                    alt={user.name}
                    className="rounded-full w-10"
                  />
                  <h2>{user.name}</h2>
                </div>
                <button className=" bg-[#C3A983] rounded-lg p-1 px-2 hover:bg-[#D5B990]">
                  <a href="/api/auth/logout">Logout</a>
                </button>
              </div>
            ) : (
              <button className=" bg-[#C3A983] rounded-lg p-1 px-2 hover:bg-[#D5B990]">
                <a href="/api/auth/login">Login</a>
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

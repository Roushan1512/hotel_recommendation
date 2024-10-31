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
              <div>
                <button>
                  <a href="/api/auth/logout">Logout</a>
                </button>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
              </div>
            ) : (
              <button>
                <a href="/api/auth/login">Login</a>
              </button>
            )}
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className=" rounded-full w-12"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

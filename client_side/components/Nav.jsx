import React from "react";

const Nav = () => {
  return (
    <div>
      <nav className="flex justify-between items-center p-4 bg-[#ECE3D4]">
        <h1 className="text-2xl font-bold text-[#1A1A1A] cursor-default">
          HotelSage
        </h1>
        <div className=" flex justify-center items-center gap-3 font-mono font-semibold text-lg">
          <div>John Doe</div>
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

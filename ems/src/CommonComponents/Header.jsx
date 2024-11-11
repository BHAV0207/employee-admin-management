import React from "react";

function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="font-semibold text-2xl">
        Hello <br /> <span className="font-bold text-3xl">Name</span>
      </div>
      <div>
        <button className="border-2 border-red-500 py-1 px-2 rounded-md bg-red-500 font-bold">Logout</button>
      </div>
    </div>
  );
}

export default Header;

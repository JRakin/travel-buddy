import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-sky-600 h-16 flex items-center sticky py-2">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>logo</div>
          <div className="text-white">
            <ul className="flex">
              <li className="px-3">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="px-3">Buddies</li>
              <li className="px-3">
                <Link className="border border-gray-100 px-6 py-2 rounded bg-white text-black font-bold" to={"/auth/signup"}>Signin</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

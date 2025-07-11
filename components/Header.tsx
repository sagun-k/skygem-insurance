"use client";

import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const { isAuthenticated, userEmail, logout } = useAuth();
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = () => {
    logout();
    router.push("/auth/login");
  };

  return (
    <header className="bg-gradient-to-r from-slate-800 to-slate-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        {/* Left Logo/Title */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-white rounded transform rotate-45"></div>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Sky Gem Solutions</h1>
            <p className="text-slate-300 text-sm">Insurance Recommendations</p>
          </div>
        </div>

        {/* Right User Area */}
        <div>
          {!isAuthenticated ? (
            <Link
              href="/login"
              className="px-4 py-2 bg-teal-500 hover:bg-teal-600 rounded text-white font-semibold"
            >
              Login
            </Link>
          ) : (
            <div className="relative">
              <button
                onClick={() => setShowMenu(!showMenu)}
                className=""
              >
                <div className="w-8 h-8 bg-white text-teal-700 rounded-full flex items-center justify-center font-bold">
                  {userEmail?.charAt(0).toUpperCase() || "U"}
                </div>
              
              </button>

              {/* Dropdown */}
              {showMenu && (
                <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg z-10">
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

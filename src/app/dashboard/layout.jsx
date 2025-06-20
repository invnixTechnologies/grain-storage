"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ThemeToggle, { useTheme } from "@/components/ThemeToggle";
import {
  User,
  Settings as SettingsIcon,
  LogOut,
  ChevronsUpDown,
} from "lucide-react";

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [active, setActive] = useState("");
  const dropdownRef = useRef(null);
  const pathname = usePathname();
  const [navDropdown, setNavDropdown] = useState(false);

  useTheme();

  // Initialize active state from pathname
  useEffect(() => {
    if (pathname === "/dashboard" || pathname === "/dashboard/") {
      setActive("home");
    } else if (pathname === "/dashboard/profile") {
      setActive("profile");
    }
  }, [pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  const handleNavClick = (tabName) => {
    setActive(tabName);
    localStorage.setItem("activeTab", tabName);
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100 dark:bg-gray-900">
      {/* Mobile Navbar (hidden on desktop) */}
      <div className="md:hidden bg-white dark:bg-gray-800 shadow p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/globe.svg"
            alt="Logo"
            width={100}
            height={100}
            className="w-8 h-8"
          />
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            GrainStorage
          </span>
        </div>
        <button
          className="focus:outline-none"
          aria-label="Open sidebar"
          onClick={() => setSidebarOpen(true)}
        >
          <svg
            className="w-6 h-6 text-gray-900 dark:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Sidebar (hidden on mobile and show on desktop) */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 shadow-md bg-white dark:bg-gray-800 p-4 transform transition-transform duration-300 md:static md:translate-x-0 md:max-h-screen flex-shrink-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:block`}
        style={{ maxWidth: "100vw" }}
      >
        <div className="flex flex-col h-full">
          {/* top part of sidebar */}
          <div className="flex items-center justify-between mb-10">
            {/* Logo at the top of sidebar */}
            <div className="flex items-center gap-2">
              <div className="p-1 bg-blue-50 dark:bg-gray-700 rounded-xl">
                <Image
                  src="/globe.svg"
                  alt="Logo"
                  width={100}
                  height={100}
                  className="w-6 h-6"
                />
              </div>
              <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-300 dark:to-purple-400 dark:text-white">
                GrainStorage
              </span>
            </div>
            {/* Close button for mobile */}
            {sidebarOpen && (
              <div className="flex items-center justify-between">
                <button
                  className="focus:outline-none p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors md:hidden"
                  aria-label="Close sidebar"
                  onClick={() => {
                    setSidebarOpen(false), setNavDropdown(false);
                  }}
                >
                  <svg
                    className="w-6 h-6 text-gray-600 dark:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>

          {/* Middle part of sidebar */}
          <div className="flex flex-col justify-between h-full">
            <nav className="space-y-2">
              {/* Home link */}
              <Link
                href="/dashboard/"
                className={`flex items-center gap-3 py-3 px-4 rounded-xl transition-all duration-200 font-medium group ${
                  active === "home"
                    ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-bold scale-105"
                    : "hover:bg-blue-50 dark:hover:bg-gray-700 hover:scale-105 text-gray-700 dark:text-gray-200"
                }`}
                onClick={() => handleNavClick("home")}
              >
                <svg
                  className={`w-5 h-5 ${
                    active === "home"
                      ? "text-blue-700 dark:text-blue-300"
                      : "text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12l2-2m0 0l7-7 7 7m-9 2v8m4-8v8m5 0a2 2 0 002-2V7a2 2 0 00-2-2h-3.5a2 2 0 00-1.5.67"
                  />
                </svg>
                Home
              </Link>

              {/* Profile link */}
              <Link
                href="/dashboard/profile"
                className={`flex items-center gap-3 py-3 px-4 rounded-xl transition-all duration-200 font-medium group ${
                  active === "profile"
                    ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-bold scale-105"
                    : "hover:bg-blue-50 dark:hover:bg-gray-700 hover:scale-105 text-gray-700 dark:text-gray-200"
                }`}
                onClick={() => handleNavClick("profile")}
              >
                <svg
                  className={`w-5 h-5 ${
                    active === "profile"
                      ? "text-blue-700 dark:text-blue-300"
                      : "text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                Profile
              </Link>

              {/* Register */}
              <Link
                href="/register"
                className={`flex items-center gap-3 py-3 px-4 rounded-xl transition-all duration-200 font-medium group ${
                  active === "profile"
                    ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-bold scale-105"
                    : "hover:bg-blue-50 dark:hover:bg-gray-700 hover:scale-105 text-gray-700 dark:text-gray-200"
                }`}
                onClick={() => handleNavClick("profile")}
              >
                <svg
                  className={`w-5 h-5 ${
                    active === "profile"
                      ? "text-blue-700 dark:text-blue-300"
                      : "text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                Profile
              </Link>
            </nav>

            {/* Buttom part of sidebar */}
            <div>
              <div className="w-full relative mt-2 block md:hidden py-3 px-3 rounded-xl bg-blue-50 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-gray-600 transition-all">
                <div
                  className={`
                    absolute bottom-18 left-0 block md:hidden py-3 px-3 rounded-xl bg-blue-50 dark:bg-gray-700 transition-all duration-300 ease-in-out w-full
                    ${
                      navDropdown
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-4 pointer-events-none"
                    }
                  `}
                >
                  <ThemeToggle
                    cssClass={
                      "px-4 py-2 text-gray-700 dark:text-white hover:backdrop-blur-sm rounded-t-xl w-full flex items-center gap-2"
                    }
                  />
                  <Link
                    href="/dashboard/profile"
                    className="flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-200 hover:backdrop-blur-sm hover:bg-white/80 dark:hover:bg-gray-700"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <User className="w-4 h-4" />
                    Profile
                  </Link>
                  <Link
                    href="/dashboard/settings"
                    className="flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-200 hover:backdrop-blur-sm hover:bg-white/80 dark:hover:bg-gray-700"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <SettingsIcon className="w-4 h-4" />
                    Settings
                  </Link>
                  <div className="border-t border-gray-400 my-1"></div>
                  <a
                    href="#"
                    className="flex items-center gap-2 px-4 py-2 text-red-600 hover:backdrop-blur-sm hover:bg-white/90 dark:hover:bg-gray-700 rounded-b-xl"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </a>
                </div>

                <button
                  onClick={() => setNavDropdown(!navDropdown)}
                  className="flex items-center justify-between w-full"
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src="https://picsum.photos/200/200"
                      alt="Profile"
                      className="w-10 h-10 rounded-full border-2 border-blue-200 dark:border-gray-600 shadow-lg"
                      width={100}
                      height={100}
                    />
                    <div className="text-lg font-bold text-gray-800 dark:text-white">
                      Anjul Singh
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 pr-3">
                    <ChevronsUpDown className="w-4 h-4" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-30 md:hidden"
          onClick={() => {
            setSidebarOpen(false), setNavDropdown(false);
          }}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:ml-0">
        {/* Header */}
        <div className="hidden md:block w-full">
          <header className="bg-white dark:bg-gray-800 shadow p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold text-gray-900 dark:text-white">
                Welcome Anjul
              </span>
            </div>

            {/* User icon and dropdown menu */}
            <div className="flex items-center gap-3 relative">
              <button
                className="focus:outline-none"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                aria-label="Open user menu"
              >
                <Image
                  src="https://picsum.photos/200/200"
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-blue-400 shadow"
                  width={100}
                  height={100}
                />
              </button>

              {/* Dropdown menu */}
              {dropdownOpen && (
                <div
                  ref={dropdownRef}
                  className="absolute right-2 mt-50 w-44 backdrop-blur-sm bg-slate-100/70 dark:bg-gray-800/90 rounded-xl shadow-lg z-50 "
                >
                  <ThemeToggle
                    cssClass={
                      "px-4 py-2 text-gray-700 dark:text-white hover:backdrop-blur-sm hover:bg-white/80 hover:dark:bg-gray-700 rounded-t-xl w-full flex items-center gap-2"
                    }
                  />
                  <Link
                    href="/dashboard/profile"
                    className="flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-200 hover:backdrop-blur-sm hover:bg-white/80 dark:hover:bg-gray-700"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <User className="w-4 h-4" />
                    Profile
                  </Link>
                  <Link
                    href="/dashboard/settings"
                    className="flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-200 hover:backdrop-blur-sm hover:bg-white/80 dark:hover:bg-gray-700"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <SettingsIcon className="w-4 h-4" />
                    Settings
                  </Link>
                  <div className="border-t border-gray-400 my-1"></div>
                  <a
                    href="#"
                    className="flex items-center gap-2 px-4 py-2 text-red-600 hover:backdrop-blur-sm hover:bg-white/90 dark:hover:bg-gray-700 rounded-b-xl"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </a>
                </div>
              )}
            </div>
          </header>
        </div>

        {/* Content */}
        <main className="flex-1 p-2 bg-gray-100 dark:bg-gray-900">
          <div className="bg-white dark:bg-gray-800 p-2 rounded-md shadow h-full ">
            <div className="overflow-y-auto max-h-[85vh] md:max-h-[87vh] no-scrollbar">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

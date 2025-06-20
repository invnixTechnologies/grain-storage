"use client";
import { SquarePen } from "lucide-react";
import React, { useState } from "react";

const ProfileUpdateModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {/* Toggle Button */}
      <button
        type="button"
        className="bg-blue-50 dark:bg-gray-600 p-3 rounded-full cursor-pointer"
        onClick={toggleModal}
      >
        <SquarePen className="w-5 h-5 dark:text-gray-300" />
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-center bg-black/30 backdrop-blur-sm px-4 sm:px-6"
          aria-modal="true"
          role="dialog"
        >
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md sm:max-w-lg p-6 relative dark:bg-gray-800 overflow-y-auto max-h-[90vh]">
            {/* Header */}
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                Update Profile
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-500 cursor-pointer hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <form className="mt-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  className="mt-1 w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Phone
                </label>
                <input
                  type="tel"
                  className="mt-1 w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
                  placeholder="+91 1234567890"
                />
              </div>

              {/* Footer */}
              <div className="flex justify-end pt-4 border-t">
                <button
                  type="button"
                  onClick={closeModal}
                  className="mr-3 px-4 py-2 text-sm border rounded text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileUpdateModal;

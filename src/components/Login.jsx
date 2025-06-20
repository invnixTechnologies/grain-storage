"use client";
import React, { use, useEffect, useState } from "react";
import { company_logo, company_name } from "@/constant";
import Image from "next/image";
import useAuthStore from "@/store/useAuthStore";

export default function Login({ onNext }) {
  const { setPhoneNumber, phoneNumber } = useAuthStore();
  const [active, setActive] = useState(false);
  const [error, setError] = useState("");

  const handlePhoneChange = (event) => {
    const value = event.target.value;
    const phoneRegex = /^\d{0,10}$/;
    if (phoneRegex.test(value)) {
      if (value.length === 10) {
        setActive(true);
      }
      setPhoneNumber(value);
      setError("");
    } else {
      setError("Please enter a valid phone number (up to 10 digits).");
    }
  };

  useEffect(() => {
    if (phoneNumber.length === 10) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [phoneNumber]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl w-full max-w-md">
        <div className="flex items-center justify-center flex-col mb-3">
          <Image
            src={company_logo}
            className="h-30 w-30 rounded-full"
            alt="Logo"
            height={200}
            width={200}
          />
          <div className="flex justify-center items-center my-4 ">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              {company_name}
            </h1>
          </div>
        </div>

        <label
          htmlFor="phone"
          className="block text-[15px] font-bold text-gray-700 dark:text-gray-200"
        >
          Login With Phone Number
        </label>
        <div className="relative">
          <input
            type="text"
            id="phone"
            value={phoneNumber}
            onChange={handlePhoneChange}
            className={`text-center font-bold text-xl mt-2 w-full p-3 rounded-lg border bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white outline-none  ${
              error ? "border-red-500" : "border-gray-300 dark:border-gray-600"
            }`}
            required
          />
          <div className="absolute top-[12px] left-1 py-[11px] px-[11px] font-bold text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 rounded-lg">
            +91
          </div>
        </div>
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}

        <button
          className={`mt-6 w-full py-3  text-white font-bold rounded-lg transition duration-200 ${
            active
              ? "bg-blue-600 hover:bg-blue-700"
              : "cursor-not-allowed bg-blue-500 "
          }`}
          onClick={onNext}
          disabled={!active}
        >
          Get OTP
        </button>
      </div>
    </div>
  );
}

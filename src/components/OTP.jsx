import { company_logo, company_name } from "@/constant";
import useAuthStore from "@/store/useAuthStore";
import { SquarePen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const OTP = ({ onPrev }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(10);
  const { phoneNumber } = useAuthStore();
  const [active, setActive] = useState(false);

  const handleOtpChange = (e, index) => {
    const { value } = e.target;
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < otp.length - 1) {
        document.getElementById(`otp-input-${index + 1}`)?.focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-input-${index - 1}`)?.focus();
    }
  };

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer); // cleanup on unmount
  }, [timeLeft]);

  useEffect(() => {
    if (otp[0] && otp[1] && otp[2] && otp[3]) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [otp]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl w-full max-w-md px-8 py-10 text-center border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-center flex-col mb-3">
          <Image
            src={company_logo}
            className="h-30 w-30 rounded-full bg-gray-200 dark:bg-gray-700"
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
        {/* <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
          Verify Mobile Number
        </h2> */}
        <div className="text-gray-600 dark:text-gray-300 mb-6 text-sm flex items-center justify-center gap-2">
          <span>Please enter the 4-digit OTP sent to {phoneNumber}</span>
          <button
            onClick={onPrev}
            className="p-1 rounded-full bg-blue-50 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-gray-600 transition-all border border-gray-200 dark:border-gray-600"
          >
            <SquarePen className="w-4 h-4 text-black-600 dark:text-gray-300" />
          </button>
        </div>

        <div className="flex justify-center gap-4">
          {otp.map((value, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              type="text"
              value={value}
              onChange={(e) => handleOtpChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-14 h-14 text-center text-xl font-bold border-2 border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-700 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white outline-none transition"
              maxLength={1}
              autoFocus={index === 0}
              autoComplete="off"
            />
          ))}
        </div>

        <div className="mt-8">
          <Link href={!active ? "" : "/dashboard/"}>
            <button
              type="button"
              className={`w-full py-3 px-6 rounded-lg text-white font-semibold transition duration-300 ${
                active
                  ? "bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
                  : "cursor-not-allowed bg-blue-500 dark:bg-blue-500/70"
              }`}
              disabled={!active}
            >
              Continue
            </button>
          </Link>
        </div>
        <div className="mt-2 text-[14px] text-center text-gray-700 dark:text-gray-300">
          Not received your code?{" "}
          {timeLeft === 0 ? (
            <span className="font-semibold text-blue-600 dark:text-blue-400 underline cursor-pointer hover:text-blue-800 dark:hover:text-blue-300 transition">
              Resend
            </span>
          ) : (
            <span className="font-semibold">
              00:{timeLeft < 10 ? "0" + timeLeft : timeLeft}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default OTP;

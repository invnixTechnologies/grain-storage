"use client";
import ProfileUpdateModal from "@/components/ProfileUpdateModal";
import { SquarePen } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const Profile = () => {
  const [accountHolder, setAccountHolder] = useState({
    accountHolderID: "123456789",
    fullName: "Arjun Singh",
    email: "anjulsingh@gmail.com",
    phoneNumber: "7523801921",
    gender: "Male",
    dateOfBirth: "25/10/1995",
    address: "ghjdfghjdgfjhriot",
    tehsil: "hjvdfghduighuihjgirtojh",
    district: "Gorakhpur",
    state: "Uttar Pradesh",
    landmark: "Deoria Road, Singhariya, Kunraghat",
    pinCode: "273010",
    aadharNumber: "2356 7890 3416",
    panNumber: "THC33587893NK",
    khatauniID: "5984905850603483",
    registrationDate: "10/10/2024",
    land: "24",
  });

  const [nomineeData, setNomineeData] = useState({
    nomineeName: "Rohit Singh",
    nomineeDOB: "30/04/1999",
    nomineePhoneNumber: "7523801921",
    nomineeEmail: "rohitsingh@gmail.com",
    nomineeAadharNumber: "2356 7890 3416",
    nomineePanNumber: "THC33587893NK",
    relationshipToAccountHolder: "Father",
    nomineeGender: "Male",
    nomineeAddress: "Deoria Road, Singhariya, Kunraghat",
  });

  return (
    <>
      <div className="w-full  max-w-[1500px] mx-auto p-2 md:p-4 flex flex-col gap-6">
        {/* Avatar and Name Card */}
        <div className=" relative w-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-gray-900 dark:to-gray-900 rounded-2xl shadow  p-6">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Image
              src="https://picsum.photos/200/200"
              alt="profile"
              className="h-24 w-24 rounded-full border-4 border-white dark:border-gray-900 shadow-lg object-cover"
              width={100}
              height={100}
            />
            <div className="flex flex-col items-center sm:items-start">
              <div className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                {accountHolder.fullName}
              </div>
              <div className="text-base font-medium text-blue-600 dark:text-blue-300">
                ID: {accountHolder.accountHolderID}
              </div>
              <div className="text-base text-gray-500 dark:text-gray-300 mt-1">
                {accountHolder.email}
              </div>
            </div>
          </div>
          <div className="absolute top-2 right-2 md:top-6 md:right-6 flex items-center gap-4">
            <ProfileUpdateModal />
          </div>
        </div>

        {/* Personal Information Card */}
        <div className="w-full bg-white dark:bg-gray-900 rounded-2xl shadow p-6 flex flex-col gap-4">
          <div className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-2">
            Personal Information
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ProfileField label="Full Name" value={accountHolder.fullName} />
            <ProfileField label="Email" value={accountHolder.email} />
            <ProfileField
              label="Phone Number"
              value={accountHolder.phoneNumber}
            />
            <ProfileField label="Gender" value={accountHolder.gender} />
            <ProfileField
              label="Date of Birth"
              value={accountHolder.dateOfBirth}
            />
          </div>
        </div>

        {/* Address Card */}
        <div className="w-full bg-white dark:bg-gray-900 rounded-2xl shadow p-6 flex flex-col gap-4">
          <div className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-2">
            Address
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ProfileField label="Village Name" value={accountHolder.address} />
            <ProfileField label="Tehsil" value={accountHolder.tehsil} />
            <ProfileField label="District" value={accountHolder.district} />
            <ProfileField label="State" value={accountHolder.state} />
            <ProfileField label="Landmark" value={accountHolder.landmark} />
            <ProfileField label="Pin Code" value={accountHolder.pinCode} />
          </div>
        </div>

        {/* More Information Card */}
        <div className="w-full bg-white dark:bg-gray-900 rounded-2xl shadow p-6 flex flex-col gap-4">
          <div className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-2">
            More Information
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ProfileField
              label="Aadhar Number"
              value={accountHolder.aadharNumber}
            />
            <ProfileField label="Pan Number" value={accountHolder.panNumber} />
            <ProfileField
              label="Khatauni ID"
              value={accountHolder.khatauniID}
            />
            <ProfileField
              label="Registration Date"
              value={accountHolder.registrationDate}
            />
            <ProfileField label="Land (IN ACRES)" value={accountHolder.land} />
          </div>
        </div>

        {/* Nominee Details Card */}
        <div className="w-full bg-white dark:bg-gray-900 rounded-2xl shadow p-6 flex flex-col gap-4">
          <div className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-2">
            Nominee Details
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ProfileField label="Full Name" value={nomineeData.nomineeName} />
            <ProfileField
              label="Date of Birth"
              value={nomineeData.nomineeDOB}
            />
            <ProfileField
              label="Phone Number"
              value={nomineeData.nomineePhoneNumber}
            />
            <ProfileField label="Email" value={nomineeData.nomineeEmail} />
            <ProfileField
              label="Aadhar Number"
              value={nomineeData.nomineeAadharNumber}
            />
            <ProfileField
              label="Pan Number"
              value={nomineeData.nomineePanNumber}
            />
            <ProfileField
              label="Relationship to Account Holder"
              value={nomineeData.relationshipToAccountHolder}
            />
            <ProfileField label="Gender" value={nomineeData.nomineeGender} />
            <ProfileField label="Address" value={nomineeData.nomineeAddress} />
          </div>
        </div>
      </div>
    </>
  );
};

// Reusable field display component
const ProfileField = ({ label, value }) => (
  <div className="flex flex-col">
    <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">
      {label}
    </span>
    <span className="text-base text-gray-800 dark:text-gray-100 bg-gray-50 dark:bg-gray-800 rounded px-2 py-2 border border-gray-100 dark:border-gray-800">
      {value}
    </span>
  </div>
);

export default Profile;

"use client";
import React, { useState, useEffect } from "react";
import { CheckCircle, Loader2 } from "lucide-react";
import {
  Step1,
  Step2,
  Step3,
  Step4,
  Step5,
  Step6,
} from "@/components/Registration_Form";

const LOCAL_STORAGE_KEY = "registerFormData";

const AutoSaveToast = ({ show, saving = true }) => (
  <div
    className={`fixed top-5 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 pointer-events-none w-full flex justify-center ${
      show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
    }`}
    style={{ maxWidth: 400 }}
  >
    <div className="flex items-center gap-3 px-5 py-3 rounded-xl shadow-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white text-base font-semibold backdrop-blur-sm">
      {saving ? (
        <Loader2 className="h-5 w-5 text-blue-600 dark:text-blue-400 animate-spin" />
      ) : (
        <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
      )}
      <span>{saving ? "Saving..." : "Auto-saved"}</span>
    </div>
  </div>
);

export const StepButtons = ({ onNext, onPrev }) => (
  <div className="mt-4 flex flex-col sm:flex-row justify-between gap-2">
    {onPrev && (
      <button
        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
        onClick={onPrev}
      >
        Back
      </button>
    )}
    <button
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 transition"
      onClick={onNext}
    >
      Next
    </button>
  </div>
);

export default function Page() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
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
    nomineeName: "Rohit Singh",
    nomineeDOB: "30/04/1999",
    nomineePhoneNumber: "7523801921",
    nomineeEmail: "rohitsingh@gmail.com",
    nomineeAadharNumber: "2356 7890 3416",
    nomineePanNumber: "THC33587893NK",
    relationshipToAccountHolder: "Father",
    nomineeGender: "Male",
    nomineeAddress: "Deoria Road, Singhariya, Kunraghat",
    accountNumber: "",
    ifscCode: "",
    accountHolderName: "",
    bankName: "",
    branchName: "",
    aadharImage: null,
    aadharImagePreview: "",
    aadharImageCloudinaryUrl: "",
    panImage: null,
    panImagePreview: "",
    panImageCloudinaryUrl: "",
    khatauniImage: null,
    khatauniImagePreview: "",
    khatauniImageCloudinaryUrl: "",
    nomineeAadharImage: null,
    nomineeAadharImagePreview: "",
    nomineePanImage: null,
    nomineePanImagePreview: "",
  });
  const [showToast, setShowToast] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          setFormData((prev) => ({ ...prev, ...parsed }));
        } catch (e) {
          // ignore parse errors
        }
      }
    }
  }, []);

  // Auto-save to localStorage on formData change, show toast
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
      setShowToast(true);
      const timeout = setTimeout(() => setShowToast(false), 1500);
      return () => clearTimeout(timeout);
    }
  }, [formData]);

  const steps = [
    <Step1
      formData={formData}
      setFormData={setFormData}
      onNext={() => setStep(2)}
    />,
    <Step2
      formData={formData}
      setFormData={setFormData}
      onNext={() => setStep(3)}
      onPrev={() => setStep(1)}
    />,
    <Step3
      formData={formData}
      setFormData={setFormData}
      onNext={() => setStep(4)}
      onPrev={() => setStep(2)}
    />,
    <Step4
      formData={formData}
      setFormData={setFormData}
      onNext={() => setStep(5)}
      onPrev={() => setStep(3)}
    />,
    <Step5
      formData={formData}
      setFormData={setFormData}
      onNext={() => setStep(6)}
      onPrev={() => setStep(4)}
    />,
    <Step6 formData={formData} onPrev={() => setStep(5)} />,
  ];

  return (
    <>
      <div className="min-h-screen w-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center px-2 py-8">
        <AutoSaveToast show={showToast} />
        <div className="bg-white dark:bg-gray-800 p-6 sm:p-10 rounded-lg shadow-md w-full max-w-2xl transition border border-gray-200 dark:border-gray-700">
          {steps[step - 1]}
          <div className="mt-6 text-sm text-gray-400 dark:text-gray-500 text-center">
            Step {step} of 6
          </div>
        </div>
      </div>
    </>
  );
}

"use client";
import Login from "@/components/Login";
import OTP from "@/components/OTP";
import React, { useState } from "react";

const Step1 = ({ onNext }) => <Login onNext={onNext} />;

const Step2 = ({ onNext, onPrev }) => <OTP onNext={onNext} onPrev={onPrev} />;

const page = () => {
  const [step, setStep] = useState(1);

  return (
    <>
      <div className=" ">
        {step === 1 && <Step1 onNext={() => setStep(2)} />}
        {step === 2 && (
          <Step2 onNext={() => setStep(3)} onPrev={() => setStep(1)} />
        )}
      </div>
    </>
  );
};

export default page;

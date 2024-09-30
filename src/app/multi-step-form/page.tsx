"use client";

import React, { useState } from "react";
import StepOne from "@/components/multiStep-form/step-one";
import StepTwo from "@/components/multiStep-form/step-two";
import StepThree from "@/components/multiStep-form/step-three";

interface FormData {
  email: string;
  phone_number: string;
  full_name: string;
}

const ProfileStepsPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    phone_number: "",
    full_name: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const previousStep = () => setStep((prev) => prev - 1);
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-[380px]">
        {step === 1 && (
          <StepOne
            nextStep={nextStep}
            handleInputChange={handleInputChange}
            formData={formData}
          />
        )}
        {step === 2 && (
          <StepTwo
            nextStep={nextStep}
            previousStep={previousStep}
            handleInputChange={handleInputChange}
            formData={formData}
          />
        )}
        {step === 3 && (
          <StepThree
            nextStep={nextStep}
            previousStep={previousStep}
            handleInputChange={handleInputChange}
            formData={formData}
          />
        )}
      </div>
    </div>
  );
};

export default ProfileStepsPage;

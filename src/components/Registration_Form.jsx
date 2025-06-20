import FileUpload from "@/components/FileUpload";
import { StepButtons } from "@/app/register/page";

// input Field component
const Input = ({ label, value, onChange }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
      {label}
    </label>
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-700 outline-none transition"
    />
  </div>
);

// Step 1 of registration form
const Step1 = ({ formData, setFormData, onNext }) => (
  <div className="animate-fade-in-up">
    <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
      Step 1: Personal Information
    </h2>
    <Input
      label="Full Name"
      value={formData.fullName}
      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
    />
    <Input
      label="Email"
      value={formData.email}
      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
    />
    <Input
      label="Phone Number"
      value={formData.phoneNumber}
      onChange={(e) =>
        setFormData({ ...formData, phoneNumber: e.target.value })
      }
    />
    <Input
      label="Gender"
      value={formData.gender}
      onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
    />
    <Input
      label="Date of Birth"
      value={formData.dateOfBirth}
      onChange={(e) =>
        setFormData({ ...formData, dateOfBirth: e.target.value })
      }
    />
    <StepButtons onNext={onNext} />
  </div>
);

// Step 2 of registration form
const Step2 = ({ formData, setFormData, onNext, onPrev }) => (
  <div className="animate-fade-in-up">
    <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
      Step 2: Address
    </h2>
    <Input
      label="Village Name"
      value={formData.address}
      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
    />
    <Input
      label="Tehsil"
      value={formData.tehsil}
      onChange={(e) => setFormData({ ...formData, tehsil: e.target.value })}
    />
    <Input
      label="District"
      value={formData.district}
      onChange={(e) => setFormData({ ...formData, district: e.target.value })}
    />
    <Input
      label="State"
      value={formData.state}
      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
    />
    <Input
      label="Landmark"
      value={formData.landmark}
      onChange={(e) => setFormData({ ...formData, landmark: e.target.value })}
    />
    <Input
      label="Pin Code"
      value={formData.pinCode}
      onChange={(e) => setFormData({ ...formData, pinCode: e.target.value })}
    />
    <StepButtons onNext={onNext} onPrev={onPrev} />
  </div>
);

// Step 3 of registration form
const Step3 = ({ formData, setFormData, onNext, onPrev }) => {
  const handleImageChange = async (e, key) => {
    const file = e.target.files[0];
    if (!file) return;

    // Preview (ensure cleanup later to avoid memory leaks)
    const preview = URL.createObjectURL(file);

    setFormData((prev) => ({
      ...prev,
      [`${key}Preview`]: preview,
      [key]: file,
    }));
  };

  return (
    <div className="animate-fade-in-up">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
        Step 3: More Information
      </h2>

      <Input
        label="Aadhar Number"
        value={formData.aadharNumber}
        onChange={(e) =>
          setFormData({ ...formData, aadharNumber: e.target.value })
        }
      />
      <FileUpload
        label="Upload Aadhar Image"
        onChange={(e) => handleImageChange(e, "aadharImage")}
        preview={formData.aadharImagePreview}
        fileName={formData.aadharImage?.name}
      />

      <Input
        label="Pan Number"
        value={formData.panNumber}
        onChange={(e) =>
          setFormData({ ...formData, panNumber: e.target.value })
        }
      />
      <FileUpload
        label="Upload PAN Image"
        onChange={(e) => handleImageChange(e, "panImage")}
        preview={formData.panImagePreview}
        fileName={formData.panImage?.name}
      />

      <Input
        label="Khatauni ID"
        value={formData.khatauniID}
        onChange={(e) =>
          setFormData({ ...formData, khatauniID: e.target.value })
        }
      />
      <FileUpload
        label="Upload Khatauni Image"
        onChange={(e) => handleImageChange(e, "khatauniImage")}
        preview={formData.khatauniImagePreview}
        fileName={formData.khatauniImage?.name}
      />

      <Input
        label="Land (IN ACRES)"
        value={formData.land}
        onChange={(e) => setFormData({ ...formData, land: e.target.value })}
      />

      <StepButtons onNext={onNext} onPrev={onPrev} />
    </div>
  );
};

// Step 4 of registration form
const Step4 = ({ formData, setFormData, onNext, onPrev }) => {
  const handleImageChange = (e, key) => {
    const file = e.target.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setFormData({ ...formData, [key]: file, [`${key}Preview`]: preview });
    }
  };
  return (
    <div className="animate-fade-in-up">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
        Step 4: Nominee Details
      </h2>
      <Input
        label="Full Name"
        value={formData.nomineeName}
        onChange={(e) =>
          setFormData({ ...formData, nomineeName: e.target.value })
        }
      />
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
        Date of Birth
      </label>
      <input
        type="date"
        value={formData.nomineeDOB}
        onChange={(e) =>
          setFormData({ ...formData, nomineeDOB: e.target.value })
        }
        className="mb-4 w-full p-2 border rounded"
      />
      <Input
        label="Phone Number"
        value={formData.nomineePhoneNumber}
        onChange={(e) =>
          setFormData({ ...formData, nomineePhoneNumber: e.target.value })
        }
      />
      <Input
        label="Email"
        value={formData.nomineeEmail}
        onChange={(e) =>
          setFormData({ ...formData, nomineeEmail: e.target.value })
        }
      />
      <Input
        label="Aadhar Number"
        value={formData.nomineeAadharNumber}
        onChange={(e) =>
          setFormData({ ...formData, nomineeAadharNumber: e.target.value })
        }
      />
      <FileUpload
        label="Upload Aadhar Image"
        onChange={(e) => handleImageChange(e, "nomineeAadharImage")}
        preview={formData.nomineeAadharImagePreview}
        fileName={
          formData.nomineeAadharImage ? formData.nomineeAadharImage.name : ""
        }
      />
      <Input
        label="Pan Number"
        value={formData.nomineePanNumber}
        onChange={(e) =>
          setFormData({ ...formData, nomineePanNumber: e.target.value })
        }
      />
      <FileUpload
        label="Upload PAN Image"
        onChange={(e) => handleImageChange(e, "nomineePanImage")}
        preview={formData.nomineePanImagePreview}
        fileName={formData.nomineePanImage ? formData.nomineePanImage.name : ""}
      />
      <Input
        label="Relationship to Account Holder"
        value={formData.relationshipToAccountHolder}
        onChange={(e) =>
          setFormData({
            ...formData,
            relationshipToAccountHolder: e.target.value,
          })
        }
      />
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
        Gender
      </label>
      <select
        value={formData.nomineeGender}
        onChange={(e) =>
          setFormData({ ...formData, nomineeGender: e.target.value })
        }
        className="mb-4 w-full p-2 border rounded"
      >
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Third Gender">Third Gender</option>
      </select>
      <Input
        label="Address"
        value={formData.nomineeAddress}
        onChange={(e) =>
          setFormData({ ...formData, nomineeAddress: e.target.value })
        }
      />
      <StepButtons onNext={onNext} onPrev={onPrev} />
    </div>
  );
};

// Step 5 of registration form
const Step5 = ({ formData, setFormData, onNext, onPrev }) => (
  <div className="animate-fade-in-up">
    <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
      Step 5: Bank Details
    </h2>
    <Input
      label="Account Number"
      value={formData.accountNumber}
      onChange={(e) =>
        setFormData({ ...formData, accountNumber: e.target.value })
      }
    />
    <Input
      label="IFSC Code"
      value={formData.ifscCode}
      onChange={(e) => setFormData({ ...formData, ifscCode: e.target.value })}
    />
    <Input
      label="Name of Account Holder"
      value={formData.accountHolderName}
      onChange={(e) =>
        setFormData({ ...formData, accountHolderName: e.target.value })
      }
    />
    <Input
      label="Bank Name"
      value={formData.bankName}
      onChange={(e) => setFormData({ ...formData, bankName: e.target.value })}
    />
    <Input
      label="Branch Name"
      value={formData.branchName}
      onChange={(e) => setFormData({ ...formData, branchName: e.target.value })}
    />
    <StepButtons onNext={onNext} onPrev={onPrev} />
  </div>
);

// Step 6 of registration form
const Step6 = ({ formData, onPrev }) => (
  <div className="animate-fade-in-up">
    <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
      Step 6: Review and Submit
    </h2>
    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md shadow-inner text-sm space-y-4 divide-y divide-gray-200 dark:divide-gray-700">
      {Object.entries(formData).map(([key, value]) => (
        <div key={key} className="flex justify-between pt-2">
          <div className="font-medium text-gray-600 dark:text-gray-300 capitalize">
            {key
              .replace(/([A-Z])/g, " $1")
              .replace(/^./, (str) => str.toUpperCase())}
          </div>
          <div className="text-gray-800 dark:text-gray-100 text-right break-all">
            {typeof value === "object" && value !== null
              ? JSON.stringify(value)
              : value}
          </div>
        </div>
      ))}
    </div>
    <div className="mt-6 flex flex-col sm:flex-row justify-between gap-2">
      <button
        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
        onClick={onPrev}
      >
        Back
      </button>
      <button
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 transition"
        onClick={() => alert("Form Submitted!")}
      >
        Submit
      </button>
    </div>
  </div>
);

export { Step1, Step2, Step3, Step4, Step5, Step6 };

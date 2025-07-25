// import img from "next/img";
"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  Step1,
  Step2,
  Step3,
  Step4,
  Step5,
  Step6,
} from "@/components/Registration_Form";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "The Process", href: "#process" },
  { name: "The Team", href: "#team" },
  { name: "Investors", href: "#investors" },
  { name: "Our Partners", href: "#partners" },
  { name: "Policies", href: "#policies" },
  { name: "Dashboard", href: "/dashboard" },
];

const Navbar = ({ onRegisterClick }) => (
  <nav className="w-full bg-white/80 dark:bg-gray-900/80 shadow sticky top-0 z-50 backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
      <div className="flex items-center gap-2">
        <img src="/globe.svg" alt="Grain Storage Logo" width={40} height={40} />
        <span className="text-2xl font-bold text-blue-700 dark:text-blue-300">
          Grain Storage
        </span>
      </div>
      <div className="hidden md:flex gap-6">
        {NAV_LINKS.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition"
          >
            {link.name}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <button className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition hidden md:block">
          English
        </button>
        <button
          onClick={onRegisterClick}
          className="px-4 py-2 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition"
        >
          Register
        </button>
        <button className="md:hidden p-2 rounded hover:bg-blue-100 dark:hover:bg-gray-800">
          <svg
            className="w-6 h-6 text-blue-700 dark:text-blue-300"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  </nav>
);

const Section = ({ id, className = "", children }) => (
  <section
    id={id}
    className={`py-16 px-4 sm:px-8 max-w-7xl mx-auto ${className}`}
  >
    {children}
  </section>
);

const RegistrationModal = ({ open, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    gender: "",
    dateOfBirth: "",
    address: "",
    tehsil: "",
    district: "",
    state: "",
    landmark: "",
    pinCode: "",
    aadharNumber: "",
    panNumber: "",
    khatauniID: "",
    registrationDate: "",
    land: "",
    nomineeName: "",
    nomineeDOB: "",
    nomineePhoneNumber: "",
    nomineeEmail: "",
    nomineeAadharNumber: "",
    nomineePanNumber: "",
    relationshipToAccountHolder: "",
    nomineeGender: "",
    nomineeAddress: "",
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
  if (!open) return null;
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
    <Step6 formData={formData} onPrev={() => setStep(5)} onClose={onClose} />,
  ];
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/30 backdrop-blur-sm px-4 sm:px-6">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6 relative dark:bg-gray-800 overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white text-2xl"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-700 dark:text-blue-300">
          Register as Farmer
        </h2>
        {steps[step - 1]}
        <div className="mt-6 text-sm text-gray-400 dark:text-gray-500 text-center">
          Step {step} of 6
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) return null;
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar onRegisterClick={() => setShowRegister(true)} />
      <RegistrationModal
        open={showRegister}
        onClose={() => setShowRegister(false)}
      />
      {/* Hero Section */}
      <Section
        id="home"
        className="flex flex-col md:flex-row items-center gap-10 md:gap-20"
      >
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-blue-700 dark:text-blue-300">
            Empowering Participation Among Farmers
          </h1>
          <p className="text-lg md:text-xl font-medium">
            Digitizing US$265 billion worth grains at farm-gate for 140 million
            farmers.
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="#about"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              About Us
            </a>
            <a
              href="#process"
              className="px-6 py-3 bg-white dark:bg-gray-800 border border-blue-600 text-blue-700 dark:text-blue-300 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-gray-700 transition"
            >
              The Process
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img src="/Truck.jpg" alt="Grainbank" className="drop-shadow-xl" />
        </div>
      </Section>

      {/* About Us */}
      <Section
        id="about"
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex flex-col md:flex-row items-center gap-10"
      >
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-300">
            Let’s deposit some Grains in the Bank
          </h2>
          <p className="text-lg">
            We have created a Grainbank that enables farmers to convert their
            grains into tradable digital assets, avail credit against those
            assets through partner NBFCs and Banks, and get better prices for
            their produce.
          </p>
          <p className="text-lg">
            The Grain Storage Grainbank platform empowers farmers by providing
            them with a choice on when, how much quantity and at what price they
            want to sell their produce, thus maximising their income.
          </p>
          <div className="flex flex-wrap gap-4 mt-2">
            <a
              href="#"
              className="px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Download Farmer App
            </a>
            <a
              href="#"
              className="px-4 py-2 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition"
            >
              Download Buyer App
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="/Grainbags.jpg"
            alt="About Grain Storage"
            width={320}
            height={320}
          />
        </div>
      </Section>

      {/* Challenges Section */}
      <Section
        id="challenges"
        className="bg-blue-50 dark:bg-gray-800 rounded-2xl shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">
          CHALLENGES FACED BY FARMERS
        </h2>
        <p className="mb-4">
          Most of the warehouses are currently located close to mandis in larger
          towns. Moreover, they primarily cater to larger farmers or traders who
          can afford the logistics cost owing to the large quantities of grains
          being dealt with.
        </p>
        <p className="mb-4">
          However, in a country where most of the farmers produce less than Rs.
          1 lakh worth of grains in a year, these services are not a value add
          for most of these farmers. As a result, a majority of these farmers do
          not get access to institutional services. This leads to massive loss
          of produce due to poor storage and also results in exploitation of
          farmers in the hands of the traders, because farmers need immediate
          liquidity to cater to their expenses and credit repayments.
        </p>
        <h3 className="text-xl font-semibold mt-8 mb-2">
          Solved By Grainbank Model
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
          <div className="flex flex-col items-center gap-2 p-4 bg-white dark:bg-gray-900 rounded-xl shadow">
            <img
              src="/globe.svg"
              alt="Network of Warehouses"
              width={60}
              height={60}
            />
            <h4 className="font-bold text-blue-700 dark:text-blue-300">
              Network of Warehouses
            </h4>
            <p className="text-center">
              Scientifically managed warehouses at farmgate where farmers can
              store even a single bag of grains.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 bg-white dark:bg-gray-900 rounded-xl shadow">
            <img
              src="/vercel.svg"
              alt="Credit Availability"
              width={60}
              height={60}
            />
            <h4 className="font-bold text-blue-700 dark:text-blue-300">
              Credit Availability
            </h4>
            <p className="text-center">
              Credit available from partner banks/NBFCs against grains stored
              with Grain Storage.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 bg-white dark:bg-gray-900 rounded-xl shadow">
            <img src="/next.svg" alt="Market Linkage" width={60} height={60} />
            <h4 className="font-bold text-blue-700 dark:text-blue-300">
              Market Linkage
            </h4>
            <p className="text-center">
              Empowering farmers with a choice to sell a single bag of grain.
              Grain Storage aggregates the supply, and offers farmers market
              linkage to sell their stored grains.
            </p>
          </div>
        </div>
      </Section>

      {/* The Process */}
      <Section id="process">
        <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-300 mb-8">
          FARMER process
        </h2>
        <ol className="list-decimal pl-6 space-y-2 text-lg">
          <li>Farmers register on the mobile app/web</li>
          <li>Farmers book space in the Grainbank for storage.</li>
          <li>Grains are inspected for quality at the warehouse.</li>
          <li>Grain bags are deposited into the Grainbank.</li>
          <li>The information is digitised making the grain bags fungible.</li>
          <li>Farmers can access their digital inventory in one click.</li>
          <li>Farmers can sell a single unit of grains in just one click.</li>
          <li>Farmers can avail direct credit against their stored grains.</li>
        </ol>
      </Section>

      {/* Buyer Advantages */}
      <Section
        id="buyers"
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
      >
        <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">
          BUYER Advantages
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
          <li>1.5 Lakh Farmer Access</li>
          <li>2 million MT Grain Access</li>
          <li>Everyday Low-Price Offers</li>
          <li>Zero upfront FUND Purchase Orders – SPOT Purchase</li>
          <li>
            Super Fast FUND movement (IN & OUT) – Razorpay Payment gateway
          </li>
          <li>Pre-Approved Loan Amount worth 10 Crores / per Buyer</li>
          <li>Download Statement Anytime</li>
          <li>Super Easy Bill Settlement</li>
        </ul>
      </Section>

      {/* Team Section */}
      <Section id="team">
        <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-300 mb-8">
          OUR FAMILY
          <br />
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col items-center">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="D K Mittal"
              width={80}
              height={80}
              className="rounded-full"
            />
            <h4 className="font-bold mt-4">Shri D K Mittal</h4>
            <p className="text-blue-700 dark:text-blue-300">
              Independent Director and Chairman - Grain Storage
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col items-center">
            <img
              src="https://randomuser.me/api/portraits/men/33.jpg"
              alt="Kishor Kumar Jha"
              width={80}
              height={80}
              className="rounded-full"
            />
            <h4 className="font-bold mt-4">Kishor Kumar Jha</h4>
            <p className="text-blue-700 dark:text-blue-300">CEO and Director</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col items-center">
            <img
              src="https://randomuser.me/api/portraits/men/34.jpg"
              alt="Praveen Kumar"
              width={80}
              height={80}
              className="rounded-full"
            />
            <h4 className="font-bold mt-4">Praveen Kumar</h4>
            <p className="text-blue-700 dark:text-blue-300">COO and Director</p>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col items-center">
            <img
              src="https://randomuser.me/api/portraits/men/35.jpg"
              alt="TCM Sundaram"
              width={80}
              height={80}
              className="rounded-full"
            />
            <h4 className="font-bold mt-4">TCM Sundaram</h4>
            <p className="text-blue-700 dark:text-blue-300">
              Founder & Managing Director at Chiratae Ventures
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col items-center">
            <img
              src="https://randomuser.me/api/portraits/women/36.jpg"
              alt="Smriti Chandra"
              width={80}
              height={80}
              className="rounded-full"
            />
            <h4 className="font-bold mt-4">Smriti Chandra</h4>
            <p className="text-blue-700 dark:text-blue-300">
              Nominee Director-Grain Storage
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col items-center">
            <img
              src="https://randomuser.me/api/portraits/men/37.jpg"
              alt="Shashvat Rai"
              width={80}
              height={80}
              className="rounded-full"
            />
            <h4 className="font-bold mt-4">Shashvat Rai</h4>
            <p className="text-blue-700 dark:text-blue-300">
              Nominee Director - Grain Storage
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <a
            href="#"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            View All
          </a>
        </div>
      </Section>

      {/* Investors Section */}
      <Section
        id="investors"
        className="bg-blue-50 dark:bg-gray-800 rounded-2xl shadow-lg"
      >
        <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">
          As Supported By Our Investors
        </h2>
        <div className="flex flex-wrap gap-6 items-center justify-center">
          <img src="/vercel.svg" alt="Aavishkaar" width={80} height={40} />
          <img src="/next.svg" alt="Chiratae Ventures" width={80} height={40} />
          <img src="/file.svg" alt="CDC Group" width={80} height={40} />
          <img src="/globe.svg" alt="Abler Nordic" width={80} height={40} />
        </div>
      </Section>

      {/* Press Section */}
      <Section
        id="press"
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
      >
        <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">
          Press Talk
          <br />
          What People Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-50 dark:bg-gray-900 rounded-xl shadow p-6 flex flex-col gap-2">
            <span className="font-semibold">techstory.in</span>
            <span className="text-xs text-gray-500">
              Dec 14, 2020 | Chhavideep Singh
            </span>
            <p>
              “Agritech start-up, Grain Storage bags additional funding of US$
              3million from London based CDC Group Plc in its Series A round.”
            </p>
            <a href="#" className="text-blue-600 hover:underline">
              Read More
            </a>
          </div>
          <div className="bg-blue-50 dark:bg-gray-900 rounded-xl shadow p-6 flex flex-col gap-2">
            <span className="font-semibold">Economic Times</span>
            <span className="text-xs text-gray-500">Oct 8, 2020 | ETTech</span>
            <p>
              “Agritech startup Grain Storage Business Solutions has raised Rs
              38.5 crore in Series A funding from Chiratae Ventures and
              Aavishkar Capital. The ongoing round could see it raise as much as
              Rs 80 crore.”
            </p>
            <a href="#" className="text-blue-600 hover:underline">
              Read More
            </a>
          </div>
          <div className="bg-blue-50 dark:bg-gray-900 rounded-xl shadow p-6 flex flex-col gap-2">
            <span className="font-semibold">Indian Startup News</span>
            <span className="text-xs text-gray-500">
              Oct 7, 2020 | Vivek Vishwakarma
            </span>
            <p>
              “Agritech Startup Grain Storage Raises $5 Million From Chiratae
              Ventures And Aavishkaar Capital.”
            </p>
            <a href="#" className="text-blue-600 hover:underline">
              Read More
            </a>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <a
            href="#"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            View All
          </a>
        </div>
      </Section>

      {/* Partners Section */}
      <Section
        id="partners"
        className="bg-blue-50 dark:bg-gray-800 rounded-2xl shadow-lg"
      >
        <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">
          Our Partners
        </h2>
        <div className="flex flex-wrap gap-6 items-center justify-center">
          <img src="/file.svg" alt="Partner 1" width={60} height={60} />
          <img src="/window.svg" alt="Partner 2" width={60} height={60} />
          <img src="/globe.svg" alt="Partner 3" width={60} height={60} />
        </div>
        <div className="flex justify-center mt-8">
          <a
            href="#"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Partner with us
          </a>
        </div>
      </Section>

      {/* Policies Section */}
      <Section
        id="policies"
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
      >
        <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">
          Policies
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Media</li>
          <li>Financials</li>
          <li>Careers</li>
          <li>Privacy Policy</li>
          <li>Terms and Conditions</li>
          <li>Mobile Apps User Data Deletion Procedure</li>
          <li>Grievance Redressal Mechanism</li>
        </ul>
      </Section>

      {/* Contact Section */}
      <Section
        id="contact"
        className="bg-blue-50 dark:bg-gray-800 rounded-2xl shadow-lg"
      >
        <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold">Grain Storage</h3>
            <p>
              Nitesh TimeSquare,
              <br />
              #8, MG Road,
              <br />
              Bangalore - 560001, INDIA
              <br />
              contact@Grain Storage.in
            </p>
            <p className="mt-2 font-semibold">Farmer Helpline Number</p>
            <p>9801985666</p>
          </div>
          <div>
            <h3 className="font-bold">Grain Storage</h3>
            <p>
              1st Floor KV Complex,
              <br />
              RPS More, Bailey Road,
              <br />
              Danapur, Patna
              <br />
              Bihar: 801503, INDIA
            </p>
          </div>
        </div>
        <form className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
          />
          <input
            type="text"
            placeholder="Type of Query"
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 md:col-span-2"
          />
          <textarea
            placeholder="Message"
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 md:col-span-3"
            rows={3}
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition md:col-span-3"
          >
            Send Query
          </button>
        </form>
      </Section>

      {/* Footer */}
      <footer className="w-full py-8 px-4 sm:px-8 bg-gray-100 dark:bg-gray-900 text-center text-gray-500 text-sm mt-8">
        © Grain Storage, Bangalore, India, 2025
        <br />
        Website Developed By thegraphiclink.com
      </footer>
    </div>
  );
};

export default HomePage;

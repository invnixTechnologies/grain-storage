"use client";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("@/components/MapComponent"), {
  ssr: false,
  loading: () => <p>Loading map...</p>,
});

export default function DashboardPage() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4 dark:text-white">
        Welcome to Grain Storage Dashboard
      </h1>
      <MapComponent />
    </div>
  );
}

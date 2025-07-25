"use client";

// START: Preserve spaces to avoid auto-sorting
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
// END: Preserve spaces to avoid auto-sorting

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useEffect, useState } from "react";

const LOCATIONS = [
  { name: "Patna", coords: [25.5941, 85.1376] },
  { name: "Gorakhpur", coords: [26.7606, 83.3732] },
  { name: "Deoria", coords: [26.5017, 83.7794] },
];

function getDistanceInKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export default function MapComponent() {
  const [userLocation, setUserLocation] = useState(null);
  const [distances, setDistances] = useState([]);
  const [isMounted, setIsMounted] = useState(false); // for client-only rendering

  useEffect(() => {
    setIsMounted(true);

    if (typeof window !== "undefined" && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userCoords = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setUserLocation(userCoords);

          const calculatedDistances = LOCATIONS.map((loc) => {
            const dist = getDistanceInKm(
              userCoords.lat,
              userCoords.lng,
              loc.coords[0],
              loc.coords[1]
            );
            return { ...loc, distance: dist.toFixed(2) };
          });

          setDistances(calculatedDistances);
        },
        (error) => {
          console.error("Geolocation error:", error);
        }
      );
    }
  }, []);

  if (!isMounted) return null; // Don't render MapContainer until mounted

  return (
    <div>
      <div
        id="leaflet-map"
        style={{ height: "400px", width: "100%" }}
        key={JSON.stringify(userLocation)} // Force remount when user location changes
      >
        <MapContainer
          center={userLocation || [26.5, 84.5]}
          zoom={7.5}
          scrollWheelZoom={true}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {LOCATIONS.map((loc, index) => (
            <Marker key={index} position={loc.coords}>
              <Popup>{loc.name} GrainBank Center</Popup>
            </Marker>
          ))}

          {userLocation && (
            <Marker position={[userLocation.lat, userLocation.lng]}>
              <Popup>Your Location</Popup>
            </Marker>
          )}
        </MapContainer>
      </div>

      <div className="mt-4 text-sm text-gray-800 dark:text-white ">
        <h3 className="font-semibold mb-2">
          📍 Your Distance to GrainBank Locations:
        </h3>
        {userLocation ? (
          <ul className="list-disc ml-6 ">
            {distances.map((loc, idx) => (
              <li key={idx}>
                {loc.name}: {loc.distance} km
              </li>
            ))}
          </ul>
        ) : (
          <p>Fetching your location...</p>
        )}
      </div>
    </div>
  );
}

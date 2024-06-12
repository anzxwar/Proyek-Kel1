"use client";

import { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { ref, onValue, off } from "firebase/database"; // Import necessary functions

export default function GetData() {
  const [firebaseData, setFirebaseData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataRef = ref(db, "sensors"); // Get reference to "Sensor" node
        onValue(dataRef, (snapshot) => {
          const data = snapshot.val();
          setFirebaseData(data);
          setLoading(false);
        });
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      // Cleanup function to remove the listener when component unmounts
      const dataRef = ref(db, "sensors");
      off(dataRef);
    };
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Firebase Data</h1>
      <pre>{JSON.stringify(firebaseData, null, 2)}</pre>
    </div>
  );
}

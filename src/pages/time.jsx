import React, { useState } from "react";
import Loader from "../components/loader";

const Time = () => {
  const [city, setCity] = useState("");
  const [timeInfo, setTimeInfo] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError(null);
      setLoading(true);

      const response = await fetch(
        `https://api.api-ninjas.com/v1/worldtime?city=${city}`,
        {
          method: "GET",
          headers: {
            "X-Api-Key": "9mRlhGpzprR7wcakEMddhg==Y0IFo3VuVjGT80rb",
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setTimeInfo(data);
      } else {
        setError("Nama kota tidak valid.");
        setTimeInfo(null);
      }
    } catch (error) {
      setError("Terjadi kesalahan saat memuat data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="time-container">
      <form onSubmit={handleSubmit}>
        <h1>World Time Information</h1>
        <input
          type="text"
          value={city}
          placeholder="nama kota..."
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Cari Waktu</button>
      </form>

      {loading && <Loader />}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {timeInfo && (
        <div className="time-output">
          <p>Kota: {timeInfo.timezone}</p>
          <p>Hari: {timeInfo.day_of_week}</p>
          <p>Waktu: {timeInfo.datetime}</p>
          {/* Render informasi lainnya jika diperlukan */}
        </div>
      )}
    </div>
  );
};

export default Time;

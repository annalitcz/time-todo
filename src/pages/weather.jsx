import React, { useState } from "react";
import Loader from "../components/loader";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError(null);
      setLoading(true);

      const response = await fetch(
        `https://api.api-ninjas.com/v1/weather?city=${city}`,
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
        setWeatherInfo(data);
        setError(null);
      } else {
        setError("Nama kota tidak valid.");
        setWeatherInfo(null);
      }
    } catch (error) {
      setError("Terjadi kesalahan saat memuat data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>World Weather Information</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Masukkan nama kota:
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <button type="submit">cek cuaca</button>
      </form>

      {loading && <Loader/>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {weatherInfo && !error && (
        <div>
          <p>Temperatur: {weatherInfo.temp} ℃</p>
          <p>Kecepatan Angin: {weatherInfo.wind_speed} km/h</p>
          <p>Kelembapan: {weatherInfo.humidity}%</p>
          {/* Render informasi lainnya jika diperlukan */}
        </div>
      )}
    </div>
  );
};

export default Weather;

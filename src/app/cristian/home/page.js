'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';

export default function HomePage() {
  const [weatherData, setWeatherData] = useState({
    cali: null,
    pitalito: null
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        
        // Datos de ejemplo para ambas ciudades
        const caliData = {
          main: { temp: 28, humidity: 65 },
          weather: [{ description: 'Parcialmente nublado' }],
          name: 'Cali',
          sys: { country: 'CO' }
        };
        
        const pitalitoData = {
          main: { temp: 22, humidity: 75 },
          weather: [{ description: 'Lluvia ligera' }],
          name: 'Pitalito',
          sys: { country: 'CO' }
        };

        setWeatherData({
          cali: caliData,
          pitalito: pitalitoData
        });
        
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  const WeatherCard = ({ cityData, cityName }) => (
    <div className={styles.card}>
      <div className={styles.header}>
        <h1 className={styles.city}>{cityData?.name}, {cityData?.sys?.country}</h1>
        <p className={styles.description}>
          {cityData?.weather?.[0]?.description}
        </p>
      </div>
      
      <div className={styles.temperature}>
        <span className={styles.tempValue}>
          {Math.round(cityData?.main?.temp)}°C
        </span>
      </div>
      
      <div className={styles.details}>
        <div className={styles.detail}>
          <span className={styles.label}>Humedad:</span>
          <span className={styles.value}>{cityData?.main?.humidity}%</span>
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.cardsGrid}>
          <div className={styles.card}>
            <div className={styles.loading}>Cargando información del clima...</div>
          </div>
        </div>
      </div>
    );
  }

  if (error && !weatherData.cali && !weatherData.pitalito) {
    return (
      <div className={styles.container}>
        <div className={styles.cardsGrid}>
          <div className={styles.card}>
            <div className={styles.error}>Error: {error}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.cardsGrid}>
        <WeatherCard cityData={weatherData.cali} cityName="Cali" />
        <WeatherCard cityData={weatherData.pitalito} cityName="Pitalito" />
      </div>
    </div>
  );
}

import { useState, useEffect } from 'react';
import SensorData1 from '../data/sensorData1.json';
import { fetchStreams } from '../services/sensorApi.js';

export const useSensorData = (useMock = true, endpoint = '/api/streams') => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    // If useMock is true, load local JSON mock data immediately
    if (useMock) {
      setData(SensorData1);
      setLoading(false);
      return () => controller.abort();
    }

    // Fetch live data using the custom fetchStreams service function
    fetchStreams({ signal: controller.signal })
      .then((json) => {
        setData(Array.isArray(json) ? json : []);
        setLoading(false);
      })
      .catch((err) => {
        if (err?.name === 'AbortError') {
          return;
        }
        setError(err);
        setLoading(false);
      });

    // Cleanup function to abort fetch request on component unmount or dependency change
    return () => controller.abort();
  }, [useMock, endpoint]);

  return { data, loading, error };
};
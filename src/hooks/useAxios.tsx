import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxios = (url: string) => {
  const [data, setData] = useState(null);
  const [failed, setFailed] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData(url);
  }, [url]);

  const fetchData = async (url: string) => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (failed) {
      setLoading(false);
      setFailed(failed);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, failed };
};

export default useAxios;

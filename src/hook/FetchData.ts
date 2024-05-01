import axios from 'axios';
import { useEffect, useState } from 'react';

interface FetchResult<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
}

const useFetchData = <T>(url: string): FetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!url) return;
      setIsLoading(true);
      try {
        const response = await axios.get(url);
        setData(response.data);
        setError(null);
        setIsLoading(false);
      } catch (err) {
        setError(err as Error);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetchData;

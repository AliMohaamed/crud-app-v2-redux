import { useEffect, useState } from "react";

export function useFetch(cbFun, ...args) {
  let [data, setData] = useState([]);
  let [isLoading, setIsLoading] = useState(false);
  let [errors, setErrors] = useState(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await cbFun(...args);
      setData(response.data);
    } catch (error) {
      setErrors(error.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [cbFun]);

  return { data, isLoading, errors };
}

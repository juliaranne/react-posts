import { useEffect, useState } from "react";
import axios from "axios";

const useAxios = ({ method, url }) => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState();

  useEffect(() => {
    const makeRequest = () => {
      axios[method](url)
        .then((response) => {
          setResponse(response.data);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => setLoading(false));
    };

    makeRequest();
  }, [url, method]);

  return { response, error, loading };
};

export default useAxios;

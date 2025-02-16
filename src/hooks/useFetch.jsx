import { useEffect, useState } from "react";

export const useFetch = () => {
  const [data, setData] = useState(null);
  // const [error, setError] = useState(null);
  // const [isPending, setIsPending] = useState(false);

  // const fetchData =
  //   (async () => {
  //     setIsPending(true);
  //     try {
  //       const res = await fetch(url);
  //       const data = res.data;
  //       setData(data);
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setIsPending(false);
  //     }
  //   },
  //   [url]);

  // );

  useEffect(() => {
    const fetchData = async () => {
      const req = await fetch("http://localhost:3000/data");
      const data = await req.json();
      // setData(data.slice(0, 4));
      setData(data);
    };
    fetchData();
  }, []);

  return { data };
};

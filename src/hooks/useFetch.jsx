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
      const req = await fetch(
        "https://file.notion.so/f/f/5b638310-5a1e-44da-a320-410c29ac135b/9489b2d7-7a13-4058-8fa1-f79a6f0c5e10/data.json?table=block&id=1948b22a-1b3d-80fa-9c0a-c4820fb4b35d&spaceId=5b638310-5a1e-44da-a320-410c29ac135b&expirationTimestamp=1739390400000&signature=XwhnEWLEuO0RmTEMd3X8QRKVj84nEvqcu6Yz-2LUCd8&downloadName=data.json"
      );
      const data = await req.json();
      // setData(data.slice(0, 4));
      setData(data);
    };

    fetchData();
  }, []);

  return { data };
};

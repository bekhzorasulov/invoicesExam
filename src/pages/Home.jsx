import Header from "../components/Header";
import InvoiceItem from "../components/InvoiceItem";
import ErrorPage from "../components/ErrorPage";
import { useEffect, useState } from "react";
import { getAllData } from "../request/dataRequest";

function Home() {
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);
    getAllData()
      .then((res) => {
        setData(res);
      })
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <p className="m-auto flex items-center gap-2">
        Loading<span className="loading loading-dots loading-md"></span>
      </p>
    );

  return (
    <div className="align-elements my-auto h-screen">
      <Header setFilteredData={setFilteredData} />
      <div className="flex flex-col gap-4 mt-14 h-[430px] overflow-y-auto scrollbar-custom">
        {data && data.length > 0 ? (
          <InvoiceItem filteredData={filteredData} />
        ) : (
          <ErrorPage />
        )}
      </div>
    </div>
  );
}

export default Home;

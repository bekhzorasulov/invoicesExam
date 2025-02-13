import Header from "../components/Header";
import InvoiceItem from "../components/InvoiceItem";
import ErrorPage from "../components/ErrorPage";
import { useFetch } from "../hooks/useFetch";
import { useState } from "react";

function Home() {
  const { data } = useFetch();
  const [filteredData, setFilteredData] = useState([]);

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

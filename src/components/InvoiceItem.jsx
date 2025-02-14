import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { useFetch } from "../hooks/useFetch";
import StatusStyle from "./StatusStyle";

function InvoiceItem({ filteredData }) {
  const { data } = useFetch();
  console.log(data);

  if (!filteredData)
    return (
      <p className="m-auto flex items-center gap-2">
        Loading<span className="loading loading-dots loading-md"></span>
      </p>
    );

  return (
    <div>
      {filteredData.map((info) => (
        <Link
          to={`/about/${info.id}`}
          key={info.id}
          className="list-a p-4 rounded-lg shadow-md flex justify-between items-center align-elements mt-5"
        >
          <div className="flex items-center gap-10">
            <span className="font-bold text-xs">#{info.id}</span>
            <span className="text-gray-500 fond-normal text-xs w-[110px]">
              {info.paymentDue}
            </span>
            <span className="text-gray-500 font-medium self-start">
              {info.clientName}
            </span>
          </div>
          <span className="font-bold text-base text-right">{info.total}</span>
          <StatusStyle status={info.status} />
          <FaAngleRight />
        </Link>
      ))}
    </div>
  );
}

export default InvoiceItem;

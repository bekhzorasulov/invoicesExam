import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import StatusStyle from "./StatusStyle";
import ErrorPage from "./ErrorPage";

function InvoiceItem({ filteredData }) {
  return (
    <div>
      {!filteredData ? (
        <ErrorPage />
      ) : (
        filteredData?.map((info) => (
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
            {info.total
              ? `£${info.total}`
              : `${info.items.map((item, index) => {
                  return (
                    <span
                      key={index}
                      className="font-bold text-base text-right"
                    >
                      £{Number(item.price * item.quantity)}
                    </span>
                  );
                })}`}
            {/* {info.items.map((item, index) => {
              return (
                <span key={index} className="font-bold text-base text-right">
                  £{item.price * item.quantity}
                </span>
              );
            })} */}
            {/* <span className="">${info.total}</span> */}
            <StatusStyle status={info.status} />
            <FaAngleRight />
          </Link>
        ))
      )}
    </div>
  );
}

export default InvoiceItem;

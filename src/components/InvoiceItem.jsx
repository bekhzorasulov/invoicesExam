import { Link } from "react-router-dom";

function InvoiceItem() {
  return (
    <Link
      //       to={`${invoice.id}`}
      className="list-a p-4 rounded-lg shadow-md flex justify-between items-center"
    >
      <span className="font-bold text-xs">#RT3080</span>
      <span className="text-gray-500 fond-normal text-xs">Due 19 Aug 2021</span>
      <span className="text-gray-500 font-medium ">Jensen Huang</span>
      <span className="font-bold text-base ">$1.800.900</span>
      <span className={`px-3 py-1 rounded-full `}>Status</span>
    </Link>
  );
}

export default InvoiceItem;

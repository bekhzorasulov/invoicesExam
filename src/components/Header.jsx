import { RiArrowDropDownLine } from "react-icons/ri";
import { useFetch } from "../hooks/useFetch";
import ButtonSideBar from "./ButtonSideBar";
import { useEffect, useState } from "react";

function Header({ setFilteredData }) {
  const { data } = useFetch();
  const [selectedStatus, setSelectedStatus] = useState([]);

  const filtered =
    selectedStatus.length > 0
      ? data.filter((b) => selectedStatus.includes(b.status))
      : data;

  useEffect(() => {
    if (!data) return;
    setFilteredData(filtered);
  }, [selectedStatus, data, setFilteredData]);

  if (!data)
    return (
      <p className="m-auto flex items-center gap-2">
        Loading<span className="loading loading-dots loading-md"></span>
      </p>
    );

  const uniqueStatus = [...new Set(data.map((item) => item.status))];

  const handleFilterChange = (status) => {
    setSelectedStatus((prev) =>
      prev.includes(status)
        ? prev.filter((s) => s !== status)
        : [...prev, status]
    );
  };

  return (
    <div className="align-elements flex justify-between items-center mt-16 rounded-lg shadow-md">
      <div>
        <h1 className="font-spartan font-bold text-3xl">Invoices</h1>
        <p className="font-spartan font-normal text-[#888EB0] ">
          {data ? `There are ${filtered.length} total invoices` : "No Invoices"}
        </p>
      </div>
      <div className="flex items-center gap-10">
        <div className="dropdown">
          <div tabIndex={0} role="" className="flex items-center">
            <h2 className="">Filter by status</h2>
            <RiArrowDropDownLine className="w-[40px] h-[20px]" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            {uniqueStatus.map((status, index) => (
              <li key={index}>
                <label>
                  <span className="flex items-center gap-3 capitalize">
                    <input
                      type="checkbox"
                      className="checkbox"
                      onChange={() => handleFilterChange(status)}
                      checked={selectedStatus.includes(status)}
                    />
                    {status}
                  </span>
                </label>
              </li>
            ))}
            {/* <li>
              <label>
                <span className="flex items-center gap-3">
                  <input type="checkbox" className="checkbox" />
                  Pending
                </span>
              </label>
            </li>
            <li>
              <label>
                <span className="flex items-center gap-3">
                  <input type="checkbox" className="checkbox" />
                  Paid
                </span>
              </label>
            </li> */}
          </ul>
        </div>
        <div>
          <ButtonSideBar />
        </div>
      </div>
    </div>
  );
}

export default Header;

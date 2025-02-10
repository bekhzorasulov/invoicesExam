import { RiArrowDropDownLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";

function Header() {
  return (
    <div className="align-elements flex justify-between items-center mt-16 p-4 rounded-lg shadow-md">
      <div>
        <h1 className="font-spartan font-bold text-3xl">Invoices</h1>
        <p className="font-spartan font-normal text-[#888EB0] ">
          There are <span>7</span> total invoices
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
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
        <div>
          <button className="btn bg-primary-light text-white font-spartanBold text-sm rounded-3xl">
            <FaPlus className="" />
            New Invoice
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;

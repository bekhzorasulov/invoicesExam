import { IoAddOutline } from "react-icons/io5";
import FormInput from "./FormInput";
import { MdOutlineDelete } from "react-icons/md";
import { Form } from "react-router-dom";

function ButtonSideBar() {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer"
          className="btn bg-[#7C5DFA] hover:bg-[#6349ca] text-white w-40 rounded-full flex justify-between pl-2 pr-6 drawer-button"
        >
          <span className="rounded-full w-6 h-6 bg-white">
            <IoAddOutline className="w-full h-full text-[#7C5DFA] font-bold" />
          </span>
          <p> New Invoice</p>
        </label>
      </div>

      <Form className="drawer-side ml-[95px]">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content  min-h-full w-1/2 p-4">
          <div className="max-w-3xl mx-auto p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6">New Invoice</h1>
            <h2 className="text-purple-600 font-semibold mb-2">Bill From</h2>
            <FormInput
              name="streetAddress"
              type="text"
              placaholder="19 Union Terrace"
              mainName="Street Address"
            />

            <div className="grid grid-cols-3 gap-4 mt-4">
              <FormInput
                name="city"
                type="text"
                placaholder="London"
                mainName="City"
              />
              <FormInput
                name="postCode"
                type="text"
                placaholder="E1 3EZ"
                mainName="Post Code"
              />
              <FormInput
                name="country"
                type="text"
                placaholder="United Kingdom"
                mainName="Country"
              />
            </div>

            <h2 className="text-purple-600 font-semibold mt-6 mb-2">Bill To</h2>
            <FormInput
              name="clientName"
              type="text"
              placaholder="Alex Grim"
              mainName="Client’s Name"
            />
            <FormInput
              name="clientEmail"
              type="email"
              placaholder="alexgrim@mail.com"
              mainName="Client’s Email"
            />
            <FormInput
              name="streetAddress"
              type="text"
              placaholder="84 Church Way"
              mainName="Street Address"
            />

            <div className="grid grid-cols-3 gap-4 mt-4">
              <FormInput
                name="city"
                type="text"
                placaholder="Bradford"
                mainName="City"
              />
              <FormInput
                name="postCode"
                type="text"
                placaholder="BD1 9PB"
                mainName="Post Code"
              />
              <FormInput
                name="country"
                type="text"
                placaholder="United Kingdom"
                mainName="Country"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <FormInput
                name="invoiceDate"
                type="date"
                mainName="Invoice Date"
              />
              <FormInput
                name="paymentTerms"
                type="text"
                placaholder="Net 30 Days"
                mainName="Payment Terms"
              />
            </div>

            <FormInput
              name="projectDescription"
              type="text"
              placaholder="Graphic Design"
              mainName="Project Description"
            />
            <h2 className="text-gray-600 font-semibold mt-6 mb-2">Item List</h2>
            <div className="grid grid-cols-4 gap-4">
              <FormInput
                name="itemName"
                type="text"
                placaholder="Banner Design"
                mainName="Item Name"
              />
              <FormInput
                name="qty"
                type="number"
                placaholder="1"
                mainName="Qty."
              />
              <FormInput
                name="price"
                type="number"
                placaholder="156.00"
                mainName="Price"
              />
              <div className="flex flex-col mt-4 ">
                <h3 className="mb-1">Total </h3>
                <div className="flex items-center justify-between">
                  <span className="border-solid border-1 rounded-sm px-4 py-2 flex justify-between items-center text-gray-400">
                    123asd
                  </span>

                  <MdOutlineDelete className="text-3xl" />
                </div>
              </div>
            </div>

            <button className="btn w-full py-2 mt-4 rounded-lg text-secodary-dark">
              + Add New Item
            </button>

            <div className="flex justify-between mt-6">
              <button className="btn py-2 px-6 rounded-lg text-secodary-dark">
                Discard
              </button>
              <div className="flex gap-2">
                <button className="bg-gray-700 text-white py-2 px-6 rounded-lg">
                  Save as Draft
                </button>
                <button className="bg-purple-600 text-white py-2 px-6 rounded-lg">
                  Save & Send
                </button>
              </div>
            </div>
          </div>
        </ul>
      </Form>
    </div>
  );
}

export default ButtonSideBar;

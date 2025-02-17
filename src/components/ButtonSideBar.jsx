import FormInput from "./FormInput";
import { IoAddOutline } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";
import { objectCreater } from "../utils/objectCreate";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function ButtonSideBar() {
  const drawerRef = useRef(null);
  const formRef = useRef(null);
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  const handleReload = () => {
    window.location.reload();
  };

  const handleDiscard = () => {
    if (drawerRef.current) {
      drawerRef.current.checked = false;
    }
    if (formRef.current) {
      formRef.current.reset();
    }
    setItems([]);
  };

  const addNewItem = () => {
    setItems([
      ...items,
      {
        id: Date.now(),
        name: "name",
        quantity: Number(1),
        price: Number(1),
        // total: `${items.map((item)=>item.price * item.quan)}`
      },
    ]);
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const updateItem = (id, field, value) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  async function getFormData(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const itemNames = formData.getAll("itemName");
    const quantities = formData.getAll("qty");
    const prices = formData.getAll("price");

    const items = itemNames.map((name, index) => ({
      name,
      quantity: Number(quantities[index]),
      price: Number(prices[index]),
      total: Number(prices[index]) * Number(quantities[index]),
    }));
    const submitter = e.nativeEvent.submitter;
    const status = submitter.dataset.status;

    const invoiceData = objectCreater({
      createdAt: new Date().toISOString().split("T")[0],
      paymentDue: data.invoiceDate,
      description: data.projectDescription,
      paymentTerms: data.paymentTerms,
      clientName: data.clientName,
      clientEmail: data.clientEmail,
      status,
      senderStreet: data.senderStreet,
      senderCity: data.senderCity,
      senderPostCode: data.senderPostCode,
      senderCountry: data.senderCountry,
      street: data.streetAddress,
      city: data.city,
      postCode: data.postCode,
      country: data.country,
      items,
    });

    try {
      const response = await fetch("http://localhost:3000/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(invoiceData),
      });

      if (!response.ok) {
        throw new Error("Serverga ma'lumot yuborishda xatolik!");
      }
      drawerRef.current.checked = false;
      handleReload();
      // navigate("/");
    } catch (error) {
      console.error("Xatolik:", error);
    }

    toast.success("Invoice added successfully");
  }

  return (
    <div className="drawer">
      <input
        ref={drawerRef}
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
      />
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

      <form
        ref={formRef}
        onSubmit={getFormData}
        className="drawer-side ml-[95px]"
      >
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
                name="senderCity"
                type="text"
                placaholder="London"
                mainName="City"
              />
              <FormInput
                name="senderPostCode"
                type="text"
                placaholder="E1 3EZ"
                mainName="Post Code"
              />
              <FormInput
                name="senderCountry"
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
                type="date"
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
            <div className="flex items-center gap-12">
              <p>Item Name</p>
              <p className="ml-[140px]">Qty</p>
              <p className="ml-[20px]">Price</p>
              <p className="ml-[20px]">Total</p>
            </div>
            {items.length === 0 ? (
              <p className="text-gray-500 text-center mt-5">
                Click to <span>Add New Item</span>
              </p>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center py-2 gap-10 w-full"
                >
                  <input
                    name="itemName"
                    type="text"
                    placeholder="Banner Design"
                    className="p-4 rounded-md w-[230px]"
                    // mainName="Item Name"
                    value={item.name}
                    onChange={(e) =>
                      updateItem(item.id, "name", e.target.value)
                    }
                  />
                  <input
                    value={item.quantity}
                    onChange={(e) =>
                      updateItem(item.id, "quantity", Number(e.target.value))
                    }
                    name="quantity"
                    type="number"
                    placeholder="1"
                    className="p-4 rounded-md w-[55px] text-center"
                    min="1"
                    // mainName="Qty."
                  />
                  <input
                    value={item.price}
                    onChange={(e) =>
                      updateItem(item.id, "price", Number(e.target.value))
                    }
                    name="price"
                    type="number"
                    placeholder="156.00"
                    className="p-4 rounded-md w-[55px] text-center"
                    min="0"
                    // mainName="Price"
                  />
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between">
                      <span className="border-solid border-1 rounded-sm px-4 py-2 flex justify-between items-center text-gray-400">
                        {Number(item.quantity * item.price).toFixed(2)}
                      </span>

                      <MdOutlineDelete
                        onClick={() => removeItem(item.id)}
                        className="text-3xl cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              ))
            )}
            <button
              onClick={addNewItem}
              type="button"
              className="btn w-full py-2 mt-4 rounded-lg text-secodary-dark"
            >
              + Add New Item
            </button>

            <div className="flex justify-between mt-6">
              <button
                onClick={handleDiscard}
                type="button"
                className={`btn py-2 px-6 rounded-lg text-secodary-dark`}
              >
                Discard
              </button>
              <div className="flex gap-2">
                <button
                  className="btn bg-primary-dark text-white py-2 px-6 rounded-lg hover:bg-primary-darker"
                  type="submit"
                  data-status="draft"
                >
                  Save as Draft
                </button>
                <button
                  className="btn bg-secondary-dark text-white py-2 px-6 rounded-lg hover:bg-secondary"
                  type="submit"
                  data-status="pending"
                >
                  Save & Send
                </button>
              </div>
            </div>
          </div>
        </ul>
      </form>
    </div>
  );
}

export default ButtonSideBar;

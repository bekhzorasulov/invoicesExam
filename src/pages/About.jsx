import { useNavigate, useParams } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import AboutHeader from "../components/AboutHeader";
import { useEffect, useState } from "react";
import { getOneData } from "../request/dataRequest";

function About() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);
    getOneData(id)
      .then((res) => {
        setData(res);
      })
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <p className="m-auto flex items-center gap-2">
        Loading<span className="loading loading-dots loading-md"></span>
      </p>
    );

  // const product = data.find((item) => item.id === id);
  // console.log(product.items);

  if (!data) {
    return <p>Product not found</p>;
  }

  return (
    <div className="align-elements mt-16 font-spartan">
      <div
        onClick={() => navigate("/")}
        className="flex items-center gap-4 cursor-pointer mb-4"
      >
        <FaAngleLeft className="text-primary-light self-center" />
        <span className="font-bold text-xs">Go back</span>
      </div>
      <AboutHeader />
      <div className="mt-6 h-[450px] overflow-y-auto scrollbar-custom">
        <div className=" rounded-lg p-8">
          <div className="grid grid-cols-2 gap-8 mb-12">
            <div>
              <h1 className="text-2xl font-bold">#{data.id}</h1>
              <p className="text-purple-600">{data.description}</p>
            </div>
            <div className="text-right text-purple-600">
              <p>{data.senderAddress.street}</p>
              <p>{data.senderAddress.city}</p>
              <p>{data.senderAddress.postCode}</p>
              <p>{data.senderAddress.country}</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-purple-600 mb-2">Invoice Date</h2>
                <p className="text-xl font-bold">{data.createdAt}</p>
              </div>
              <div>
                <h2 className="text-purple-600 mb-2">Payment Due</h2>
                <p className="text-xl font-bold">{data.paymentTerms}</p>
              </div>
            </div>
            <div>
              <h2 className="text-purple-600 mb-2">Bill To</h2>
              <p className="text-xl font-bold mb-2">{data.clientName}</p>
              <div className="text-purple-600">
                <p>{data.clientAddress.street}</p>
                <p>{data.clientAddress.city}</p>
                <p>{data.clientAddress.postCode}</p>
                <p>{data.clientAddress.country}</p>
              </div>
            </div>
            <div>
              <h2 className="text-purple-600 mb-2">Sent to</h2>
              <p className="text-sm font-bold">{data.clientEmail}</p>
            </div>
          </div>
          <div className="rounded-lg p-8 mb-8 bg-[#F9FAFE] list-a">
            <table className="w-full">
              <thead>
                <tr className="text-purple-600">
                  <th className="text-left">Item Name</th>
                  <th className="text-center">QTY.</th>
                  <th className="text-right">Price</th>
                  <th className="text-right">Total</th>
                </tr>
              </thead>
              <tbody>
                {data.items &&
                  data.items.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td className="py-4 font-bold">{item.name}</td>
                        <td className="text-center text-purple-600">
                          {item.quantity}
                        </td>
                        <td className="text-right text-purple-600">
                          £{item.price}
                        </td>
                        <td className="text-right font-bold">£{item.total}</td>
                      </tr>
                    );
                  })}
                {/* <tr>
                  <td className="py-4 font-bold">Email Design</td>
                  <td className="text-center text-purple-600">2</td>
                  <td className="text-right text-purple-600">£ 200.00</td>
                  <td className="text-right font-bold">£ 400.00</td>
                </tr> */}
              </tbody>
            </table>
          </div>
          <div className="bg-gray-900 footer-a text-white w-full rounded-lg p-8 flex justify-between items-center">
            <span className="text-lg">Amount Due</span>
            <span className="text-3xl font-bold">£{data.total}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

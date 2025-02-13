import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import AboutHeader from "../components/AboutHeader";

function About() {
  return (
    <div className="align-elements mt-16 font-spartan">
      <Link to={"/"} className="flex items-center gap-4 cursor-pointer mb-4">
        <FaAngleLeft className="text-primary-light self-center" />
        <span className="font-bold text-xs">Go back</span>
      </Link>
      <AboutHeader />
      <div className="mt-6 h-[450px] overflow-y-auto scrollbar-custom">
        <div className=" rounded-lg p-8">
          <div className="grid grid-cols-2 gap-8 mb-12">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">#XM9141</h1>
              <p className="text-purple-600">Graphic Design</p>
            </div>
            <div className="text-right text-purple-600">
              <p>19 Union Terrace</p>
              <p>London</p>
              <p>E1 3EZ</p>
              <p>United Kingdom</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-purple-600 mb-2">Invoice Date</h2>
                <p className="text-xl font-bold">21 Aug 2021</p>
              </div>
              <div>
                <h2 className="text-purple-600 mb-2">Payment Due</h2>
                <p className="text-xl font-bold">20 Sep 2021</p>
              </div>
            </div>
            <div>
              <h2 className="text-purple-600 mb-2">Bill To</h2>
              <p className="text-xl font-bold mb-2">Alex Grim</p>
              <div className="text-purple-600">
                <p>84 Church Way</p>
                <p>Bradford</p>
                <p>BD1 9PB</p>
                <p>United Kingdom</p>
              </div>
            </div>
            <div>
              <h2 className="text-purple-600 mb-2">Sent to</h2>
              <p className="text-xl font-bold">alexgrim@mail.com</p>
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
                <tr>
                  <td className="py-4 font-bold">Banner Design</td>
                  <td className="text-center text-purple-600">1</td>
                  <td className="text-right text-purple-600">£ 156.00</td>
                  <td className="text-right font-bold">£ 156.00</td>
                </tr>
                <tr>
                  <td className="py-4 font-bold">Email Design</td>
                  <td className="text-center text-purple-600">2</td>
                  <td className="text-right text-purple-600">£ 200.00</td>
                  <td className="text-right font-bold">£ 400.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-gray-900 footer-a text-white w-full rounded-lg p-8 flex justify-between items-center">
            <span className="text-lg">Amount Due</span>
            <span className="text-3xl font-bold">£ 556.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

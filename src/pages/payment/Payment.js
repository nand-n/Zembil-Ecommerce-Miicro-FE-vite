import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import ItemCard from "../Cart/ItemCard";
import { useSelector } from "react-redux";

const Payment = () => {

  const products = useSelector((state) => state.orebiReducer.products);


  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Payment gateway" />
      <div className="pb-10">
        <p>Payment gateway only applicable for Production build.</p>
        <Link to="/">
          <button className="w-52 h-10 bg-primeColor text-white text-lg mt-4 hover:bg-black duration-300">
            Explore More
          </button>
        </Link>

        <div className="grid grid-cols-2 gap-4 items-start">
          <div className="col-span-1 col-start-1">
          <div className="w-full h-20 bg-[#F5F7F7] text-primeColor hidden lgl:grid grid-cols-5 place-content-center px-6 text-lg font-titleFont font-semibold">
            <h2 className="col-span-2">Product</h2>
            <h2>Price</h2>
            <h2>Quantity</h2>
            <h2>Sub Total</h2>
          </div>
          <div className="mt-5">
            {products.map((item) => (
              <div key={item._id}>
                <ItemCard item={item} />
              </div>
            ))}
          </div>
          </div>
          <div className="col-span-1 col-start-2 h-full p-4 bg-[#F5F7FF]  ">
          <span className="text-2xl font-bold"> Summary</span>
            <div className="text-lg font-semibold  flex justify-between items-center px-12 mt-10">
              <p>Subtotal</p>
              <p>$13,047.14</p>
            </div>
            <div className="ext-lg font-semibold mt-6 flex justify-between items-center px-12">
            <p>Shiping</p>
              <p>$10.02</p>
            </div>
            <span className="text-xs mt-4 px-12">Standard Rate - Price may vary depending on the item/destination. TECS Staff will contact you.</span>
              <div className="mt-4 px-12">
                <div></div>
                <button className="w-full h-12 bg-green-600 text-white rounded-full flex justify-center items-center text-center ">Pay with Chapa</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
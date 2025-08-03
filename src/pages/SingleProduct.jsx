import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../assets/Loading4.webm";
import Breadcrums from "../components/Breadcrums";
import { IoCart } from "react-icons/io5";
import { useCart } from "../Context/CartContext";

const SingleProduct = () => {
  const params = useParams();
  // console.log(params);
  const [singleProduct, setSingleProduct] = useState("");
  const {addToCart} =useCart()

  const getSingleProduct = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.in/api/products/${params.id}`
      );
     // console.log(res);
      const product = res.data.product;
      setSingleProduct(product);
      //console.log(product);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSingleProduct();
  }, []);

  const originalPrice = Math.round(
    singleProduct.price + (singleProduct.price * singleProduct.discount) / 100
  );
  return (
    <div>
      {singleProduct ? (
        <div className="px-4 pb-4 md:px-0">
          <Breadcrums title={singleProduct.title} />
          <div className="max-w-6xl mx-auto md:p-6  grid   grid-cols-1 md:grid-cols-2  gap-13 ">
            {/* **************************************** Product Image ********************************** */}

            <div className="w-full">
              <img
                src={singleProduct.image}
                alt={singleProduct.title}
                className="rounded w-full object-cover"
              />
            </div>

            {/* ************************************ Product Details  ********************************* */}
            <div className="flex  flex-col gap-6 cursor-pointer ">
              <h1 className="md:text-3xl font-bold text-gray-800">
                {singleProduct.title}{" "}
              </h1>
              <div className="text-gray-700 ">
                {" "}
                {singleProduct.brand?.toUpperCase()} /{" "}
                {singleProduct.Category?.toUpperCase()}/ {singleProduct.model}{" "}
              </div>
              <p className="text-xl text-red-500 font-bold ">
                ${singleProduct.price}{" "}
                <span className="line-through text-gray-700">
                  {" "}
                  ${originalPrice}
                </span>{" "}
                <span className="bg-red-500 text-white p-3 rounded">
                  {" "}
                  {singleProduct.discount}% discount{" "}
                </span>{" "}
              </p>
              <p className="text-gray-700 font-semibold font-serif">
                {" "}
                {singleProduct.description}{" "}
              </p>

              {/*   ********************************  Quantity Selector *****************************************/}

              <div className="flex items-center gap-5 ">
                <label 
                  className="text-sm  font-semibold text-gray-700"
                >
                  Quantity:
                </label>
                <input
                  type="number"
                  min={1}
                  value={1}
                  className="border w-full border-gray-300 rounded  px-2 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 "
                />
              </div>
              <div className="flex gap-4  mt-4">
                <button  onClick={()=>addToCart(singleProduct) }
                 className="px-15  flex  items-center gap-4 py-2 text-lg bg-red-500 text-white rounded cursor-pointer ">
                   <IoCart className="w-6 h-6"/> Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-center h-[400px]">
            <video muted autoPlay loop>
              <source src={Loading} type="video/webm" />
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;

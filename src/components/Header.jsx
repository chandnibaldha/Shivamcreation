import React from "react";
import { cart, logo } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const productData = useSelector((state) => state.counter.productData);

  return (
    <div className="w-full h-20  bg-slate-50 border-b-[1px] border-b-gray-800 sticky top-0 z-50 font-serif">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <div>
            <span className="text-[#14406D] font-bold text-xl">shivam</span>
            <span className="text-[#FE9800] font-mono text-lg">Creation</span>
            {/*  <img className="w-44" src={logo} alt="Logo here" /> */}
          </div>
        </Link>

        <div className="flex items-center gap-8 ">
          <ul className="flex items-center gap-8">
            <Link to="/">
              <li className="text-xl text-[#14406D]  font-semibold hover:text-[#FE9800] hover:underline underline-offset-2 cursor-pointer duration-300 ">
                Home
              </li>
            </Link>

            <li
              className="text-xl text-[#14406D] font-semibold  hover:text-[#FE9800] hover:underline underline-offset-2 cursor-pointer duration-300 t "
              onClick={() => navigate("/men")}
            >
              Men
            </li>

            <li
              className="text-xl text-[#14406D]  font-semibold  hover:text-[#FE9800] hover:underline underline-offset-2 cursor-pointer duration-300  "
              onClick={() => navigate("/women")}
            >
              Women
            </li>
            <li
              className="text-xl text-[#14406D]  font-semibold  hover:text-[#FE9800] hover:underline underline-offset-2 cursor-pointer duration-300  "
              onClick={() => navigate("/Contactus")}
            >
              Contact-us
            </li>
          </ul>
          <div className="relative">
            <img className="w-12" src={cart} alt="cart" />
            <span className="absolute w-12 top-2 left-1 text-sm flex items-center justify-center font-semibold">
              {productData.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

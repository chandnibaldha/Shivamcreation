import React from "react";
import { logo } from "../assets";
import { BiLogoWhatsapp, BiLogoFacebook, BiLogoGithub } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-orange-100 to-blue-100 text-gray-800 font-serif py-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        <div>
          <img className="w-28" src={logo} alt="Logo here" />
          <p className="text-[#14406D] text-lg tracking-wide cursor-pointer">
            @ShivamCreation.com
          </p>
          <div className="flex gap-5 mt-5 text-xl">
            <BiLogoGithub className="hover:cursor-pointer" />
            <BiLogoWhatsapp className="hover:cursor-pointer" />
            <BiLogoFacebook className="hover:cursor-pointer" />
          </div>
        </div>

        {/* Locate US */}
        <div className="cursor-pointer">
          <h2 className="text-2xl text-[#14406D] mb-4">Locate us</h2>
          <div className="text-base flex flex-col gap-2 cursor-pointer">
            <p>Morroco Marrackech</p>
            <p>+1234567890</p>
            <p>ShivamCreation@gmail.com</p>
          </div>
        </div>

        {/* Profile */}
        <div>
          <h2 className="text-2xl text-[#14406D] mb-4 cursor-pointer">
            Quick Links
          </h2>
          <div className="text-base flex flex-col gap-2">
            <p
              className="hover:cursor-pointer hover:text-[#FE9800]"
              onClick={() => navigate("/")}
            >
              Home
            </p>
            <p
              className="hover:cursor-pointer hover:text-[#FE9800]"
              onClick={() => navigate("/men")}
            >
              Men clothes
            </p>
            <p
              className="hover:cursor-pointer hover:text-[#FE9800]"
              onClick={() => navigate("/women")}
            >
              Women
            </p>
          </div>
        </div>

        {/* Subscription */}
        <div>
          <h2 className="text-2xl text-[#14406D] mb-4 cursor-pointer">
            Subscribe
          </h2>
          <div className="text-base flex flex-col gap-2">
            <input
              type="email"
              placeholder="your email address"
              className="bg-slate-50 text-gray-400 border-white border-solid p-3"
            />
            <button
              type="submit"
              className="m-5 bg-white p-2 text-black border-white"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

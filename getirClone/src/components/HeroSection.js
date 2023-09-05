import React, { useState } from "react";
import Slider from "react-slick";
import ReactFlagsSelect from "react-flags-select";
import { FaFacebook } from "react-icons/fa";

export default function HeroSection() {
  const [selected, setSelected] = useState("TR");
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,

    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3500,
    cssEase: "linear",
  };
  const phones = {
    US: "+1",
    DE: "+50",
    TR: "+90",
    IT: "+7",
    IN: "+25",
  };
  return (
    <div className="relative h-[500px] before:bg-gradient-to-r before: from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:h-full before:w-full before:z-10">
      <Slider {...settings}>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg"
            alt=""
          />
        </div>
      </Slider>
      <div className="container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20">
        <div>
          <img
            src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
            alt=""
          />
          <h3 className=" mt-8 text-4xl font-semibold text-white">
            Dakikalar içinde <br /> kapınızda
          </h3>
        </div>
        <div className="w-[400px] rounded-lg bg-gray-50 p-6">
          <h4 className=" text-primary-brand-color text-center font-semibold mb-4">
            Giriş yap veya kayıt ol
          </h4>
          <div className="grid gap-y-3">
            <div className="flex gap-x-2">
              <ReactFlagsSelect
                className="flag-select"
                countries={Object.keys(phones)}
                customLabels={phones}
                selected={selected}
                onSelect={(code) => {
                  console.log(code);
                  setSelected(code);
                }}
              />
              <label className=" flex-1 relative group block">
                <input
                  type="text"
                  required
                  className=" h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors group-hover: border-primary-brand-color outline-none peer text-sm"
                />
                <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500  transition-all peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs">
                  Telefon numarası
                </span>
              </label>
            </div>

            <button className="bg-brand-yellow text-primary-brand-color h-12 flex items-center justify-center rounded-md w-full text-sm font-semibold hover:text-brand-yellow hover:bg-primary-brand-color transition-all">
              Telefon numarası ile devam et
            </button>
            <hr className="h-[1px] bg-gray-300 my-1" />
            <button className="bg-blue-700 bg-opacity-10 text-blue-800 text-opacity-80 px-4 h-12 flex items-center  rounded-md w-full text-sm font-semibold hover:text-white hover:bg-blue-800 hover:bg-opacity-80 transition-all">
              <FaFacebook size={24}></FaFacebook>
              <span className="mx-auto">Facebook ile devam et</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

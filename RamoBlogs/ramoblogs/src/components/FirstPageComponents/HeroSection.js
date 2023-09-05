import axios from "axios";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { v4 as uuidv4 } from "uuid";

function HeroSection() {
  const [IsRegisterScreen, setIsRegisterScreen] = useState(false);

  //form inputs register
  const [username, setusername] = useState("");
  const [fullname, setfullname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [token, setToken] = useState([]);

  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(token));
    console.log("setted");
  }, [token]);

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

  const changeIsRegisterScreen = (e) => {
    e.preventDefault();
    setIsRegisterScreen(!IsRegisterScreen);
  };

  const registerUser = async (e) => {
    e.preventDefault();

    try {
      const id = uuidv4();
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          id,
          username,
          fullname,
          email,
          password,
        }
      );

      if (response.status === 201) {
        alert("user registered successfully");
      }
    } catch (err) {
      console.log(err);
      alert("Username Already Exist. Please Try Again");
    }

    //     axios.post(
    //       baseUrl + 'applications/' + appName + '/dataexport/plantypes' + plan,
    //       body,
    //        {
    //           headers: {
    //               'Authorization': 'Basic xxxxxxxxxxxxxxxxxxx',
    //               'Content-Type' : 'text/plain'
    //           }
    //        }
    //      ).
  };

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      console.log(username, password);
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        { username, password }
      );

      if (response.status === 200) {
        sessionStorage.setItem("username", JSON.stringify(username));
        alert("login successful");

        setToken(response.data.token);
        window.location.href = "/myarticles/undefined";
      }
    } catch (err) {
      console.log(err);
      alert("login failed");
    }
  };

  return (
    <div className="relative h-[400px] before:bg-gradient-to-r before: from-red-900 before:to-transparent before:absolute before:inset-0 before:h-full before:w-full before:z-10">
      <Slider {...settings}>
        <div>
          <img
            className=" w-full h-[400px] object-cover"
            src="https://wallpapercave.com/wp/wp6351120.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className=" w-full h-[400px] object-cover"
            src="https://c4.wallpaperflare.com/wallpaper/796/195/795/anarchy-computer-hack-hacker-wallpaper-preview.jpg"
            alt=""
          />
        </div>
      </Slider>

      <div className="container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20">
        <div className=" text-center">
          <img
            className="rounded-full h-[200px] items-center mb-4"
            src="https://i.pinimg.com/550x/26/3d/49/263d495f2c6043d0e42880315e9238c5.jpg"
            alt=""
          />
          <h3 className=" text-xl font-semibold text-white">
            İnformation Technologies
          </h3>
        </div>
        {!IsRegisterScreen ? (
          <form
            onSubmit={loginUser}
            className=" bg-white w-[300px] rounded-lg p-2 flex flex-col gap-y-2"
          >
            <h4 className=" font-semibold text-center text-gray-900 mt-1">
              Login
            </h4>
            <label className=" flex-1 relative group block">
              <input
                onChange={(e) => {
                  setusername(e.target.value);
                }}
                type="text"
                required
                className=" h-14 px-2 border-2 border-gray-200 rounded w-full transition-colors  focus:border-red-900 outline-none peer text-sm"
              />
              <span className="absolute top-0 left-0 h-full px-2 flex items-center text-xs text-gray-500  transition-all peer-focus:h-7 peer-focus:text-red-900  peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs">
                user name
              </span>
            </label>
            <label className=" flex-1 relative group block">
              <input
                onChange={(e) => setpassword(e.target.value)}
                type="password"
                required
                className=" h-14 px-2 border-2 border-gray-200 rounded w-full transition-colors  focus:border-red-900 outline-none peer text-sm"
              />
              <span className="absolute top-0 left-0 h-full px-2 flex items-center text-xs text-gray-500  transition-all peer-focus:h-7 peer-focus:text-red-900  peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs">
                password
              </span>
            </label>

            <button
              type="submit"
              className=" bg-gray-900 h-12 px-2 text-white flex items-center justify-center rounded w-full text-sm font-semibold  hover:bg-gray-500 transition-all"
            >
              Login
            </button>
            <button
              onClick={changeIsRegisterScreen}
              className=" bg-gray-900 h-12 px-2 text-white flex items-center justify-center rounded w-full text-sm font-semibold  hover:bg-gray-500 transition-all"
            >
              Register
            </button>
          </form>
        ) : (
          <form
            onSubmit={registerUser}
            className=" bg-white w-[300px] rounded-lg p-2 flex flex-col gap-y-1"
          >
            <h4 className=" font-semibold text-center text-gray-900 mt-1">
              Register
            </h4>
            <label className=" flex-1 relative group block">
              <input
                type="text"
                onChange={(e) => {
                  setusername(e.target.value);
                }}
                required
                className=" h-14 px-2 border-2 border-gray-200 rounded w-full transition-colors  focus:border-red-900 outline-none peer text-sm"
              />
              <span className="absolute top-0 left-0 h-full px-2 flex items-center text-xs text-gray-500  transition-all peer-focus:h-7 peer-focus:text-red-900  peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs">
                user name
              </span>
            </label>
            <label className=" flex-1 relative group block">
              <input
                type="text"
                onChange={(e) => {
                  setfullname(e.target.value);
                }}
                required
                className=" h-14 px-2 border-2 border-gray-200 rounded w-full transition-colors  focus:border-red-900 outline-none peer text-sm"
              />
              <span className="absolute top-0 left-0 h-full px-2 flex items-center text-xs text-gray-500  transition-all peer-focus:h-7 peer-focus:text-red-900  peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs">
                full name
              </span>
            </label>
            <label className=" flex-1 relative group block">
              <input
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                type="email"
                required
                className=" h-14 px-2 border-2 border-gray-200 rounded w-full transition-colors  focus:border-red-900 outline-none peer text-sm"
              />
              <span className="absolute top-0 left-0 h-full px-2 flex items-center text-xs text-gray-500  transition-all peer-focus:h-7 peer-focus:text-red-900  peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs">
                email
              </span>
            </label>
            <label className=" flex-1 relative group block">
              <input
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                type="password"
                required
                className=" h-14 px-2 border-2 border-gray-200 rounded w-full transition-colors  focus:border-red-900 outline-none peer text-sm"
              />
              <span className="absolute top-0 left-0 h-full px-2 flex items-center text-xs text-gray-500  transition-all peer-focus:h-7 peer-focus:text-red-900  peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs">
                password
              </span>
            </label>
            <button
              type="submit"
              className=" bg-gray-900 h-9 px-2 text-white flex items-center justify-center rounded w-full text-sm font-semibold  hover:bg-gray-500 transition-all"
            >
              Register
            </button>
            <span className="text-xs text-center ">
              are you already hava an account
            </span>
            <button
              onClick={changeIsRegisterScreen}
              className=" bg-gray-900 h-9 px-2 text-white flex items-center justify-center rounded w-full text-sm font-semibold  hover:bg-gray-500 transition-all"
            >
              login
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default HeroSection;

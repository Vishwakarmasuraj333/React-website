import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import m from "./assets/m.png"
import b from './assets/b.png'
import n from './assets/n.png'
import r from './assets/r.png'
const Section = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 h-screen w-full ">
      {/* LEFT SECTION */}
      <div className="flex flex-col justify-center items-center text-center  px-8">

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Red Bull SugarFree
        </h1>

        <p className="text-white font-medium mb-4 max-w-sm">
          Wings without sugars: Red Bull SugarFree is Red Bull Energy Drink without sugars.
        </p>

        <h2 className="text-2xl font-bold text-blue-900 mb-6">
          $2.99
        </h2>

        <button className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition">
          Shop Now →
        </button>

        <div className="flex gap-4 mt-8 text-white text-4xl">
          <FaInstagram />
          <FaFacebook />
          <FaPinterest />
        </div>

      </div>
      <div className="flex items-center justify-center ">
        <div className="w-[380px] h-[650px] rounded-full shadow-xl/30 bg-blue-300 flex items-center justify-center  transition ">
          <img
            src={r}
            alt="Redbull"
            className="h-[80%] object-contain"
          />
        </div>
      </div>


      <div className=" p-6 flex flex-col justify-between ">
        <div className="space-y-4">

         
          <div className="flex items-center gap-4 bg-white p-3 rounded-xl shadow hover:shadow-lg transition mr-20">
            <img src={m} alt="" className="h-30 bg-blue-700 rounded-2xl w-30 object-cover " />
            <div>
              <h2 className="font-semibold text-white-800 text-2xl mb-5 ">Red Bull SugarFree </h2>
              <h3 className="text-blue-500 font-bold ">$2.99</h3>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white p-3 rounded-xl shadow hover:shadow-lg transition mr-20">
            <img src={n} alt="" className="h-30 w-30 object-cover rounded-2xl" />
            <div>
              <h2 className="font-semibold text-white-800 text-2xl">Red Bull Energy Drink</h2>
              <h3 className="text-blue-500 font-bold">$2.99</h3>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white p-3 rounded-xl shadow hover:shadow-lg transition mr-20">
            <img src={b} alt="" className="h-30 w-30 object-cover rounded-2xl bg-cyan-500" />
            <div>
              <h2 className="font-semibold text-white-800 text-2xl">Red Bull SugarFree</h2>
              <h3 className="text-blue-500 font-bold">$2.99</h3>
            </div>
          </div>

        </div>
        <div className="mt-6">
          <h2 className="text-xl font-bold text-white" >
            Ready to take off?
          </h2>
          <h4 className="text-white mb-2">
            Red Bull gives you wings
          </h4>
          <a href="#" className="text-white text-2xl font-semibold hover:underline">
            Learn More →
          </a>
        </div>

      </div>

    </div>

  )
}

export default Section

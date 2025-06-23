import React from "react";
import HeroImg from '../assets/Hero.png'; 

import { } from "react-icons/fa";
const Hero = () => {
    return (

        <div className="relative flex flex-col items-center h-[80vh] w-[100%] mb-3">
<img src={HeroImg} alt="hero" className="h-full w-full object-cover object-center" />
            {/* <p className="text-sm font-sans p-4">Get up to 12 months of No Cost EMI◊ plus up to ₹8000.00 instant cashback‡ on selected products with eligible cards. <a className="text-blue-500 hover:underline" href="#">Shop </a><span className="text-blue-500">&gt;</span></p> */}
            <button className="text-md absolute bottom-[2vw] text-blue-600 border border-blue-600 rounded-full px-5 py-2 hover:bg-blue-600 hover:text-white">
                Shop
            </button>
        </div>

    )

}
export default Hero;
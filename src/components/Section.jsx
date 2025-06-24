import React from "react";
import HeroImg from '../assets/Hero.png'; 
import Sec_Img_1 from '../assets/sec_1_img1.png'; 
import Sec_Img_2 from '../assets/sec_1_img2.png'; 
import Sec_Img_3 from '../assets/sec_1_img3.png'; 
import Sec_Img_4 from '../assets/sec_1_img4.png'; 
import Sec_Img_5 from '../assets/sec_1_img5.png'; 
import Sec_Img_6 from '../assets/sec_1_img6.png'; 
import Sec_Img_7 from '../assets/sec_1_img7.png'; 
import Sec_Img_8 from '../assets/sec_1_img8.png'; 




function Section() {
  const section1 = [
    {
      heading: "University and College Students",
      detail_1: "Mac and iPad",
      detail_2: "Major. In any field.",
      button1: "Learn more",
      button2: "none",
      img_src: Sec_Img_1,
      who_built: "none",
    },
    {
      heading: "MacBook Air",
      detail_1: "Sky blue colour.",
      detail_2: "Sky-high performance with M4.",
      button1: "Learn more",
      button2: "Buy",
      img_src: Sec_Img_2,
      who_built: "Built for Apple Intelligence",
    },
    {
      heading: "iOS 18",
      detail_1: "Personalise your iPhone with",
      detail_2: "10 new indian languages.",
      button1: "Learn more",
      img_src: Sec_Img_3,
      button2: "none",

      who_built: "none",
    },
    {
      heading: "iPad",
      //   detail_1: "Sky blue colour.",
      detail_2: "Now supercharged by the M3 chip",
      button1: "Learn more",
      button2: "Buy",
      img_src: Sec_Img_4,
      who_built: "Built for Apple Intelligence",
    },

    {
      heading: "MacBook Pro",
      detail_1: "A work of smart",
      // detail_2: "10 new indian languages.",
      button1: "Learn more",
      button2: "Buy",
      img_src: Sec_Img_5,
      who_built: "Built for Apple Inteligence",
    },
    {
      heading: "iPhone",
      detail_1: "Meet the iPhone 16 family",
      // detail_2: "Now supercharged by the M3 chip",
      button1: "Learn more",
      button2: "Shop iPhone",
      img_src: Sec_Img_6,
      // who_built: "Built for Apple Intelligence",
    },
    {
      heading: "Trade in",
      detail_1: "Upgrade and save. It's easy",
      // detail_2: "Available with Active Noise Cancellation",
      button1: "Get your estimate",
      img_src: Sec_Img_7,

      button2: "none",
      // img_src: "./images/sec_1_img5.png",
      who_built: "none",
    },
    {
      heading: "Apple Health",
        detail_1: "Meaningful insights. Backed by science",
      // detail_2: "Meaningful insights. Backed by science",
      button1: "Learn more",
      button2: "none",
      img_src: Sec_Img_8,
      who_built: "none",
    },
  ];

  //rendering a single full-width section
  const renderFullSection = (link, index) => (
    <section
      key={index}
      className="relative flex justify-center mb-1  h-[80vh] w-full"
    >
      <img
        className="h-full w-full object-cover object-center"
        src={link.img_src}
        alt=""
      />
      <div className="absolute h-full w-full flex flex-col text-center items-center py-8">

        <p className="w-[400px] text-5xl font-semibold tracking-tight ">
          {link.heading}
        </p>

        <p className="text-2xl mt-3">{link.detail_1}</p>
        <p className="text-2xl">{link.detail_2}</p>
        <div className="space-x-3">
          <button className="mt-3 text-md border border-blue-500 rounded-full px-5 py-2 bg-blue-600 text-white hover:bg-blue-500">
            {link.button1}
          </button>
          {link.button2 !== "none" && (
            <button className="mt-3 text-md border border-blue-500 rounded-full px-5 py-2 text-blue-500 hover:bg-blue-600 hover:text-white">
              {link.button2}
            </button>
          )}
         
        </div>
         <div className="absolute h-full w-full flex flex-col text-center items-center py-8">
          {link.who_built !== "none" && (
            <p className="absolute mb-8 bottom-10 text-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">{link.who_built}</p>
          )}
          </div>
      </div>
    </section>
  );

  // rendering one column (used in 2-column section)
  const renderColumn = (link, index) => (
    <div key={index}
      className="relative flex  h-[80vh] w-full ">
      <img
        className=" h-full w-full object-cover object-center"
        src={link.img_src}
        alt=""
      />
      <div className="absolute h-full w-full flex flex-col text-center items-center py-8 ">
        <p
          className={`w-[400px] text-4xl font-semibold tracking-tight ${link.heading === "Apple Health" || link.heading === "MacBook Pro"
              ? "text-white"
              : "text-black"
            }`}
        >
          {link.heading}
        </p>

        <p className={`text-md mt-3" ${link.detail_1 == "Meaningful insights. Backed by science" || link.detail_1 == "A work of smart"
            ? "text-white" : "text-black"
          }`}>{link.detail_1}</p>


        <p
          className={`text-md ${link.detail_2 === "Available with Active Noise Cancellation" && "text-white"
            }`}
        >
          {link.detail_2}
        </p>        <div className="space-x-3">
          <button className="text-sm mt-3 border border-blue-600 rounded-full px-3 py-2 bg-blue-600 text-white hover:bg-blue-500">
            {link.button1}
          </button>
          {link.button2 !== "none" && (
            <button className="text-sm mt-3  border border-blue-500 rounded-full px-5 py-2 text-blue-600 hover:bg-blue-600 hover:text-white">
              {link.button2}
            </button>
          )}
          {link.who_built !== "none" && (
            <p className="absolute bottom-10 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">{link.who_built}</p>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
    
      {/* First two elements - full width sections */}
      {section1.slice(0, 2).map((link, index) => renderFullSection(link, index))}

      {/* Last two elements - two columns in one row */}
      <section className="grid grid-cols md:grid-cols-2   w-full gap-3 p-3">
        {section1.slice(2, 8).map((link, index) =>
          renderColumn(link, index + 8) // use adjusted index for keys
        )}
      </section>
      
    </>
  );
}

export default Section;

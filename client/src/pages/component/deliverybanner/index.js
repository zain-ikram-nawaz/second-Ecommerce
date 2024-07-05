import React,{useEffect} from "react";
import Image from "next/image";
import 'aos/dist/aos.css'; 
import Aos from "aos";

export default function ProductBanner() {
  useEffect(()=>{
Aos.init({duration:2000})
  },[])
  return (
    <main>
      <div className="bg-[#2b524eea] mt-60 md:grid md:grid-cols-3 sm:grid sm:grid-cols-1 rounded-md " data-aos="fade-up">
        <div className="lg:col-span-1" data-aos="zoom-in">
          <Image src={"/banner3.png"} width={600} height={400}></Image>
        </div>
        <div className="col-span-2 flex justify-center items-center">
          <div className="w-3/4 text-white">
            <h2 className="text-6xl sm:text-2xl md:text-3xl">
              We Delivery on Next Day From 10:00 AM to 08:00 PM
            </h2>
            <p className="text-2xl mt-4 sm:text-sm md:text-base">For Orders Starts from $100</p>
            <button className="bg-[#ec6e55] px-8 py-2 mt-4 font-bold rounded-xl sm:text-sm sm:py-1 sm:px-2 md:px-4 md:py-2">
              Read More
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#ec6e55] mt-10 md:grid md:grid-cols-3 sm:grid sm:grid-cols-1 rounded-md">
        <div className="col-span-2 flex justify-center items-center p-4">
          <div className="w-3/4 text-white">
            <h2 className="text-6xl sm:text-2xl md:text-3xl">We Prioritize Organic Products</h2>
            <p className="text-xl mt-6 sm:text-sm md:text-base">
              Were you aware that non-organic items can contain substantial
              pesticide residues and artificial preservatives? That's why we
              emphasize sourcing organic items. They not only offer a more
              delightful taste but also contribute to maintaining healthier
              soils and promoting biodiversity. Our commitment to quality is
              evident in our strict standards, with over 500 ingredients on our
              "never" list. From artificial food dyes to additives, we
              scrutinize every product we produce and sell to ensure they are
              not only healthy for you but also for the environment.
            </p>
            <button className="bg-[#23403d] px-8 py-2 mt-4 font-bold rounded-xl sm:text-sm sm:py-1 sm:px-2 md:px-4 md:py-2">
              Read More
            </button>
          </div>
        </div>
        <div className="col-span-1" data-aos="zoom-in">
          <Image src={"/banner3.png"} width={600} height={400}></Image>
        </div>
      </div>
    </main>
  );
}

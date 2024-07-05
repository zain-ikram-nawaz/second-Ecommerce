import React,{useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import 'aos/dist/aos.css'; 
import Aos from "aos";

export default function Footer() {
  useEffect(()=>{
    Aos.init({duration:2000})
      },[])
  return (
    <div className="bg-[#23403d] mt-20" data-aos="fade-up">
      <div className="container mx-auto flex relative bottom-6 gap-4">
        <div className="lg:hidden md:hidden xl:block sm:hidden">
          <Image
            className="border bg-red-700 rounded-md h-40"
            src={"/f1.jpg"}
            width={300}
            height={300}
            alt="fruit image"
           data-aos="flip-down"></Image>
        </div>
        <div className="sm:hidden md:block">
          <Image
            className="border bg-red-700 rounded-md h-40"
            src={"/f5.jpg"}
            width={300}
            height={300}
            alt="fruit image"
            data-aos="flip-down"
          ></Image>
        </div>
        <div>
          <Image
            className="border bg-red-700 rounded-md h-40"
            src={"/f2.jpg"}
            width={300}
            height={300}
            alt="fruit image"
            data-aos="flip-down"
          ></Image>
        </div>
        <div>
          <Image
            className="border bg-red-700 rounded-md h-40"
            src={"/f6.jpg"}
            width={300}
            height={300}
            alt="fruit image"
            data-aos="flip-up"
          ></Image>
        </div>
        <div className="sm:hidden md:block">
          <Image
            className="border bg-red-700 rounded-md h-40"
            src={"/f3.jpg"}
            width={300}
            height={300}
            alt="fruit image"
            data-aos="flip-up"
          ></Image>
        </div>
        <div className="lg:hidden md:hidden xl:block sm:hidden">
          <Image
            className="border bg-red-700 rounded-md h-40"
            src={"/f7.jpg"}
            width={300}
            height={300}
            alt="fruit image"
            data-aos="flip-up"
          ></Image>
        </div>
        {/* <div><Image className="border bg-red-700 rounded-md" src={"/banner3.png"} width={300} height={300} alt="fruit image"></Image></div> */}
        {/* <div><Image className="border bg-red-700 rounded-md" src={"/banner3.png"} width={300} height={300} alt="fruit image"></Image></div> */}
      </div>
      <div className="mx-10 sm:block sm:space-y-10 lg:grid lg:grid-cols-6">
        <div className="col-span-2 text-[#567e7a]">
      <Image src={"/logooo.png"} width={200} height={200} data-aos="flip-right"></Image>
          <p>
            We're Tasty Daily Shop, an innovative team of food engineers. Our
            unique model minimizes fresh food handling by up to 85%, sourcing
            locally and dispatching within hours through cold chain logistics in
            eco-friendly containers.
          </p>
          <div className="col-span-2 text-orange-600 my-4">
            <i>1</i>
            <i>2</i>
            <i>3</i>
            <i>4</i>
            <p className="text-[#567e7a] mt-4">2023 Tasty Daily Grocery WordPress Theme</p>
          </div>
        </div>
        <div className="col-span-2 leading-7 flex justify-center text-[#759f9b] items-center sm:justify-start lg:justify-center ">
          <ul>
            <li>
              <Link href={"#"}>About</Link>
            </li>
            <li>
              <Link href={"#"}>Contact Us</Link>
            </li>
            <li>
              <Link href={"#"}>Privacy Policy</Link>
            </li>
            <li>
              <Link href={"#"}>Shipping Policy</Link>
            </li>
            <li>
              <Link href={"#"}>Delivery info</Link>
            </li>
            <li>
              <Link href={""}>Refund Policy</Link>
            </li>
            <li>
              <Link href={"../../privacyandservice"}>Terms and Condition</Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-center text-[#759f9b] items-center sm:justify-start md:justify-start ">
          <div>
         
            <h2 className="text-orange-600 text-2xl font-bold mb-2">Subcribe for Get News</h2>
            <p>
              Sign up to get 10% off your first order and stay up to date on the
              latest product releases, special offers and news
            </p>
            <span>
              <input type="email" placeholder="Your Email"  className="p-1 rounded-lg mt-4"/>
            </span>
            <span>
              <button className="border p-1 rounded-lg bg-orange-600 text-white">Subcribe</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

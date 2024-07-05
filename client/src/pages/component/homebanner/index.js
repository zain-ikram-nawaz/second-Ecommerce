import React,{useEffect} from 'react'
import { MdOutlineDeliveryDining,MdOutlinePayment  } from "react-icons/md";
import { RiHeart2Fill } from "react-icons/ri";
import { LuMessagesSquare } from "react-icons/lu";
import 'aos/dist/aos.css';
import Aos from "aos"; 

export default function Homebanner() {
    // console.log("hello from product")
    useEffect((
    )=>{
        Aos.init({duration:2000})
    },[])
  return (
    <div>
        <main className='p-4 mt-28 md:mt-36 xl:mt-20 lg:mt-20 grid grid-cols-2 gap-10 sm:grid-cols-1 sm:gap-10 lg:grid lg:grid-cols-1 xl:grid xl:grid-cols-2'>
            <div className='homebanner col-span-1 flex  rounded-xl sm:flex sm:flex-col sm:justify-center lg:flex-row lg:items-center lg:justify-start' data-aos="flip-right">
<div className='text-white md:w-3/4 ml-10' >
    <h2 className='font-bold text-5xl sm:text-lg md:text-3xl lg:text-5xl'>"Bringing Joy, One Wag at a Time."</h2>
    <p className='md:font-bold mt-4 sm:text-sm'>Every Fridays Check
Best Market Deals!</p>
<button className=' mt-6 px-8 py-2 rounded-md bg-[#ec6e55] sm:text-xs sm:px-2 sm:py-1 md:py-2 md:px-2 md:text-base lg:px-4 lg:text-lg'>Shop Now</button>
</div>
            </div>
            <div className='col-span-1 homebanner2  flex items-center rounded-xl' data-aos="flip-right">
            <div className='text-white md:w-3/4 ml-10 ' >
    <h2 className='font-bold text-5xl sm:text-lg md:text-3xl lg:text-5xl'>"Where Every Pet's Story Begins."</h2>
    <p className='md:font-bold mt-4 sm:text-sm'>Every Fridays Check
Best Market Deals!</p>
<button className=' mt-6 px-8 py-2 rounded-md bg-[#23403d] sm:text-xs sm:px-2 sm:py-1 md:py-2 md:px-2 md:text-base lg:px-4 lg:text-lg'>Shop Now</button>
</div>
            </div>
        </main>

{/* div 2 */}
<div className='grid grid-cols-4 mt-10 sm:block sm:space-y-8 md:grid md:grid-cols-2  lg:grid lg:grid-cols-4'>
   
    <div className='text-center md:col-span-1 mt-8'data-aos="fade-up">
        <i className='flex justify-center'><MdOutlineDeliveryDining className='text-orange-500 text-3xl'></MdOutlineDeliveryDining></i>
        <h2 className='font-semibold text-2xl text-[#23403d] sm:text-2xl'>Free Delivery Across the US!</h2>
        <p className='text-lime-950 sm:text-sm'>Free delivery for all orders above $100</p>
    </div>
    <div className='text-center md:col-span-1' data-aos="fade-up">
        <i className='flex justify-center'><RiHeart2Fill className='text-orange-500 text-3xl'></RiHeart2Fill></i>
        <h2 className='font-semibold  text-2xl text-[#23403d] sm:text-2xl'>100% Satisfaction Guarantee!</h2>
        <p className='text-lime-950 sm:text-sm'>Providing help in case of dissatisfaction</p>
    </div>
    <div className='text-center md:col-span-1' data-aos="fade-up">
        <i className='flex justify-center'><LuMessagesSquare className='text-orange-500 text-3xl'></LuMessagesSquare></i>
        <h2 className='font-semibold  text-2xl text-[#23403d] sm:text-2xl'>Top-Notch Support</h2>
        <p className='text-lime-950 sm:text-sm'>Chat with us if you’ve any questions</p>
    </div>
    <div className='text-center md:col-span-1' data-aos="fade-up">
        <i className='flex justify-center'><MdOutlinePayment className='text-orange-500 text-3xl'></MdOutlinePayment></i>
        <h2 className='font-semibold  text-2xl text-[#23403d] sm:text-2xl'>Secure Payments</h2>
        <p className='text-lime-950 sm:text-sm'>We use safest payment technologies</p>
    </div>
   
  
</div>
{/* div 2 end */}
    </div>
  )
}


import React,{useState,useEffect} from 'react'
import Link from 'next/link';
import { RiAdminLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { getCookie } from "cookies-next";
import dynamic from 'next/dynamic'
import { useRouter } from "next/navigation";




export function LoginIcon() {
  const router = useRouter()
  const token = getCookie("jwtoken")


    const [data,setData]= useState()
    const cart = async () => {
        try {
          const res = await fetch("https://final-rho-one.vercel.app/cartdata", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          });
          if (res.ok) {
            const result = await res.json();
            setData(result);
          }
        } catch (error) {
          console.log(error);
        }
      };
      

      const LogoutFetching = async () => {

        try {
          const res = await fetch("http://localhost:8000/logout", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          });
          if(res.ok){
      const data = await res.json()
      alert(data.message)
      return router.push("./login")
          }
          else{
            alert("something went wrong")
          }
        } catch (error) {
          console.log(error)
        }
       
      };
      useEffect(()=>{
        cart();

      },[data])
  return (
    <div className='md:text-base'>
        
         {/* <CiSearch className='inline text-3xl mr-2'></CiSearch> */}
         {!token ? <Link href={"../../login"}>   <RiAdminLine className='all-icon inline text-3xl md:text-lg mr-2 lg:text-2xl' /></Link> : <IoMdLogOut  className='inline text-3xl md:text-lg mr-2 lg:text-2xl' onClick={LogoutFetching}/> }
         
 
          <FaRegHeart className='all-icon inline text-3xl mr-2 md:text-lg lg:text-2xl'></FaRegHeart>
          <Link href={"../../cartdata"}> <MdOutlineShoppingCart className='all-icon inline text-3xl mr-2 md:text-lg lg:text-2xl'></MdOutlineShoppingCart>(<b className='text-orange-500'> {data?.length} </b>)</Link>
         
    </div>
  )
}
export default dynamic(() => Promise.resolve(LoginIcon), { ssr: false });
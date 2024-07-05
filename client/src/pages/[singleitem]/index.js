import React, { useState } from "react";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../redux/fetchproductslice";
import { useEffect } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import ProductSlider from "../component/productslider";

export default function Singleitem() {
  
  const distpatch = useDispatch();
  const data = useSelector((state) => state.fetchData.productdata);
  const singleitem = useParams();
  const found = data?.filter((product) => product._id === singleitem.singleitem);
  const [customImage,setCustomeImage]= useState()
  useEffect(() => {
    fetchData();
    distpatch(fetchData());
  }, []);
const imageZoom=(imaneName)=>{
  console.log(imaneName)
setCustomeImage(imaneName)
}
const openFunction=(imaneName)=>{
setCustomeImage(imaneName)
}
  const sendcart = async (data) => {
  
    try {
      const res = await fetch("http://localhost:8000/cartitem", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials:"include",
        body: JSON.stringify(data),
      });
      if(!res.ok){
        alert("please login first")
      }
      else{
        alert("cart added")
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>

    <div className="container mx-auto mt-20">
   

      <div>
          {found.map((item) => {
      
            useEffect(()=>{
              openFunction(item.image[0].name)
            },[])
            return (
              <div key={item._id}>
               <div className="border-4 border-[#2b524e83] md:p-8">
                <div className="grid sm:grid-cols-1 md:grid-cols-2  bg-[#2b524e83] rounded-md gap-8">
            <div>
           <div className="p-4"> <Image className="md:h-[50vh] sm:h-[30vh]" src={`/${customImage}`}  width={500} height={500} alt="image"/></div>
          
            </div>
                  <div className="w-3/4 sm:text-sm sm:ml-4 md:text-base">
                    <h2 className="font-bold text-4xl mt-4 sm:text-2xl md:text-5xl">{item.title}</h2>
                    <h2 className="text-3xl text-white mt-2 mb-4 sm:text-2xl md:text-4xl ">${item.price}</h2>
                    <FaStar className="inline text-yellow-300"></FaStar>
                      <FaStar className="inline text-yellow-300"></FaStar>
                      <FaStar className="inline text-yellow-300"></FaStar>
                      <FaStar className="inline"></FaStar>
                      <FaStar className="inline"></FaStar>
                    <p className="mt-4 mb-4 h-60 overflow-auto">{item.description}</p>
                    <p>category : <b>{item.category}</b></p>
                    <button className="mt-4 border px-6 bg-[#2b524eea] text-white py-2 rounded-md" onClick={()=>{
                      sendcart(item)
                    }}>Add to cart</button>
                  </div>
                </div>
                 <div className="md:grid md:grid-cols-8 sm:grid sm:grid-cols-3 bg-[#285550]">
           {item.image.map((image,i)=>{
             return (
               
               <div className="w-3/4 p-4" key={i}>
              <Image src={`/${image.name}`} width={200} height={200} alt="image" onClick={()=>{
                imageZoom(image.name)
              }}></Image>
              </div>
            )
           })}
              </div>
               </div>
              </div>
            );
          })}
    
      </div>
    </div>
      <div className="my-10 mb-40 ">
        <h2 className="text-5xl font-semibold text-[#23403d] text-center sm:text-3xl lg:text-5xl">You May Also Like</h2>
        <ProductSlider></ProductSlider>
      </div>
            </main>
  );
}

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MdDeleteForever } from "react-icons/md";
import LoginIcon from "../component/loginicon";
import { loadStripe } from "@stripe/stripe-js";

export default function CartData() {
  const [data, setData] = useState();
  const[error,setError]=useState("Empty cart item")
const cartd =()=>{
  return data?.map((item)=>{
    return item.item
  })

}
const result = cartd()
const sum = result?.reduce((firstitem,allitems)=>
firstitem + allitems.quantity,0)
const totalprice = result?.reduce((firstitem,allitems)=>
firstitem + allitems.price * allitems.quantity,0)
  const cart = async () => {
    try {
      const res = await fetch("http://localhost:8000/cartdata", {
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
  useEffect(() => {
    cart();
  }, []);
  const cartDcrease = async (itemId) => {
    try {
      const res = await fetch(
        `http://localhost:8000/cartdata/decrease/${itemId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );
      cart();
    } catch (error) {
      console.log(error);
    }
  };

  const cartIncreased = async (itemId) => {
    try {
      const res = await fetch(
        `http://localhost:8000/cartdata/increase/${itemId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );
      cart();
    } catch (error) {
      console.log(error);
    }
  };

  const removeCart = async (itemId) => {
    try {
      const res = await fetch(
        `http://localhost:8000/cartdata/remove/${itemId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );
    cart()
    } catch (error) {
      console.log(error);
    }
  };
  
console.log(data)
const makePayment = async()=>{
  const stripe = await loadStripe("pk_test_51OqY7TAM6LXkQCi4wf9x8UPoUfrAVQuDoI8Jclx4Y2V6rJGOpgLSWLxdpnAh2gvahI6oRtrd78pCS8gRhe5IUKjF00EsEV7iMw")
  
  const response = await fetch("http://localhost:8000/create-checkout-session",{
    method: "POST",
    headers: {  
      "Content-Type": "application/json"
    },
    body:JSON.stringify(data),
  })
  const session = await response.json();
  const result = stripe.redirectToCheckout({
    sessionId:session.id
  });
  if((await result).error){
    console.log((await result).error)
  }
}
  return (
    <div className="mt-32">
      


      {data?.map((item) => {

        return (
          <div key={item.item._id} className="container mx-auto ">
<main>
  <div className="md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 border mt-4">
    <div className="md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 sm:grid sm:grid-cols-2"> 
      <div className="sm:w-40 border">
        <Image src={`/${item.item.image[0].name}`} width={200} height={200} alt="product image"></Image></div>
      <div>
       
       <div className="col-span-2 leading-8"> <p >Title: <b className="text-[#2b524eea] sm:text-sm md:text-lg">{item.item.title}</b></p>
        <p className="font-semibold"> category : <b className="text-[#2b524eea] sm:text-sm md:text-lg">{item.item.category}</b></p>
        <p className="text-[#2b524eea] sm:text-sm"> In stock</p>
        <button className="text-center mt-4 bg-[#2b524eea] rounded-md font-bold text-white md:px-6 sm:px-4"
              onClick={() => {
                item.item.quantity > 1
                  ? cartDcrease(item.item._id)
                  : item.item.quantity;
              }}
            >
              -
            </button>
        <span>  {item.item.quantity}  </span>
        <button className="text-center mt-4 bg-[#2b524eea] rounded-md font-bold text-white md:px-6 sm:px-4"
              onClick={() => {
                cartIncreased(item.item._id);
              }}
            >
              +
            </button></div>
      </div>
    </div>
    <div className="mt-8">
      <p className="text-3xl text-[#2b524eea] font-semibold sm:text-base md:text-xl">Price: <b>${item.item.price}</b></p>
      <button
             className="text-center mt-4 bg-red-400 rounded-md font-bold text-white md:px-8 py-1 sm:py-1 sm:px-8"
              onClick={() => {
                removeCart(item._id);
              }}
            >
              <MdDeleteForever className="md:text-xl"/>
            </button>
    </div>
  </div>
</main>
          </div>

        );
      })}
      <div className="container mx-auto text-2xl sm:text-lg ">
        <p >
        Quantity: <b className="text-[#2b524eea] sm:text-base">{sum}</b> 
          </p>
          <p>
        Total Price: <b className="text-[#2b524eea] sm:text-base">${totalprice}</b> 
          </p>

      <div>
        <button onClick={()=>{makePayment()}} className="bg-green-600 text-white sm:text-sm sm:px-6 py-2 rounded-md font-semibold">Check out</button>
      </div>
      </div>
    </div>
  );
}

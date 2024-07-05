
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../redux/fetchproductslice";
import { useEffect, useState } from "react";
import Homebanner from "./component/homebanner";
import HomeProduct from "./component/homeproduct";
import ProductBanner from "./component/deliverybanner";
import ProductSlider from "./component/productslider";




export default function Home() {

// LoginIcon(token)
  const distpatch = useDispatch();
  const data = useSelector((state) => state.fetchData.productdata);
  useEffect(() => {
    distpatch(fetchData());
  }, []);
  return (
    <div className="bg-[#faf3ef]">
    
      <div className="md:mx-10">
        <Homebanner></Homebanner>
        <HomeProduct></HomeProduct>
        <ProductSlider></ProductSlider>
        <ProductBanner></ProductBanner>
      </div>
  
   
    </div>
  );
}

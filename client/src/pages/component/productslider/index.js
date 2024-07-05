import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'aos/dist/aos.css'; 
import Aos from "aos";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../../redux/fetchproductslice";
import { useEffect } from "react";
import Link from "next/link";

export default function ProductSlider() {
  const distpatch = useDispatch();
  const data = useSelector((state) => state.fetchData.productdata);
  // console.log(data)
  useEffect(() => {
    distpatch(fetchData());
    Aos.init({duration:2000})
  }, []);
  return (
    <div className=" bg-white product-slider mt-10 p-4 rounded-md">
      <main data-aos="fade-up">
        <h2 className="font-bold pt-4 text-3xl my-4">Promotion</h2>
        <Swiper slidesPerView={6}
        breakpoints={{
          375:{
            slidesPerView:1
          },
          475:{
slidesPerView:1
          },
          768:{
            slidesPerView:2
          },
          640:{
            slidesPerView:2
          },
          1024:{
            slidesPerView:3
          },
          1280:{
            slidesPerView:4
          },
          1580:{
            slidesPerView:5
          }
        }}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8 ">
            
              <div className="mt-6">
                {data?.map((product) => (
                  <div  >
                  <SwiperSlide key={product._id} >
                    <div className="group relative">
                      <Link href={`/${product._id}`}>
                      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden border bg-gray-200 lg:aspect-none group-hover:opacity-30 h-60">
                       {product.image.slice(0,1).map((item)=>{
                        return (
                          <Image
                          src={`/${item.name}`}
                          alt={item.imageAlt}
                          className="h-full w-full object-cover object-center lg:h-full lg:w-full "
                          width={200}
                          height={200}
                        />
                        )
                       })}
                      </div></Link>
                      <FaStar className="inline text-yellow-300"></FaStar>
                      <FaStar className="inline text-yellow-300"></FaStar>
                      <FaStar className="inline text-yellow-300"></FaStar>
                      <FaStar className="inline"></FaStar>
                      <FaStar className="inline "></FaStar>
                      <div className="mt-4 flex justify-between">
                        <div>
                          <h3 className=" text-gray-700 font-bold text-2xl sm:text-lg">
                            <span
                              aria-hidden="true"
                              className="absolute inset-0 "
                            />
                            {product.title}
                          </h3>

                          <p className="mt-1 text-sm text-gray-500">
                            <b>category</b>: {product.category}
                          </p>
                        </div>

                        <p className="text-xl font-bold text-[#ec6e55] h-20">
                          $ {product.price}
                        </p>
                      </div>
                      {/* <p className="mt-1 text-sm text-gray-500">
                      {product.description}
                    </p> */}
                      <div className="text-center mt-4 bg-[#23403d] rounded-md text-white font-bold p-2">
                        <button className="px-10 sm:text-sm md:text-lg">Add to cart</button>
                      </div>
                    </div>
                  </SwiperSlide>

                  </div>
                ))}
              </div>
            </div>
          </div>
          ...
        </Swiper>
      </main>
    </div>
  );
}

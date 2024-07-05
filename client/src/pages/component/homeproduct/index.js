import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../../redux/fetchproductslice";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import "aos/dist/aos.css";
import Aos from "aos";

export default function HomeProduct() {
  const distpatch = useDispatch();
  const data = useSelector((state) => state.fetchData.productdata);
  // console.log(data)
  useEffect(() => {
    distpatch(fetchData());
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <main
        className="lg:grid lg:grid-cols-8 mt-14 sm:block md:block bg-white p-4 rounded-md"
        data-aos="fade-up"
      >
        {/* product div 1 */}
        <div className="product-1 col-span-2 text-[#212121] ">
          <div className="product-image flex flex-col items-center ">
            <div className="">
              <h2 className="text-5xl font-semibold tracking-tight mt-4 sm:text-2xl">
                Today Discounts
              </h2>
              <button className="mt-8 sm:text-sm">VIEW ALL {">"} </button>
            </div>
          </div>
          <div className="product-category">
            <div>
              {/* <h2 className="text-2xl font-bold tracking-tight text-[#]  text-center pt-6">
                Category
              </h2> */}
              <ul className=" text-[#2b524eea] text-sm product-li grid grid-cols-2 gap-6 md:ml-20 pt-8 sm:text-sm">
                <Link href={"#"}>
                  <li className="col-span-1">Bowls And Feeders</li>
                </Link>
                <Link href={"#"}>
                  <li className="col-span-1">Pet Grooming</li>
                </Link>
                <Link href={"#"}>
                  <li className="col-span-1">Pet Care</li>
                </Link>
                <Link href={"#"}>
                  <li className="col-span-1">Toys</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        {/* product-div 2 */}
        <div className="product-2 col-span-6">
          <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
              {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Customers also purchased
              </h2> */}

              <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-1 lg:grid-cols-4 xl:gap-x-6 md:grid-cols-2 ">
                {data &&
                  data.slice(0, 10).map((product) => {
                    return (
                      <div
                        key={product._id}
                        className="group relative border-2 p-4"
                        data-aos="fade-up"
                      >
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden border-2 bg-gray-200 lg:aspect-none group-hover:opacity-30 ">
                          <div className="flex absolute font-semibold text-xs text-white ml-4 mt-2 new-offer">
                            <p className="bg-[#00975c]  rounded-xl px-2 py-1 ">
                              NEW
                            </p>
                            <p className="bg-orange-500  rounded-xl p-1 ml-2">
                              -25%
                            </p>
                          </div>
                          <div className="w-full h-[20vh] relative">
                  
                            {product.image.slice(0,1).map((item) => {
    
                              return (
                                <div key={item._id}>
                  
                                 <Image
                                    src={`/${item.name}`}
                                    // alt={product.imageAlt}
                                    className="absolute w-full h-full"
                                    width={200}
                                    height={200}
                                  />
                                </div>
                              );
                            })}
                          </div>

                          {/* <Image
                            src={`/${product.image.name}`}
                            // alt={product.imageAlt}
                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                            width={200}
                            height={200}
                          /> */}
                        </div>
                        <div>
                        <FaStar className="inline text-yellow-300"></FaStar>
                        <FaStar className="inline text-yellow-300"></FaStar>
                        <FaStar className="inline text-yellow-300"></FaStar>
                        <FaStar className="inline"></FaStar>
                        <FaStar className="inline"></FaStar>
                        <div className="mt-4 flex justify-between">
                          <Link href={`/${product._id}`}>
                            <div>
                              <h3 className=" text-gray-700 font-bold text-2xl sm:text-lg overflow-hidden">
                                <span
                                  aria-hidden="true"
                                  className="absolute inset-0 "
                                />
                                {product.title}
                              </h3>

                              <p className="mt-1 text-sm text-[#2b524eea]">
                                <b>category</b>: {product.category}
                              </p>
                            </div>

                            <p className="text-xl font-bold text-[#ec6e55]">
                              $ {product.price}
                            </p>
                          </Link>
                        </div>
                        {/* <p className="mt-1 text-sm text-gray-500">
                      {product.description}
                    </p> */}
                        </div>
                        <div className="text-center mt-4 bg-[#2b524eea] rounded-md font-bold text-white p-2 sm:text-sm">
                          <button className="">Add to cart</button>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

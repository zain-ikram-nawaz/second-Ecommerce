import React,{useEffect,useState} from 'react'
import Link from 'next/link'
import { IoIosArrowForward } from "react-icons/io";
import Image from 'next/image'
import { useSelector,useDispatch } from 'react-redux'
import { fetchData } from '@/redux/fetchproductslice'
import { FaStar } from "react-icons/fa";
export default function Shop() {
  const data = useSelector(item => item.fetchData.productdata)
  useEffect(()=>{
    dispatch(fetchData())
  
  },[])
  const [product,setProduct]=useState(data)
const SelectByCategory = (category)=>{
const result = data.filter(item=>item.category === category)
return setProduct(result)
}
const lowToHigh =()=>{
  const result = [...data].sort((a,b)=>a.price - b.price)
  return setProduct(result)
}
const highToLow =()=>{
  const result = [...data].sort((a,b)=>b.price - a.price)
  return setProduct(result)
}

const handleInput =(e)=>{
const inputValu=e.target.value
if(inputValu === "low to high"){
  lowToHigh();
}
if(inputValu === "high to low"){
  highToLow();
}
if(inputValu==="latest"){
const result = data.slice(0,3).map(item=>{
  return item
})
setProduct(result)
}
}


  const dispatch = useDispatch()
  return (
    <div className='mt-32 mx-10'>
      
      <div>
        <div >
          <ul className='flex justify-center'>
            <Link href={"../../"}><li>Home</li> </Link>
            <Link href={"#"}><IoIosArrowForward className='inline text-gray-400 text-xs'/></Link>
            <Link href={"#"}> <li>Shop</li></Link>
          </ul>
        </div>
        <div >
          <div className='text-5xl text-center font-semibold my-8 text-[#212121]'><h2>Shop</h2></div>
          <div className='flex justify-center gap-4 sm:grid sm:grid-cols-2 md:flex '>
            <div onClick={()=>{
              SelectByCategory("Bowls And Feeders")
            }}>
<Image className='rounded-xl h-40' src={"/bowl.jpg"} width={150} height={150} alt='image'></Image>
<p>Bowls And Feeders</p>
            </div>
            <div  onClick={()=>{
              SelectByCategory("Pet Grooming")
            }}>
<Image className='rounded-xl h-40' src={"/grooming.jpg"} width={150} height={150} alt='image'></Image>
<p>Pet Grooming
</p>
            </div>
            <div  onClick={()=>{
              SelectByCategory("Pet care")
            }}> 
<Image className='rounded-xl h-40' src={"/care1.jpg"} width={150} height={150} alt='image'></Image>
<p>Pet care</p>
            </div>
            <div onClick={()=>{
              SelectByCategory("Toys")
            }}>
<Image className='rounded-xl h-40' src={"/p11.jpg"} width={150} height={150} alt='image'></Image>
<p>Toys</p>
            </div>
          </div>
        </div>
<div className='main'>

        <div className='first main flex justify-between'>
        
        <div className='second text-2xl'> 
          Showing total item: <b className='text-[#212121]'>{product.length}</b>
          </div>
           <div className='first'>
            <select name="" id="" onChange={handleInput}>
              <option value="Undefine" >Default sorting</option>
              <option value="latest">Sort by latest</option>
              <option value="low to high" onClick={lowToHigh}>Sort by price: low to high</option>
              <option value="high to low" onClick={highToLow}>Sort by price: high to low</option>
            </select>
          </div>
        
</div>
          <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-1 lg:grid-cols-5 xl:gap-x-6 md:grid-cols-2">
                {product &&
                  product.map((product) => {
                    return (
                      <div
                        key={product._id}
                        className="group relative"
                        data-aos="fade-up"
                      >
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden border bg-gray-200 lg:aspect-none group-hover:opacity-30">
                          <div className="flex absolute font-semibold text-xs text-white ml-4 mt-2 new-offer">
                            <p className="bg-[#00975c]  rounded-xl px-2 py-1 ">
                              NEW
                            </p>
                            <p className="bg-orange-500  rounded-xl p-1 ml-2">
                              -25%
                            </p>
                          </div>
                          <div>
                  
                            {product.image.slice(0,1).map((item) => {
                              return (
                                <div key={item._id} className='h-60'>
                  
                                 <Image
                                    src={`/${item.name}`}
                                    // alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full "
                                    width={200}
                                    height={200}
                                  />
                                </div>
                              );
                            })}
                          </div>

                       
                        </div>
                        <FaStar className="inline text-yellow-300"></FaStar>
                        <FaStar className="inline text-yellow-300"></FaStar>
                        <FaStar className="inline text-yellow-300"></FaStar>
                        <FaStar className="inline"></FaStar>
                        <FaStar className="inline"></FaStar>
                        <div className="mt-4 flex justify-between">
                          <Link href={`/${product._id}`}>
                            <div>
                              <h3 className=" text-gray-700 font-bold text-2xl h-20">
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

                            <p className="text-xl font-bold text-[#ec6e55] ">
                              $ {product.price}
                            </p>
                          </Link>
                        </div>
                        {/* <p className="mt-1 text-sm text-gray-500">
                      {product.description}
                    </p> */}
                        <div className="text-center mt-4 bg-[#2b524eea] rounded-md font-bold text-white p-2">
                          <button className="">Add to cart</button>
                        </div>
                      </div>
                    );
                  })}
              </div>
        </div>
      </div>
    </div>
  )
}

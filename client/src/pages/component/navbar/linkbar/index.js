import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CiShop } from "react-icons/ci";
import { RiBowlLine } from "react-icons/ri";
import { MdOutlinePets } from "react-icons/md";
import { FaRegHospital } from "react-icons/fa";
import { MdOutlineToys } from "react-icons/md";
import LoginIcon from "../../loginicon";

export default function LinkBar() {
  return (
    <div className="bg-[#23403d] xl:grid mt-24 relative lg:grid lg:grid-cols-6  xl:grid-cols-6 items-center text-white sm:hidden md:block md:grid md:grid-cols-6 md:gap-2 md:pt-2 xl:block ">
      <div className="col-span-1 ">
        <Image
          src={"/logooo.png"}
          width={200}
          height={100}
          alt="logo image"
        ></Image>
      </div>
      <div className="col-span-4  font-mono font-bold flex justify-center category ">
        <ul className="all-hover flex gap-9 md:text-base md:gap-2 lg:text-xl lg:gap-6  ">
          <Link href={"../../shop"}>
            <li>
              <CiShop className="nav-icon inline  lg:mr-2  text-[#ec6e55]"></CiShop>
              Shop
            </li>
          </Link>
          <Link href={"../../shop"}>
            {" "}
            <li>
              <RiBowlLine className="nav-icon inline lg:mr-2 text-[#ec6e55]"></RiBowlLine>
              Bowls And Feeders
            </li>
          </Link>
          <Link href={"../../shop"}>
            {" "}
            <li>
              <MdOutlinePets className="nav-icon inline lg:mr-2  text-[#ec6e55]"></MdOutlinePets>
              Pet Grooming
            </li>
          </Link>
          <Link href={"../../shop"}>
            {" "}
            <li>
              <FaRegHospital className="nav-icon inline lg:mr-2 text-[#ec6e55]"></FaRegHospital>
              Pet care
            </li>
          </Link>
          <Link href={"../../shop"}>
            {" "}
            <li>
              <MdOutlineToys className="nav-icon inline lg:mr-2 text-[#ec6e55]"></MdOutlineToys>
              Toys
            </li>
          </Link>
        </ul>
      </div>

      <div className="col-span-1 space-x-4">
        <LoginIcon></LoginIcon>
      </div>
    </div>
  );
}

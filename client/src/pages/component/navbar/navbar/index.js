import Link from "next/link";
import React, { useState } from "react";
import { BsBox } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  MdOutlineAttachEmail,
  MdOutlinePhoneInTalk,
  MdOutlineDeliveryDining,
} from "react-icons/md";
import LoginIcon from "../../loginicon";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="fixed top-0 z-30">
        <header>
          {/* marque dev */}
          <div className="bg-[#ec6e55] ">
            <marquee behavior="" direction="left to right">
              <ul className="flex marque text-white p-2">
                <li>
                  <BsBox className="inline mr-2" />
                  Bowls And Feeders
                </li>
                <li>
                  <MdOutlinePhoneInTalk className="inline mr-2" />
                  Pet Grooming
                </li>
                <li>
                  <MdOutlineAttachEmail className="inline mr-2" />
                  Pet care
                </li>
                <li>
                  <BsBox className="inline mr-2" />
                  Toys
                </li>

                <li>
                  <BsBox className="inline mr-2" />
                  Bowls And Feeders
                </li>
                <li>
                  <MdOutlinePhoneInTalk className="inline mr-2" />
                  Pet Grooming
                </li>
                <li>
                  <MdOutlineAttachEmail className="inline mr-2" />
                  Pet care
                </li>
                <li>
                  <BsBox className="inline mr-2" />
                  Toys
                </li>
                <li>
                  <BsBox className="inline mr-2" />
                  Bowls And Feeders
                </li>
                <li>
                  <MdOutlinePhoneInTalk className="inline mr-2" />
                  Pet Grooming
                </li>
                <li>
                  <MdOutlineAttachEmail className="inline mr-2" />
                  Pet care
                </li>
                <li>
                  <BsBox className="inline mr-2" />
                  Toys
                </li>
                <li>
                  <BsBox className="inline mr-2" />
                  Bowls And Feeders
                </li>
                <li>
                  <MdOutlinePhoneInTalk className="inline mr-2" />
                  Pet Grooming
                </li>
                <li>
                  <MdOutlineAttachEmail className="inline mr-2" />
                  Pet care
                </li>
                <li>
                  <BsBox className="inline mr-2" />
                  Toys
                </li>
              </ul>
            </marquee>
          </div>
          {/* marque dev end */}
          {/* navbar dev */}
          <div className="nav font-bold font-mono text-white bg-[#23403d] py-2">
            <nav className="grid  pt-3 sm:text-sm md:grid-cols-3 ">
              <div
                className="md:hidden lg:hidden xl:hidden  "
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <span>
                  {" "}
                  <GiHamburgerMenu className="inline ml-4 text-orange-500 text-2xl sm:text-md" />
                </span>
              </div>
              <div
                className={
                  open
                    ? "sm:hidden md:block lg:block xl:block "
                    : "col-span-1  md:block  sm:h-96 md:h-10 md:text-md relative z-[2] "
                }
              >
                <ul className="all-hover  sm:block sm:leading-10 sm:text-2xl md:flex md:text-base lg:text-xl">
                  <Link href={"/"}>
                    <li className="home">Home</li>
                  </Link>
                  <Link href={"../../shop"}>
                    {" "}
                    <li className="shop">Shop</li>
                  </Link>
                <Link href={"./about"}><li>About </li></Link>
                  <li>Contact us</li>
                </ul>
                <div className="col-span-1 space-x-4 md:hidden">
                  <LoginIcon></LoginIcon>
                </div>
              </div>
              <div className=" text-center font-bold font-mono text-white  sm:hidden md:block lg:text-base xl:text-base">
                <MdOutlineDeliveryDining className="inline mr-2 text-orange-500 text-2xl sm:text-" />
                Deliver On Next day from 10:00 Am to 08:00 PM
              </div>
              <div className=" text-center font-bold font-mono text-white flex space-x-8 justify-center lg:text-base xl:text-base sm:hidden md:block">
                <span>
                  <MdOutlineAttachEmail className="inline mr-2  text-orange-500 text-2xl sm:text-sm " />
                  infor@tasty-daily.com
                </span>
                <span>
                  <MdOutlinePhoneInTalk className="inline mr-2 text-orange-500 text-2xl sm:text-sm" />
                  +90808808080983
                </span>
              </div>
            </nav>
          </div>
          {/* naebar dev end */}
          {/* third dev logo tastty dai;y */}

          {/* 3rd dev end */}
        </header>
      </div>
    </div>
  );
}

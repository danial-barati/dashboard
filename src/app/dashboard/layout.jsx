"use client";

import CustomizedAccordions from "./accordian";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { SiWindows11 } from "react-icons/si";
import { IoNotificationsOffOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { BiMessageSquareDetail } from "react-icons/bi";
import { MdTaskAlt } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLockClosedOutline } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";

export default function layout({ children }) {
  const sidemenu = React.useRef();
  const arrowRight = React.useRef();

  const closeside = () => {
    sidemenu.current.style.left = "-100%";
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        sidemenu.current.style.left = "0";
      } else {
        sidemenu.current.style.left = "-100%";
      }
    });
  }, []);

  return (
    <section className="bg-[#181821] overflow-x-hidden">
      <div
        ref={sidemenu}
        className="w-[230px] h-[100vh] left-[-100%] top-0 md:left-0 fixed z-50 bg-[#1f1f2b] duration-300"
      >
        <div className="w-full relative px-1">
          <h1 className="text-[#83d8ae] text-[20px] font-medium py-7 capitalize text-center">
            neo
          </h1>
          <CustomizedAccordions />
        </div>
        <div className="md:hidden">
          <button
            onClick={closeside}
            className="text-[#9a9cab] float-end pe-5 pt-28"
          >
            <FaArrowLeft />
          </button>
        </div>
      </div>
      <HeadTop sidemenu={sidemenu} arrowRight={arrowRight} />
      {children}
    </section>
  );
}

function HeadTop({ sidemenu, arrowRight }) {
  const showSide = () => {
    sidemenu.current.style.left = 0;
  };
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="w-full ps-[0px] md:ps-[230px] h-[80px]">
      <div className="w-full flex items-center justify-between px-10 pt-5">
        <div className="flex  items-center">
          <button
            ref={arrowRight}
            onClick={showSide}
            className="text-white  w-[25px] h-[25px] flex justify-center items-center me-4"
          >
            <FaArrowRight className=" md:hidden text-[#9a9cab] " />
          </button>
          <h1 className="text-[#fff] font-medium capitalize text-[17px]">
            dashboard
          </h1>
        </div>
        <div className="flex relative">
          <span className="bg-[#1f1f2b] flex justify-center items-center w-[40px] h-[40px] cursor-pointer">
            <SiWindows11 className="text-white" />
          </span>
          <span className="bg-[#1f1f2b] flex justify-center cursor-pointer items-center ms-4 w-[40px] h-[40px]">
            <IoNotificationsOffOutline className="text-white " />
          </span>
          <figure
            onClick={() => setIsVisible(!isVisible)}
            className="w-[40px] ms-4 rounded-[5px] overflow-hidden h-[40px] cursor-pointer"
          >
            <Image src="/me.JPG" width={40} height={40} alt="dan" />
          </figure>

          <div
            className={`absolute right-0 top-[150%] w-[200px] bg-[#1f1f2b] p-5 rounded-[10px] z-50 transition-all duration-300 ${
              isVisible ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <ul className="w-full">
              <li className="w-full">
                <Link
                  href=""
                  className="flex text-[#9a9cab] capitalize items-center text[16px] hover:text-[#83d8ae] duration-200"
                >
                  <LuUser className="me-3" />
                  <span>profile</span>
                </Link>
              </li>
              <li className="w-full my-2">
                <Link
                  href=""
                  className="flex text-[#9a9cab] capitalize items-center text[16px] hover:text-[#83d8ae] duration-200"
                >
                  <BiMessageSquareDetail className="me-3" />
                  <span>messages</span>
                </Link>
              </li>
              <li className="w-full">
                <Link
                  href=""
                  className="flex text-[#9a9cab] capitalize items-center text[16px] hover:text-[#83d8ae] duration-200"
                >
                  <MdTaskAlt className="me-3" />
                  <span>task</span>
                  <span className="ml-auto text-[#2f9c68] text-[12px] rounded-[50%] bg-[#e1f7ec] py-[2px] px-[5px]">
                    12
                  </span>
                </Link>
              </li>
              <li className="w-full my-2">
                <Link
                  href=""
                  className="flex text-[#9a9cab] capitalize items-center text[16px] hover:text-[#83d8ae] duration-200"
                >
                  <IoSettingsOutline className="me-3" />
                  <span>settings</span>
                </Link>
              </li>
              <li className="w-full">
                <Link
                  href=""
                  className="flex text-[#9a9cab] capitalize items-center text[16px] hover:text-[#83d8ae] my-2 duration-200"
                >
                  <IoLockClosedOutline className="me-3" />
                  <span>lock</span>
                </Link>
              </li>
              <li className="w-full">
                <Link
                  href="/"
                  className="flex text-[#9a9cab] capitalize items-center text[16px] hover:text-[#83d8ae] duration-200"
                >
                  <MdOutlineLogout className="me-3" />
                  <span>logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

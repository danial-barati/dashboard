"use client";
import React, { useEffect, useState } from "react";

import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
import { PiArrowBendUpRightBold } from "react-icons/pi";
import { FaRegCreditCard } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";
import { FaCalendar } from "react-icons/fa";

export default function page() {
  const [crypto, setCrypto] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const rawData = await fetch(
        "https://6633b22ef7d50bbd9b4a5f26.mockapi.io/crypto"
      );
      const mainD = await rawData.json();
      setCrypto(mainD);
    }
    fetchdata();
  }, []);
  return (
    <div className="ps-[0px] md:ps-[230px] dark:text-white">
      <div className=" w-full flex flex-wrap overflow-x-hidden px-4 md:px-10">
        <SecTop crypto={crypto} />
        <SecBottom crypto={crypto} />
      </div>
    </div>
  );
}

function SecTop({ crypto }) {
  return (
    <div className="w-full flex my-8 flex-wrap px-4 lg:px-0">
      {crypto &&
        crypto.map((item) => {
          return (
            <div className="w-full flex justify-between lg:justify-center lg:w-1/4 mb-4 lg:mb-0 items-center">
              <div className="me-14">
                <h4 className="text-white uppercase text-[20px] inline me-3 ">
                  {item.reduction}
                </h4>
                <span
                  className={`text-[14px] ${
                    item.profit < 0 ? "text-[#fc9494]" : "text-[#83d8ae]"
                  }`}
                >
                  {item.profit}%
                </span>
                <span className="text-[13px] text-[#9a9cab] w-full block mt-4">
                  ${item.price}
                </span>
              </div>
              <div
                className={`flex justify-center items-center w-[45px] h-[45px] rounded-[5px] text-white shadow-2xl ${
                  item.profit < 0
                    ? "bg-[#fc9494] shadow-[#fc9494]"
                    : "bg-[#83d8ae] shadow-[#83d8ae]"
                }`}
              >
                {item.profit < 0 ? <FaArrowTrendDown /> : <FaArrowTrendUp />}
              </div>
            </div>
          );
        })}
    </div>
  );
}

function SecBottom({ crypto }) {
  return (
    <div className="w-full flex flex-wrap mt-3 mb-10">
      <SecBottomF crypto={crypto} />
      <SecBottomSec crypto={crypto} />
      <SecBottomTH />
      <SecBottomFth />
    </div>
  );
}

function SecBottomF({ crypto }) {
  return (
    <div className="w-full lg:w-2/3 p-1 lg:p-3 mb-4 lg:mb-0">
      <div className="w-full bg-[#1f1f2b] rounded-[10px] p-3">
        <h3 className="text-white capitalize text-[16px] pt-6 ps-5 lg:ps-12 pb-4">
          get started
        </h3>
        <div className=" w-full flex text-[#9a9cab] capitalize  text-[14px] lg:text-[14px] border-b border-b-[#262635] py-5 pe-4 ">
          <span className="flex-1 text-center">#</span>
          <span className="flex-1 text-center">name</span>
          <span className="flex-1 text-center">price</span>
          <span className="flex-1 text-center">change</span>
          <span className="flex-1 text-center">trade</span>
        </div>
        <div className="w-full">
          {crypto &&
            crypto.map((item) => {
              return (
                <div className="w-full flex text-[13px] lg:text-[14px] text-[#9a9cab] py-5 border-b border-b-[#262635] pe-4">
                  <span className="flex-1 text-center">{item.id}</span>
                  <span className="flex-1 text-center capitalize">
                    {item.name}
                  </span>
                  <span className="flex-1 text-center">${item.price}</span>
                  <span
                    className={`flex-1 text-center ${
                      item.profit < 0 ? "text-[#fc9494]" : "text-[#83d8ae]"
                    }`}
                  >
                    {item.profit}%
                  </span>
                  <span
                    className={`flex-1 text-center capitalize ${
                      item.status == "buy"
                        ? "text-[#83d8ae]"
                        : item.status == "failed"
                        ? "text-[#fc9494]"
                        : "text-[#fff6e8]"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

function SecBottomSec({ crypto }) {
  return (
    <div className="w-full lg:w-1/3 p-1 lg:p-3 mb-4 lg:mb-0">
      <div className="w-full bg-[#1f1f2b] rounded-[10px] p-3">
        <h3 className="text-white capitalize text-[16px] pt-6 ps-6 pb-4">
          transactions
        </h3>
        <div className=" w-full flex text-[#9a9cab] capitalize text-[13px] lg:text-[14px] border-b border-b-[#262635] py-5 ">
          <span className="flex-1 text-center">name</span>
          <span className="flex-1 text-center">status</span>
          <span className="flex-1 text-center">amount</span>
        </div>
        <div className="w-full">
          {crypto &&
            crypto.map((item) => {
              return (
                <div className="w-full flex text-[13px] lg:text-[14px] text-[#9a9cab] py-5 border-b border-b-[#262635] ">
                  <span className="flex-1 text-center capitalize">
                    {item.name}
                  </span>
                  <span
                    className={`flex-1 text-center capitalize ${
                      item.status == "buy"
                        ? "text-[#83d8ae]"
                        : item.status == "failed"
                        ? "text-[#fc9494]"
                        : "text-[#fff6e8]"
                    }`}
                  >
                    {item.status}
                  </span>
                  <span
                    className={`flex-1 text-center ${
                      item.profit < 0 ? "text-[#fc9494]" : "text-[#83d8ae]"
                    }`}
                  >
                    {item.profit}%
                  </span>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
function SecBottomTH() {
  return (
    <div className="w-full lg:w-2/3 p-1 lg:p-3 mb-4 lg:mb-0">
      <div className="w-full bg-[#1f1f2b] rounded-[10px] flex justify-center flex-wrap p-6">
        <div className="w-1/2 md:w-1/5 flex justify-center flex-wrap items-center mb-4 lg:mb-0">
          <button className="w-[70px] h-[70px] bg-[#262635] text-[20px] flex justify-center items-center text-[#86c1ed] rounded-[50%] mb-4 hover:shadow-md hover:shadow-[#2d2d40] duration-200">
            <PiArrowBendUpRightBold />
          </button>
          <span className="text-[#9a9cab] text-[14px] capitalize w-full text-center">
            send
          </span>
        </div>
        <div className="w-1/2 md:w-1/5 flex justify-center flex-wrap items-center">
          <button className="w-[70px] h-[70px] bg-[#262635] text-[20px] flex justify-center items-center text-[#83d8ae] rounded-[50%] mb-4 hover:shadow-md hover:shadow-[#2d2d40] duration-200">
            <FaRegCreditCard />
          </button>
          <span className="text-[#9a9cab] text-[14px] capitalize w-full text-center">
            deposit
          </span>
        </div>
        <div className="w-1/2 md:w-1/5 flex justify-center flex-wrap items-center mb-4 lg:mb-0">
          <button className="w-[70px] h-[70px] bg-[#262635] text-[20px] flex justify-center items-center text-[#fad292] rounded-[50%] mb-4 hover:shadow-md hover:shadow-[#2d2d40] duration-200">
            <FaLock />
          </button>
          <span className="text-[#9a9cab] text-[14px] capitalize w-full text-center">
            stake
          </span>
        </div>
        <div className="w-1/2 md:w-1/5 flex justify-center flex-wrap items-center">
          <button className="w-[70px] h-[70px] bg-[#262635] text-[20px] flex justify-center items-center text-[#ada6f2] rounded-[50%] mb-4 hover:shadow-md hover:shadow-[#2d2d40] duration-200">
            <IoMdPersonAdd />
          </button>
          <span className="text-[#9a9cab] text-[14px] capitalize w-full text-center">
            add
          </span>
        </div>
        <div className="w-1/2 md:w-1/5 flex justify-center flex-wrap items-center">
          <button className="w-[70px] h-[70px] bg-[#262635] text-[20px] flex justify-center items-center text-[#83d8ae] rounded-[50%] mb-4 hover:shadow-md hover:shadow-[#2d2d40] duration-200">
            <FaCalendar />
          </button>
          <span className="text-[#9a9cab] text-[14px] capitalize w-full text-center">
            history
          </span>
        </div>
      </div>
    </div>
  );
}
function SecBottomFth() {
  return (
    <div className="w-full lg:w-1/3 p-1 lg:p-3 mb-4 lg:mb-0">
      <div className="w-full bg-[#1f1f2b] rounded-[10px] h-full flex flex-wrap content-center p-6 lg:p-0">
        <h3 className="text-center w-full text-[18px] text-white capitalize">
          claim your gift
        </h3>
        <span className="text-center text-[14px] text-[#9a9cab] w-full flex justify-center mt-2 mb-3">
          5% off for the first buy
        </span>
        <button className="w-[135px] h-[35px] bg-[#83d8ae] mx-auto text-white capitalize justify-center items-center text-[14px] flex rounded-[5px] duration-200 hover:shadow-sm hover:shadow-[#83d8ae]">
          register now
        </button>
      </div>
    </div>
  );
}

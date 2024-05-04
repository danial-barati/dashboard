"use client";
import * as React from "react";
import BarsDataset from "./chart";
import Image from "next/image";
import StackedAreaChart from "./bar";
import BorderRadius from "./bar2";
import PieActiveArc from "./pie";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
import { SiHostinger } from "react-icons/si";
import { PiFilmSlateFill } from "react-icons/pi";
import { PiFilmScriptThin } from "react-icons/pi";
import { CiCreditCard1 } from "react-icons/ci";
import { SiAparat } from "react-icons/si";

export default function Page() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    async function fetchdata() {
      const rawData = await fetch(
        "https://66310ff6c92f351c03dc0fb1.mockapi.io/prof"
      );
      const mainData = await rawData.json();
      setData(mainData);
    }
    fetchdata();
  }, []);

  return (
    <div className="ps-[0px] md:ps-[230px] dark:text-white">
      <div className=" w-full flex flex-wrap overflow-x-hidden px-4 md:px-10">
        <div className="w-full lg:w-1/2 justify-center flex ">
          <BarsDataset />
        </div>
        <SecondS data={data} />
        <ButtomDash />
      </div>
    </div>
  );
}

function SecondS({ data }) {
  return (
    <div className="w-full lg:w-1/2 flex justify-center flex-wrap">
      {data &&
        data.map((item) => {
          return (
            <div className="w-full flex justify-between items-center md:w-1/2 md:px-8 px-2 mb-8">
              <div className="">
                <h4 className="text-white me-5 mb-3 inline-block text-[20px] font-bold">
                  ${item.price}k
                </h4>
                <span
                  className={`text-[15px] ${
                    item.profit < 0 ? "text-[#fc9494]" : "text-[#83d8ae]"
                  }`}
                >
                  {item.profit}%
                </span>
                <span className="block text-[#9a9cab] text-[14px] capitalize">
                  {item.tag}
                </span>
              </div>
              <div>
                <div
                  className={`w-[45px] h-[45px] flex justify-center items-center rounded-[5px] text-white shadow-2xl ${
                    item.profit < 0
                      ? "bg-[#fc9494] shadow-[#fc9494]"
                      : "bg-[#83d8ae] shadow-[#83d8ae]"
                  }`}
                >
                  {item.profit < 0 ? <FaArrowTrendDown /> : <FaArrowTrendUp />}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

function ButtomDash() {
  const [profit, setProfit] = React.useState([]);

  React.useEffect(() => {
    async function fetchdata() {
      const rawData = await fetch(
        "https://6633b22ef7d50bbd9b4a5f26.mockapi.io/trans_author"
      );
      const mainData = await rawData.json();
      setProfit(mainData);
    }
    fetchdata();
  }, []);

  return (
    <div className="w-full flex my-5 justify-center flex-wrap ">
      <FirstD profit={profit} />
      <SecD />
      <ThirdD profit={profit} />
      <StackedAreaChart />
      <BorderRadius />
      <PieActiveArc />
    </div>
  );
}

function FirstD({ profit }) {
  return (
    <div className="w-full md:w-1/3 md:p-3 p-1">
      <div className="w-full bg-[#1f1f2b] rounded-[10px] p-5">
        <h3 className="text-[16px] capitalize font-medium mb-7 text-white">
          transaction
        </h3>
        <div className="">
          {profit &&
            profit.map((item) => {
              return (
                <div
                  className={`w-full flex justify-between  ${
                    item.id == 2 ? "my-5" : item.id == 4 ? "my-5" : "my-0"
                  }`}
                >
                  <div className="flex items-center">
                    <span
                      className={`w-[45px] h-[45px] justify-center flex items-center text-white rounded-[5px] me-4 ${
                        item.company === "hostiran"
                          ? "bg-[#86c1ed]"
                          : item.company === "filimo"
                          ? "bg-[#83d8ae]"
                          : item.company === "filmnet"
                          ? "bg-[#fc9494]"
                          : item.company === "nobitext"
                          ? "bg-[#fad292]"
                          : "bg-[#ada6f2]"
                      }`}
                    >
                      {item.company === "hostiran" ? (
                        <SiHostinger />
                      ) : item.company === "filimo" ? (
                        <PiFilmSlateFill />
                      ) : item.company === "filmnet" ? (
                        <PiFilmScriptThin />
                      ) : item.company === "nobitext" ? (
                        <CiCreditCard1 />
                      ) : (
                        <SiAparat />
                      )}
                    </span>
                    <div>
                      <h4 className="text-white text-[14px] font-medium capitalize">
                        {item.company}
                      </h4>
                      <span className="text-[#9a9cab] capitalize text-[12px]">
                        {item.date}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span
                      className={`text-[14px]  ${
                        item.C_profit < 0 ? "text-[#fc9494]" : "text-[#83d8ae]"
                      }`}
                    >
                      ${item.C_profit}
                    </span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

function SecD() {
  return (
    <div className="w-full md:w-1/3 md:p-3 p-1  items-stretch flex my-4 md:my-0">
      <div className="w-full bg-[#1f1f2b] rounded-[10px] p-5 pt-7">
        <figure className="w-full flex justify-center">
          <Image
            className="h-auto object-cover"
            src="/premium.svg"
            width={200}
            height={40}
            alt="dan"
          />
        </figure>
        <div>
          <h4 className="text-center text-[18px] capitalize text-white mt-10">
            advanced security
          </h4>
          <p className="text-[14px] text-[#9a9cab] text-center capitalize mt-6 mb-7">
            if you want to have advance security you can have our premium
            account and you will get what you want as you wish .
          </p>
          <button className="bg-[#86c1ed] w-[170px] h-[40px] rounded-[5px]  items-center  text-[14px] text-white capitalize mx-auto flex justify-center ">
            try premium for free
          </button>
        </div>
      </div>
    </div>
  );
}

function ThirdD({ profit }) {
  return (
    <div className="w-full md:w-1/3 md:p-3 p-1">
      <div className="w-full bg-[#1f1f2b] rounded-[10px] p-5">
        <h3 className="text-[16px] capitalize font-medium mb-7 text-white">
          transaction
        </h3>
        <div className="">
          {profit &&
            profit.map((item) => {
              return (
                <div
                  className={`w-full flex justify-between  ${
                    item.id == 2 ? "my-5" : item.id == 4 ? "my-5" : "my-0"
                  }`}
                >
                  <div className="flex items-center">
                    <figure className="w-[40px] h-[40px] justify-center flex items-center text-white rounded-[5px] me-4">
                      <Image
                        className="object-cover"
                        src={item.image}
                        width={40}
                        height={40}
                        alt="author"
                      />
                    </figure>
                    <div>
                      <h4 className="text-white text-[14px] font-medium capitalize">
                        {item.name}
                      </h4>
                      <span className="text-[#9a9cab] capitalize text-[12px]">
                        {item.items} items sold
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-[14px] text-[#9a9cab]">
                      ${item.A_profit}
                    </span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

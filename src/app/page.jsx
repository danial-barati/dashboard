"use client";
import React from "react";
import LoginPage from "./form";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full h-auto md:h-[100vh] flex flex-wrap items-center ">
      <div className="max-w-[1050px]  pt-[30px] md:pt-0 mx-auto flex flex-wrap  justify-center">
        <LoginPage />
        <FormImg />
      </div>
    </div>
  );
}

function FormImg() {
  return (
    <div className="md:w-1/2 w-full flex order-first md:order-last md:px-0 px-5">
      <Image src="/loginImg.svg" width={600} height={600} className="" />
    </div>
  );
}

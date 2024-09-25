import Hero from "@/app/_components/hero";
import React from "react";
import Alimg from "@/public/阿狸.jpeg";
// import Header from "@/app/_components/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "阿狸",
};

const Al = () => {
  return (
    <div>
      <Hero imgUrl={Alimg} altTxt="阿狸" content="阿狸" />
    </div>
  );
};

export default Al;

import React from "react";
import Slfnimg from "@/public/萨勒芬妮.jpeg";
import Hero from "@/app/_components/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "萨勒芬妮",
};

const Slfn = () => {
  return (
    <div>
      <Hero imgUrl={Slfnimg} altTxt="萨勒芬妮" content="萨勒芬妮" />
    </div>
  );
};

export default Slfn;

import React from "react";
import Dyzimg from "@/public/魂锁典狱长.jpg";
import Hero from "@/app/_components/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "典狱长",
};

const Dyz = () => {
  return (
    <div>
      <Hero imgUrl={Dyzimg} altTxt="典狱长" content="锤石" />
    </div>
  );
};

export default Dyz;

import { Metadata } from "next";
import Hero from "../_components/hero";
import Al from "@/public/阿狸.jpeg";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <div>
      <Hero imgUrl={Al} altTxt="阿狸" content="阿狸" />
    </div>
  );
}

/**
 * (dashboard) 用小括号包裹的叫路由组
 */

import Image, { StaticImageData } from "next/image";

interface HeroProps {
  imgUrl: StaticImageData;
  altTxt: string;
  content: string;
}

export default function Hero({ imgUrl, altTxt, content }: HeroProps) {
  return (
    <div className=" h-screen relative">
      <div className="absolute inset-0 -z-40">
        <Image src={imgUrl} alt={altTxt} fill style={{ objectFit: "cover" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900"></div>
      </div>
      <div className="flex text-white justify-center items-center pt-48">
        <h1 className="text-6xl">{content}</h1>
      </div>
    </div>
  );
}

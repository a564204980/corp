"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const Links = [
    { href: "/al", name: "阿狸" },
    { href: "/dyz", name: "锤石" },
    { href: "/slfn", name: "萨勒芬妮" },
  ];
  const pathname = usePathname();

  return (
    <div className="absolute w-full z-10">
      <div className="flex justify-between container mx-auto  p-8">
        <Link className="text-3xl font-bold" href="/">
          首页
        </Link>
        <div className="text-xl space-x-4 flex items-center">
          {Links.map((link) => {
            const isActive = pathname === link.href ? "text-purple-500" : "";
            return (
              <Link key={link.href} href={link.href} className={isActive}>
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;

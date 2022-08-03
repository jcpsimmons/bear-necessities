import Link from "next/link";
import React from "react";

type Props = {};

export default function CoolestFuckingHeaderInTheWorld({}: Props) {
  return (
    <header className="bg-red-400 mb-10 flex md:flex-row flex-col md:justify-between items-center md:text-7xl sm:text-6xl text-4xl font-black">
      <div>
        <Link href="/">
          <h1 className="hover:cursor-pointer hover:text-red-500 transition-colors md:mb-auto mb-2">
            <a>Home</a>
          </h1>
        </Link>
      </div>
      <div>
        <Link href="/about">
          <h1 className="hover:cursor-pointer hover:text-red-500 transition-colors">
            <a>About</a>
          </h1>
        </Link>
      </div>
    </header>
  );
}

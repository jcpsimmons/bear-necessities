import Link from "next/link";
import React from "react";

type Props = {};

export default function CoolestFuckingHeaderInTheWorld({}: Props) {
  return (
    <header className="bg-red-400 mb-10 flex justify-between text-7xl font-black transition-colors">
      <div>
        <Link href="/">
          <h1 className="hover:cursor-pointer hover:underline underline-offset-2 ">
            <a>Home</a>
          </h1>
        </Link>
      </div>
      <div>
        <Link href="/">
          <h1 className="hover:cursor-pointer hover:underline underline-offset-2 ">
            <a>About</a>
          </h1>
        </Link>
      </div>
    </header>
  );
}

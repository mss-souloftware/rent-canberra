import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <div className="siteLogo basis-1/6">
      <Link href="/">
        <Image className="opacity-1" src="../logo.svg" width={250} height={250} alt="Rent Canberra" priority={true}/>
      </Link>
    </div>
  );
}

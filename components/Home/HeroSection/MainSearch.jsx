import Image from "next/image";
import React from "react";

export default function MainSearch() {
  return (
    <div className="flex w-full justify-center items-center max-w-3xl">
      <div className="w-11/12">
        <input
          className="border-0 w-full p-4 "
          type="text"
          placeholder="Search by region, suburb, street or postcode"
        />
      </div>
      <div className="w-14 bg-themeBlue">
        <button className="bg-themeBlue flex items-center justify-center w-full h-14">
          <Image src="/icons/search.svg" width={20} height={20} />
        </button>
      </div>
    </div>
  );
}

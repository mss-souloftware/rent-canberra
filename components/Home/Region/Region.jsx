import React from "react";
import Container from "../../Container/Container";
import PropertyCard from "../TrendingHomes/PropertyCard";
import Link from "next/link";

export default function Region() {
  const properties = [
    {
      id: crypto.randomUUID(),
      title: "Home in Canberra",
      imageSrc: "/images/propertyCard.jpg",
      description:
        "Brilliant 3 bedroom home•garden views free parking Viewed 131 times last week",
      price: "1,038",
    },
    {
      id: crypto.randomUUID(),
      title: "Home in Canberra 2",
      imageSrc: "/images/propertyCard.jpg",
      description:
        "Brilliant 5 bedroom home garden views free parking Viewed 131 times last week",
      price: "1,089",
    },
    {
      id: crypto.randomUUID(),
      title: "Home in Canberra 3",
      imageSrc: "/images/propertyCard.jpg",
      description:
        "Brilliant 4 bedroom home garden views free parking Viewed 154 times last week",
      price: "1,050",
    },
    {
      id: crypto.randomUUID(),
      title: "Home in Canberra 4",
      imageSrc: "/images/propertyCard.jpg",
      description:
        "Brilliant 4 bedroom home garden views free parking Viewed 154 times last week",
      price: "1,090",
    },
  ];
  return (
    <section id="regionSec" className="bg-[#F5F5F5] py-12">
      <Container>
        <div className="flex justify-between">
          <h2 className="text-3xl font-semibold">
            Explore Canberra Rent by Suburb
          </h2>
          <Link className="hover:text-themeBlue font-semibold" href="/">
            View All Regions
          </Link>
        </div>
        <div className="h-1 w-full bg-black mt-3"></div>
        <div className="flex gap-4 items-center mt-12">
          <div className="thProperties w-6/12">
            <div className="grid grid-cols-2 gap-4">
              {properties.map((propertie) => (
                <PropertyCard
                  key={propertie.id}
                  title={propertie.title}
                  imageSrc={propertie.imageSrc}
                  description={propertie.description}
                  price={propertie.price}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

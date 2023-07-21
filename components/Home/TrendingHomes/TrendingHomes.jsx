import React from "react";
import Container from "../../Container/Container";
import PropertyCard from "./PropertyCard";

export default function TrendingHomes() {
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
  ];

  return (
    <section id="trendingHomes" className="py-12">
      <Container>
        <div className="flex gap-4 items-center">
          <div className="thTextData flex flex-col justify-between w-2/12 h-full">
            <span className="text-sm font-bold mb-5">Trending homes</span>
            <h2 className="text-3xl font-semibold">
              The #1 website to find rent it Canberra
            </h2>
          </div>
          <div className="thProperties w-10/12">
            <div className="grid grid-cols-3 gap-4">
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

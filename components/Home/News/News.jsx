import React from "react";
import Container from "../../Container/Container";
import Link from "next/link";
import NewsCard from "../../Global/NewsCard";

export default function News() {
  const properties = [
    {
      id: crypto.randomUUID(),
      title: "Home in Canberra",
      imageSrc: "/images/propertyCard.jpg",
    },
    {
      id: crypto.randomUUID(),
      title: "Home in Canberra 2",
      imageSrc: "/images/propertyCard.jpg",
    },
    {
      id: crypto.randomUUID(),
      title: "Home in Canberra 3",
      imageSrc: "/images/propertyCard.jpg",
    },
  ];

  return (
    <section id="newsSection" className="py-12">
      <Container>
        <div className="flex justify-between">
          <h2 className="text-3xl font-semibold">News & Articles</h2>
          <Link className="hover:text-themeBlue font-semibold" href="/">
            view all News
          </Link>
        </div>
        <div className="h-1 w-full bg-black mt-3"></div>
        <div className="thProperties w-full py-12">
          <div className="grid grid-cols-3 gap-4">
            {properties.map((propertie) => (
              <NewsCard
                key={propertie.id}
                title={propertie.title}
                imageSrc={propertie.imageSrc}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

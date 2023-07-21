import React from "react";
import Container from "../../Container/Container";
import MainSearch from "./MainSearch";
import Subhurb from "./Subhurb";

export default function HomeHero() {
  return (
    <section id="homeHero" className="bg-[url('/images/homeHero.jpg')] bg-cover bg-no-repeat py-32">
      <Container>
        <div className="flex items-center flex-col">
          <h1 className="text-white text-5xl font-bold mb-10">
            Find rent & tenants with rent Canberra
          </h1>
          <MainSearch />
          <Subhurb />
        </div>
      </Container>
    </section>
  );
}

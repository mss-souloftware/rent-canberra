import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import HeaderBar from "./HeaderBar";
import Container from "../Container/Container";

export default function Header() {
  return (
    <>
      <header className="py-8">
        <Container>
          <div className="flex flex-row items-center">
            <Logo />
            <Navbar />
          </div>
        </Container>
      </header>
      <HeaderBar />
    </>
  );
}
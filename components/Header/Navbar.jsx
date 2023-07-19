import Link from "next/link";
import React from "react";

export default function Navbar() {
  const navItems = [
    {
      id: crypto.randomUUID(),
      navlink: "/",
      navtitle: "Renters profile",
    },
    {
      id: crypto.randomUUID(),
      navlink: "/",
      navtitle: "Landlords",
    },
    {
      id: crypto.randomUUID(),
      navlink: "/",
      navtitle: "Agents",
    },
    {
      id: crypto.randomUUID(),
      navlink: "/",
      navtitle: "Research",
    },
    {
      id: crypto.randomUUID(),
      navlink: "/",
      navtitle: "News",
    },
    {
      id: crypto.randomUUID(),
      navlink: "/",
      navtitle: "Make a Listing",
    },
    {
      id: crypto.randomUUID(),
      navlink: "/",
      navtitle: "Log In",
    },
    {
      id: crypto.randomUUID(),
      navlink: "/",
      navtitle: "Sign Up",
    },
  ];

  return (
    <nav className="basis-5/6">
      <ul className="flex flex-row gap-4 justify-end">
        {navItems.map((navItem) => (
          <li key={navItem.id}>
            <Link
              className="hover:text-themeGreen transition-colors"
              href={navItem.navlink}
            >
              {navItem.navtitle}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

import Link from "next/link";
import React from "react";

export default function Subhurb() {
  const subhurbs = [
    {
      id: crypto.randomUUID(),
      title: "Barton",
      slug: "/",
    },
    {
      id: crypto.randomUUID(),
      title: "Kingston",
      slug: "/",
    },
    {
      id: crypto.randomUUID(),
      title: "Queanbeyan Region",
      slug: "/",
    },
    {
      id: crypto.randomUUID(),
      title: "Gungahlin",
      slug: "/",
    },
    {
      id: crypto.randomUUID(),
      title: "Woden Valley",
      slug: "/",
    },
    {
      id: crypto.randomUUID(),
      title: "Denman",
      slug: "/",
    },
    {
      id: crypto.randomUUID(),
      title: "All ACT",
      slug: "/",
    },
  ];

  return (
    <div className="flex justify-center mt-7">
      <ul className="flex items-center">
        {subhurbs.map((subhurb) => (
          <li key={subhurb.id} className="mx-1.5">
            <Link
              className="bg-themeBlue text-white text-sm py-1 px-1.5"
              href={subhurb.slug}
            >
              {subhurb.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./PropertyCard.module.css";


export default function PropertyCard(props) {
  return (
    <div className={`${styles.propertyCard} p-2`}>
      <Link href="/">
        <div className="rounded-lg">
          <Image
            className="rounded-lg"
            src={props.imageSrc}
            alt={props.title}
            fill={true}
          />
        </div>
        <h3 className="my-2 font-semibold text-lg">{props.title}</h3>
        <p>{props.description}</p>
        <span className="mt-6 block font-semibold text-sm">
          $ {props.price} AUD total
        </span>
      </Link>
    </div>
  );
}

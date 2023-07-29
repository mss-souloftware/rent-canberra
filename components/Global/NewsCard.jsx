import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from '../Home/TrendingHomes/PropertyCard.module.css'

export default function NewsCard(props) {
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
      </Link>
    </div>
  );
}

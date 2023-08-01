import React from "react";
import Container from "../Container/Container";
import Logo from "../Header/Logo";
import Link from "next/link";
import styles from './Footer.module.css'
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="pt-6 bg-themeDark border-t-2">
      <Container>
        <div className="thProperties w-full py-12">
          <div className="grid grid-cols-4 gap-4">
            <div className="ftinfoBox">
              <Logo />
              <p className="mt-5 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, doloribus?
              </p>
            </div>
            <div className={styles.quickLinks}>
              <h3 className="text-white text-xl m-0 p-0 mb-5 font-semibold">
                Subhurbs
              </h3>
              <ul>
                <li>
                  <Link href='/'>Barton</Link>
                </li>
                <li>
                  <Link href='/'>Kingston</Link>
                </li>
                <li>
                  <Link href='/'>Queanbeyan Region</Link>
                </li>
                <li>
                  <Link href='/'>Gungahlin</Link>
                </li>
                <li>
                  <Link href='/'>Woden Valley</Link>
                </li><li>
                  <Link href='/'>Denman</Link>
                </li>
              </ul>
            </div>
            <div className={styles.quickLinks}>
              <h3 className="text-white text-xl m-0 p-0 mb-5 font-semibold">
                Quick Links
              </h3>
              <ul>
                <li>
                  <Link href='/'>Home</Link>
                </li>
                <li>
                  <Link href='/'>Agents</Link>
                </li>
                <li>
                  <Link href='/'>Landloards</Link>
                </li>
                <li>
                  <Link href='/'>Login</Link>
                </li>
                <li>
                  <Link href='/'>Sign Up</Link>
                </li>
              </ul>
            </div>
            <div className={styles.quickLinks}>
              <h3 className="text-white text-xl m-0 p-0 mb-5 font-semibold">
                Follow Us
              </h3>
              <ul>
                <li>
                  <Link href='/'>
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    Twitter
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
      <div className="copright bg-themeGreen text-center py-3">
        <p className="text-white">Allright Reserved 2023</p>
      </div>
    </footer>
  );
}

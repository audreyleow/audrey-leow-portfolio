import Link from "next/link";
import React, { useState } from "react";
import { navLinks } from "../utils/data";
import MobileNavbar from "./MobileNavbar";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.header + " nav_bar"}>
      <nav className={styles.nav}>
        <div className={styles.name}>
          <Link href={"/"} className={styles["main-link"]}>
            <h1 className={styles.logo}>Audrey Leow</h1>
          </Link>
        </div>

        <div className={styles.navlinks}>
          {navLinks.map((link, index) => {
            return (
              <Link key={link.path} href={link.path} className={styles["indiv-link"]}>
                <div>{link.name}</div>
              </Link>
            );
          })}
        </div>
        <div className={styles.mobilenavbar}>
          <MobileNavbar />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

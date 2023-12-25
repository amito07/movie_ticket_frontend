"use client";

import Image from "next/image";
import { navlist } from "../utils/NavList";
import Link from "next/link";

const Nav = () => {
  console.log("navList", navlist);
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        backgroundColor: "black",
      }}
    >
      <div>
        <Image src="/main_logo.png" width={80} height={80} property="logo" />
      </div>
      <div>
        {navlist.map((x, index) => (
          <Link
          key={index}
            href={x.path}
            style={{
              textDecoration: "none",
              color: "white",
              marginLeft: "1rem",
              display: "inline",
            }}
          >
            {x.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;

"use client";
import Link from "next/link";
import Image from "next/image";
import { Layout, Menu } from "antd";
import { FaSearch } from "react-icons/fa";
const { Header } = Layout;

const Nav = () => {
  const items = new Array(15).fill(null).map((_, index) => ({
    key: index + 1,
    label: `nav ${index + 1}`,
  }));
  return (
    <>
      <div style={{ border: "1px solid green", backgroundColor: "#212121" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div>
            <Image src="/main_logo.png" width={80} height={80} />
          </div>
          <div>
            <FaSearch style={{ fontSize: "1.5rem", color: "white" }} />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "70%",
          }}
        >
          <Link
            href="/"
            style={{
              textDecoration: "none",
              color: "white",
              marginLeft: "1rem",
              display: "inline",
            }}
          >
            HOME
          </Link>
          <Link
            href="/showtime"
            style={{
              textDecoration: "none",
              color: "white",
              marginLeft: "1rem",
              display: "inline",
            }}
          >
            SHOWTIME
          </Link>
          <Link
            href="/aboutus"
            style={{
              textDecoration: "none",
              color: "white",
              marginLeft: "1rem",
              display: "inline",
            }}
          >
            ABOUT US
          </Link>
          <Link
            href="/career"
            style={{
              textDecoration: "none",
              color: "white",
              marginLeft: "1rem",
              display: "inline",
            }}
          >
            CAREER
          </Link>
          <Link
            href="/ticketprice"
            style={{
              textDecoration: "none",
              color: "white",
              marginLeft: "1rem",
              display: "inline",
            }}
          >
            TICKET PRICE
          </Link>
          <Link
            href="/contacts"
            style={{
              textDecoration: "none",
              color: "white",
              marginLeft: "1rem",
              display: "inline",
            }}
          >
            CONTACTS
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;

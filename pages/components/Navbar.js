import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logoDiv">
          <Image width={60} height={60} src="/logoOne.png" alt="logo" />
        </div>
        <div className="links">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
          <Link href="/images">
            <a>Images</a>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

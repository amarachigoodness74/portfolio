import Link from "next/link";
import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter
} from "react-icons/fa";
import ThemeChanger from "./ThemeChanger";

export default function Navbar() {
  return (
    <header className="w-full text-sm lg:static lg:h-auto lg:w-auto">
      <div className="flex w-full justify-center text-center">
        <Link
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="/"
        >
          <h1 className="text-4xl font-bold tracking-wide mb-2">
            AMARACHI GOODNESS
          </h1>
        </Link>
      </div>

      <section className="text-center pb-6 pt-8 backdrop-blur-2xl lg:p-4">
        Software Engineer - JavaScript, Rust
        <div className="max-w-[200px] flex justify-between items-center mx-auto mt-4 text-2xl">
          <ThemeChanger />
          {" "} • {" "}
          <a
            href="https://github.com/amarachigoodness74"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="h-5 w-5" />
          </a>
          {" "} • {" "}
          <a
            href="https://www.linkedin.com/in/dev-amarachi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="h-5 w-5" />
          </a>
          {" "} • {" "}
          <a
            href="https://twitter.com/dev_amarachi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="h-5 w-5" />
          </a>
        </div>
      </section>
    </header>
  );
}

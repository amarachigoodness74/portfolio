import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter, FaSun, FaMoon } from 'react-icons/fa';

export default function Navbar() {
  return (
    <header className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className="text-2xl font-bold tracking-tighter">AmarachiGoodness</h1>
        </a>
      </div>

      <section className="text-center w-auto bg-gradient-to-b pb-6 pt-8 backdrop-blur-2xl dark:bg-zinc-800/30 dark:from-inherit lg:static lg:rounded-xl lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        Software Engineer - JavaScript, Rust
        <div className="w-40 flex justify-around items-center mx-auto mt-4">
        <FaMoon />
        <FaGithub />
        <FaLinkedinIn />
        <FaTwitter />
      </div>
      </section>
    </header>
  );
}

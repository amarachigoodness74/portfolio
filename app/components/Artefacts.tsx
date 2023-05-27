import React from "react";
import { FaRegRegistered } from "react-icons/fa";

export default function Artefacts() {
  return (
    <section className="my-7 mx-auto max-w-2xl">
      <h2 className="text-2xl font-bold flex items-center">
        <FaRegRegistered /> &nbsp; Artefacts
      </h2>
      <ul className="w-full">
        <li className="mt-4 text-lg dark:text-white/90">
          {" "}
          •{" "}
          <a className="underline dark:hover:text-white" href="">
            Resume
          </a>
          <span className="text-sm mt-1"> - Download Soon</span>
        </li>
      </ul>
    </section>
  );
}

import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="text-center py-2 w-full">
      <hr className="text-center py-2 w-6/12 m-auto" />
      <p>
        &copy; 2023{" "}
        {Number(new Date().getFullYear()) > 2023 && `- ${new Date().getFullYear()}`}
        <span className="text-2xl">{" "} • {" "}</span> Amarachi Goodness
      </p>
    </footer>
  );
}

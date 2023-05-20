import React from "react";
import { FaTools } from "react-icons/fa";
import projects from "@/utils/projects.json";

type Props = {
  project: Project;
};

function ListItem({ project }: Props) {
  const { name, description, githubLink } = project;

  return (
    <li className="mt-4 text-lg dark:text-white/90">
      {" "}
      •{" "}
      <a
        className="underline dark:hover:text-white"
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        {name}
      </a>
      <span className="text-sm mt-1"> - {description}</span>
    </li>
  );
}

export default function Projects() {
  return (
    <section className="my-7 mx-auto max-w-2xl">
      <h2 className="text-2xl font-bold flex items-center">
        <FaTools /> &nbsp; Projects
      </h2>
      <ul className="w-full">
        {projects.map((project) => (
          <ListItem key={project.id} project={project} />
        ))}
      </ul>
    </section>
  );
}

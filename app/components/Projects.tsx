import React from "react";
import { FaTools } from "react-icons/fa";
import projects from "@/utils/projects.json";

type Props = {
  project: Project;
};

function ListItem({ project }: Props) {
  const { name, description, tools, githubLink } = project;

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
      <span className="text-sm mt-1"> - {description}</span> - <span className="tools">{tools.join(", ")}</span>
    </li>
  );
}

export default function Projects() {
  return (
    <section className="my-10 mx-auto max-w-2xl">
      <h2 className="text-2xl font-bold flex items-center">
        <FaTools /> &nbsp; Projects
      </h2>
      <ul className="w-full">
        {projects.map((project) => (
          <ListItem key={project.id} project={project} />
        ))}
        <p>...</p>
        More projects on  <a
        className="underline dark:hover:text-white"
        href="https://github.com/amarachigoodness74?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      </ul>
    </section>
  );
}

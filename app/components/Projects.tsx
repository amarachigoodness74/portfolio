import React from "react";
import { FaTools } from "react-icons/fa";
import projects from "@/data/projects.json";

type Props = {
  project: Project;
};

function ListItem({ project }: Props) {
  const { name, description, tools, githubLink, LiveLink } = project;

  return (
    <li className="mt-4 text-lg dark:text-white/90">
      {" "}
      •{" "}
      <a
        className="underline dark:hover:text-white"
        href={LiveLink || githubLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        {name}
      </a>
      <span className="text-sm mt-1"> - {description}</span>{" "}
      <span className="text-xs text-#555 dark:text-slate-500">
        ({tools.join(", ")})
      </span>{" "}
      <span className="text-sm font-bold">
        {" "}
        -{" "}
        <a
          className="underline dark:hover:text-white"
          href={LiveLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          [ Demo ]
        </a>
        {" • "}
        <a
          className="underline dark:hover:text-white"
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          [ Code ]
        </a>
      </span>
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

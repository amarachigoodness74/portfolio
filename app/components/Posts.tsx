import React from "react";
import { getFormattedDate, sortDescending } from "@/utils/helpers";
import { FaRegEdit } from "react-icons/fa";
import posts from "@/data/posts.json";

type Props = {
  post: Post;
};

function ListItem({ post }: Props) {
  const { title, readTime, tags, LiveLink, date } = post;

  const formattedDate = getFormattedDate(date);

  return (
    <li className="mt-4 text-lg dark:text-white/90">
      {" "}
      •{" "}
      <a
        className="underline dark:hover:text-white"
        href={LiveLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>
      <span className="text-xs text-#555 dark:text-slate-500">
        {" "}
        - ({tags.join(", ")})
      </span>
      <span className="text-sm mt-1">
        {" "}
        - {formattedDate}{" "}
        <span className="text-xs dark:text-slate-500 text-#555">
          ({readTime})
        </span>
      </span>
    </li>
  );
}

export default function Posts() {
  const postDesc = sortDescending(posts);
  return (
    <section className="my-10 mx-auto max-w-2xl">
      <h2 className="text-2xl font-bold flex items-center">
        <FaRegEdit /> &nbsp; Posts
      </h2>
      <ul className="w-full">
        {postDesc.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
        <p>...</p>
        More Posts on{" "}
        <a
          className="underline dark:hover:text-white"
          href="https://dev.to/amarachigoodness74"
          target="_blank"
          rel="noopener noreferrer"
        >
          DevTo
        </a>
      </ul>
    </section>
  );
}

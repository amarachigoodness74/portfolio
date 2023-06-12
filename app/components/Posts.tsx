import Link from "next/link";
import getFormattedDate from "@/utils/getFormattedDate";
import { getSortedPostsData } from "@/utils/posts";
import { FaRegEdit } from "react-icons/fa";

type Props = {
  post: BlogPost;
};

function ListItem({ post }: Props) {
  const { id, title, date, time } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <li className="mt-4 text-lg dark:text-white/90">
      {" "} • {" "}
      <Link
        className="underline dark:hover:text-white"
        href={`/${id}`}
      >
        {title}
      </Link>
      <span className="text-sm mt-1">{" "} - {" "}{formattedDate} <span className="text-xs dark:text-slate-500 text-#555">({time})</span></span>
    </li>
  );
}

export default function Posts() {
  const posts = getSortedPostsData();

  return (
    <section className="my-10 mx-auto max-w-2xl">
      <h2 className="text-2xl font-bold flex items-center"><FaRegEdit /> &nbsp; Posts</h2>
      <ul className="w-full">
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}

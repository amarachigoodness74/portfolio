import Link from "next/link";
import getFormattedDate from "@/utils/getFormattedDate";
import { getPostData } from "@/utils/posts";
import { FaRegEdit } from "react-icons/fa";

export default function Post() {
  const id = "";
  const post = getPostData(id);
  const { title, date, time, contentHtml } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <section className="my-10 mx-auto max-w-2xl">
      <h2 className="text-2xl font-bold flex items-center">{title}</h2>
      <span className="text-sm mt-1">{" "} - {" "}{formattedDate} ({time})</span>
      <div className="w-full">
        {contentHtml}
      </div>
    </section>
  );
}

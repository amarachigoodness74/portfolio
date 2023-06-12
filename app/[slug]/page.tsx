import Link from "next/link";
import getFormattedDate from "@/utils/getFormattedDate";
import { getPostData } from "@/utils/posts";

type PageParams = {
  slug: string;
};

type PageProps = {
  params: PageParams;
};

export default async function Post({ params }: PageProps) {
  const slug = params.slug;
  const post = await getPostData(slug);
  const { title, date, time, contentHtml } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <>
    <Link href="/" className="underline">Back</Link>
    <section className="my-10 mx-auto max-w-2xl">
      <h2 className="text-2xl font-bold flex items-center">{title}</h2>
      <span className="text-sm mt-1">
        {" "}
        - {formattedDate} ({time})
      </span>
      {contentHtml && <div className="blog-post w-full mt-7 mb-10" dangerouslySetInnerHTML={{ __html: contentHtml }} />}
    </section>
    </>
  );
}

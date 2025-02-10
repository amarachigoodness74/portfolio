type BlogPost = {
  id: string,
  title: string,
  date: string,
  time?: string,
  contentHtml?: string
}

type Post = {
  id: number;
  title: string;
  readTime: string;
  tags: string[];
  LiveLink: string;
  date: string;
};

type Project = {
  id: number,
  name: string,
  description: string,
  tools: string[],
  githubLink: string,
  LiveLink: string,
}
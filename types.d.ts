type BlogPost = {
  id: string,
  title: string,
  date: string,
  time?: string
}

type Project = {
  id: number,
  name: string,
  description: string,
  tools: string[],
  githubLink: string,
  LiveLink: string,
}
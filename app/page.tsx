import Artefacts from "./components/Artefacts";
import Intro from "./components/Intro";
import Posts from "./components/Posts";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <Intro />
      <Posts />
      <Projects />
      <Artefacts />
    </>
  );
}

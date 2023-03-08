import Navbar from "@/components/navbar";
import Header from "@/components/header";
import Project from "@/components/project";
import useSWR from "swr";
import { Fetcher } from "swr";
const fetcher: Fetcher<any, string> = (args: string) =>
  fetch(args).then((res) => res.json());

export default function Home() {
  const { data } = useSWR("/api/github/projects", fetcher);
  return (
    <div>
      <Navbar />
      <Header />
      <div className="ml-auto mt-4 w-3/4 grid grid-rows-4  grid-cols-4 gap-4 pr-6">
        {data &&
          data.map((project: any) => (
            <Project
              name={project.name}
              description={project.description}
              language={project.language}
            />
          ))}
      </div>
    </div>
  );
}

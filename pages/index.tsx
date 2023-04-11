import Navbar from "@/components/navbar";
import Header from "@/components/header";
import Project from "@/components/project";
import Slider from "@/components/slider";
import useSWR from "swr";
import { Fetcher } from "swr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const fetcher: Fetcher<any, string> = (args: string) =>
  fetch(args).then((res) => res.json());

export default function Home() {
  const { data } = useSWR("/api/github/projects", fetcher);
  return (
    <div>
      <Navbar />
      <Header />
      <div className="ml-auto mt-4 w-3/4 grid grid-cols-4 gap-4 pr-6 auto-rows-fr">
        {data &&
          data.map((project: any) => (
            <Project
              name={project.name}
              description={project.description}
              language={project.language}
            />
          ))}
      </div>
      <div>
        {data && (
          <Slider
            items={[
              <div className="bg-[#1c1c1c] w-72 p-5 min-w-80 rounded space-y-2">
                <div className="gap-1 flex">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <p className="grey-text">
                  My freelancer was terrific! He did a great job and helped
                  tremendously. Would highly recommend to work with him
                </p>
                <p>Michele Manna</p>
              </div>,
            ]}
          />
        )}
      </div>
    </div>
  );
}

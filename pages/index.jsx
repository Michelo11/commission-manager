import Navbar from "@/components/navbar";
import Header from "@/components/header";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR("/api/reviews", fetcher);

  return (
    <div>
      <Navbar />
      <Header />
      <div className="ml-auto mt-4 w-3/4 grid grid-rows-4  grid-cols-4 gap-4 pr-6">
        <div className="bg-[#1c1c1c] p-3 rounded">
          <div className="flex items-center justify-between">
            <p className="font-medium text-lg">Commission Manager</p>
            <span className="grey-text text-sm border-solid border-[#ffffffa6] border w-14 rounded-2xl text-center ">Public</span>
          </div>
          <p className="text-[15px] grey-text">
            Next.js dashboard to manage project and commissions with ease and
            with the ability to share projects.
          </p>
          <span>
            
          </span>
        </div>
      </div>
    </div>
  );
}

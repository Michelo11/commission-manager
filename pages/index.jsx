import Navbar from "@/components/navbar";
import Header from "@/components/header";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR("/api/reviews", fetcher);

  return (
    <>
      <Navbar />
      <Header />
    </>
  );
}

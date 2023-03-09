import { signOut, useSession } from "next-auth/react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { Fetcher } from "swr";

const fetcher: Fetcher<any, string> = (args: string) =>
  fetch(args).then((res) => res.json());

export default function Navbar() {
  const { data: session } = useSession();
  const { data } = useSWR("/api/github/profile", fetcher);
  return (
    <>
      <nav className="bg-[#171717] flex justify-between text-white h-14 items-center font-medium px-4">
        <div className="flex justify-between items-center gap-2">
          <Image
            className="rounded-full border-solid border-[#1c1c1c] border-2 "
            src={
              data && data.avatar
                ? data.avatar
                : "https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
            }
            alt="propic"
            width={32}
            height={32}
            draggable={false}
          />
          {data && data.name}
        </div>
        <div className="gap-3 flex">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Portfolio</Link>
          <Link href={"/"}>Purchases</Link>
        </div>
        {session && (
          <button className="border-gradient w-40" onClick={() => signOut()}>
            Logout
          </button>
        )}
        {!session && (
          <button
            className="border-gradient w-40"
            onClick={() => signIn("discord")}
          >
            Login
          </button>
        )}
      </nav>
    </>
  );
}

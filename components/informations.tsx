import { useSession } from "next-auth/react";
import Image from "next/image";
import useSWR from "swr";
import { Fetcher } from "swr";
const fetcher: Fetcher<any, string> = (args: string) =>
  fetch(args).then((res) => res.json());

export default function Informations() {
  const { data: session } = useSession();
  const { data } = useSWR("/api/github/profile", fetcher);
  return (
    <div className="w-full">
      <Image
        className="rounded-full border-solid border-[#1c1c1c] border-2 bg-[#292929]"
        src={
          data && data.avatar
            ? data.avatar
            : "https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
        }
        alt="propic"
        width={200}
        height={200}
        draggable={false}
      />
      <div className="mt-6">
        <p className="font-medium text-lg">{data && data.name}</p>
        <p className="text-[#b5b5b5] text-[15px]">
          {data && data.bio ? data.bio : "No bio"}
        </p>
        {session && (
          <a
            href={"https://github.com/settings/profile"}
            className="text-[15px] bg-[#363637] rounded w-1/2 h-9 mt-4 border-solid border-[#1c1c1ca6] border-2 flex items-center justify-center"
          >
            Edit Profile
          </a>
        )}
      </div>
    </div>
  );
}

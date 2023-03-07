import Image from "next/image";

export default function Informations() {
  return (
    <div className="flex w-full">
      <div className="w-1/4">
        <Image
          className="rounded-full border-solid border-[#1c1c1c] border-2 bg-[#292929]"
          src={
            "https://cdn.discordapp.com/avatars/573539095452844052/d639e55d46b3c5b443fa04b43fb0d308.webp?size=512"
          }
          alt="propic"
          width={200}
          height={200}
          draggable={false}
        />
        <div className="mt-6">
          <p className="font-medium text-lg">Michele</p>
          <p className="text-[#b5b5b5] text-[15px]">
            A student from Italy who loves developing fullstack websites,
            designing and administrating systems.
          </p>
          <button className="text-[15px] bg-[#363637] rounded w-1/2 h-9 mt-4 border-solid border-[#1c1c1ca6] border-2">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}

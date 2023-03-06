import Image from "next/image";

export default function Header() {
  return (
    <>
      <div>
        <div className="bg-gradient-to-br from-[#18181b] via-[#1e4a49] to-[#1e665b] w-full h-80 block relative">
          <div className="absolute bottom-0 translate-y-1/2 pl-10">
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
          </div>
        </div>
      </div>
    </>
  );
}

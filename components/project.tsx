import Link from "next/link";
export default function Project({ name, description, language }: any) {
  return (
    <>
      <Link
        href={"https://github.com/Michelo11/" + name}
        className="bg-[#1c1c1c] p-3 rounded flex flex-col"
      >
        <div className="flex items-center justify-between">
          <p className="font-medium text-lg">{name}</p>
          <span className="grey-text text-sm border-solid border-[#ffffffa6] border w-14 rounded-2xl text-center ">
            Public
          </span>
        </div>
        <p className="text-[15px] grey-text">
          {description ? description : "No description"}
        </p>
          <p
            className="mt-auto pt-2 text-sm flex items-center gap-2"
          >
            <span className={"block rounded-full w-4 h-4 " + language}></span>{language}
          </p>
      </Link>
    </>
  );
}

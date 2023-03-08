import Informations from "@/components/informations";

export default function Header() {
  return (
    <>
      <div>
        <div className="flex flex-col justify-center items-center bg-gradient-to-br from-[#18181b] via-[#1e4a49] to-[#1e665b] w-full h-72 relative">
          <h1 className="translate-x-8 tracking-widest w-fit flex justify-center items-center text-3xl font-light">
            PROFILE
          </h1>
          <div className="absolute bottom-0 left-0 translate-y-2/3 pl-6 w-1/4">
            <Informations />
          </div>
        </div>
      </div>
    </>
  );
}

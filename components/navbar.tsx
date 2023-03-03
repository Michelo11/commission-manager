import { signOut, useSession } from "next-auth/react"
import { signIn } from "next-auth/react";
import Image from "next/image"
import Link from "next/link";

export default function Navbar() {
    const { data: session } = useSession();
    return (
        <>
            <nav className="bg-[#171717] flex text-white h-14 justify-between items-center font-medium px-4">
                <div className="flex justify-center items-center gap-2">
                    <Image
                        className="rounded-full"
                        src={"https://cdn.discordapp.com/avatars/573539095452844052/d639e55d46b3c5b443fa04b43fb0d308.webp?size=512"}
                        alt="propic"
                        width={32}
                        height={32}
                    />
                    Michele Manna
                </div>
                <div className="gap-3 flex">
                    <Link href={"/"}>Home</Link>
                    <Link href={"/"}>Portfolio</Link>
                    <Link href={"/"}>Purchases</Link>
                </div>
                {session && (
                    <button className="border-gradient" onClick={() => signOut()}>Logout</button>
                )}
                {!session && <button className="border-gradient" onClick={() => signIn("discord")}>Login</button>}
            </nav>
        </>
    )
}
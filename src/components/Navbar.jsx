"use client"
import { signOut, useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import React from "react"

const Navbar = () => {
    const pathName = usePathname()
    const router = useRouter()
    const session = useSession()
    // console.log(session)
    const links = [
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Posts",
            path: "/posts",
        },
        {
            title: "Meals",
            path: "/meals",
        },
        {
            title: "Gallery",
            path: "/gallery",
        },
        {
            title: "Dashboard",
            path: "/dashboard",
        },
    ]
    const handler = () => {
        router.push("/api/auth/signin")
    }

    // if (pathName.includes("dashboard")) {
    //     return <div className="bg-green-400 p-6">Dashboard Layout</div>
    // }

    return (
        <div>
            <nav className="bg-red-500 px-6 py-4 flex justify-between items-center">
                <h6 className=" text-3xl">
                    Next <span className="text-cyan-500">Hero</span>
                </h6>
                <ul className="flex justify-between items-center space-x-4 text-white">
                    {links.map((link) => (
                        <Link className={`${pathName === link.path && "text-green-500"}`} key={link.title} href={link.path}>
                            {link.title}
                        </Link>
                    ))}
                </ul>
                <div className="flex gap-2 items-center flex-row-reverse">
                    {session.status !== "authenticated" ? (
                        <>
                            <button onClick={handler} className="bg-white text-cyan-400 p-3 ">
                                Login
                            </button>
                            <Link href={"/api/auth/signup"} className="bg-white text-cyan-400 p-3 ">
                                Sign Up
                            </Link>
                        </>
                    ) : (
                        <>
                            <button onClick={() => signOut()} className="bg-white text-cyan-400 p-3 ">
                                Logout
                            </button>

                            <div>
                                <h6 className="flex flex-row-reverse items-center justify-center gap-3">
                                    <Image
                                        src={session?.data?.user.image}
                                        height={40}
                                        width={40}
                                        alt={session?.data?.user.name}
                                        className="rounded-full"
                                    />
                                    <div className="text-white">
                                        {session?.data?.user.name}
                                        <br />
                                        {session?.data?.user.type}
                                    </div>
                                </h6>
                            </div>
                        </>
                    )}
                </div>
            </nav>
        </div>
    )
}

export default Navbar

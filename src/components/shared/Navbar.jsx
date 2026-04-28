"use client";

import avater from "@/assets/user.png";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";

const Navbar = () => {
	const { data: session, isPending } = authClient.useSession();

	const user = session?.user;

	return (
		<div className="container mx-auto py-5 flex justify-between items-center flex-col-reverse gap-4 lg:flex-row">
			<div className="flex-1"></div>
			<ul className="flex justify-center items-center gap-3 text-zinc-500">
				<li>
					<NavLink href={"/"}>Home</NavLink>
				</li>
				<li>
					<NavLink href={"/about-us"}>About</NavLink>
				</li>
				<li>
					<NavLink href={"/career"}>Career</NavLink>
				</li>
			</ul>

			{isPending ? (
				<div className="flex-1 flex justify-end items-center gap-2">
					<span className="loading loading-spinner loading-xl"></span>
				</div>
			) : user ? (
				<div className="flex-1 flex justify-end items-center gap-2">
					<h2>Hey, {user?.name}</h2>
					<Image
						// src={user?.image ? user.image : avater}
						src={user.image || avater}
						alt="avater"
						width={40}
						height={40}
						className="rounded-full h-10 w-10 object-cover"
					></Image>
					<button
						onClick={async () => await authClient.signOut()}
						className="btn w-40 bg-gray-700 text-white shadow-none border-none"
					>
						Logout
					</button>
				</div>
			) : (
				<div className="flex-1 flex justify-end items-center gap-2">
					<Link
						className="btn w-40 bg-gray-700 text-white shadow-none border-none"
						href={"/login"}
					>
						Login
					</Link>
				</div>
			)}
		</div>
	);
};

export default Navbar;

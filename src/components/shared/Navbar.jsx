import avater from "@/assets/user.png";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";

const Navbar = () => {
	return (
		<div className="container mx-auto py-5 flex justify-between items-center flex-col-reverse gap-4 md:gap-0 md:flex-row">
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

			<div className="flex-1 flex justify-end items-center gap-2">
				<Image src={avater} alt="avater"></Image>
				<Link
					className="btn w-40 bg-gray-700 text-white shadow-none border-none"
					href={"/login"}
				>
					Login
				</Link>
			</div>
		</div>
	);
};

export default Navbar;

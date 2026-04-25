import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSideLogin = () => {
	return (
		<div className="space-y-5 px-3 md:px-0">
			<p className="text-lg font-semibold text-zinc-700 text-center lg:text-left">
				Login With
			</p>

			<div className="flex flex-col gap-2">
				<button className="btn text-blue-500 border-blue-500 shadow-none">
					<FaGoogle className="text-xl" /> Login With Google
				</button>

				<button className="btn border-black shadow-none">
					<FaGithub className="text-xl" /> Login With Github
				</button>
			</div>
		</div>
	);
};

export default RightSideLogin;

import Link from "next/link";

const NotFoundPage = () => {
	return (
		<div className="max-w-7xl mx-auto h-screen flex justify-center items-center">
			<div className={`text-center space-y-3`}>
				<h1 className="text-5xl text-amber-700 font-bold">404</h1>
				<p className="text-xl text-amber-950 font-medium px-2 md:px-0">
					Looks like this page took a vacation
				</p>

				<Link
					className="btn shadow-none bg-gray-700 text-white hover:bg-gray-600"
					href={"/"}
				>
					Back To Home
				</Link>
			</div>
		</div>
	);
};

export default NotFoundPage;

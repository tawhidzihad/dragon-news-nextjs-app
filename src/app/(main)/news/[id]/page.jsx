import { getNewsDetailsById } from "@/lib/getData";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { GoArrowLeft } from "react-icons/go";

export const generateMetadata = async ({ params }) => {
	const { id } = await params;
	const { title, details } = await getNewsDetailsById(id);

	return {
		title: title,
		description: details,
	};
};

const NewsDetailsPage = async ({ params }) => {
	const { id } = await params;

	const { image_url, details, title, category_id } =
		await getNewsDetailsById(id);

	return (
		<div className="container mx-auto pb-6 space-y-5">
			<h1 className="text-lg font-semibold text-zinc-700 text-center lg:text-left">
				Dragon News
			</h1>

			<div className="grid grid-cols-3 gap-5">
				<div className="border rounded-lg border-zinc-300 p-5 col-span-2">
					<div className="space-y-6">
						<Image
							src={image_url}
							alt={title}
							width={1500}
							height={800}
						></Image>

						<h2 className="text-4xl/13 font-bold text-zinc-800">
							{title}
						</h2>

						<p className="text-zinc-500 font-medium">{details}</p>

						<Link href={`/category/${category_id}`}>
							<button className="btn bg-rose-600 text-white">
								<GoArrowLeft className="text-xl"></GoArrowLeft> All news
								in this category
							</button>
						</Link>
					</div>
				</div>

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
			</div>
		</div>
	);
};

export default NewsDetailsPage;

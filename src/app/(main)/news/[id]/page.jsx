import { getNewsDetailsById } from "@/lib/getData";
import Image from "next/image";
import Link from "next/link";
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

			<div className="border rounded-lg border-zinc-300 p-5 space-y-7">
				<h2 className="text-4xl/13 font-bold text-zinc-800">{title}</h2>
				<div className="flex flex-col lg:flex-row gap-5">
					<Image
						src={image_url}
						alt={title}
						width={800}
						height={800}
					></Image>

					<p className="text-zinc-500 text-xl/10 font-medium">{details}</p>
				</div>
				<Link href={`/category/${category_id}`}>
					<button className="btn bg-rose-600 text-white">
						<GoArrowLeft className="text-xl"></GoArrowLeft> All news in
						this category
					</button>
				</Link>
			</div>
		</div>
	);
};

export default NewsDetailsPage;

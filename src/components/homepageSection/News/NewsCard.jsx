import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { FiBookmark } from "react-icons/fi";
import { IoEyeSharp, IoShareSocialOutline } from "react-icons/io5";

const NewsCard = ({ news }) => {
	const { _id, author, details, image_url, title, total_view, rating } = news;

	return (
		<div className="card w-full shadow-none px-2 md:px-0">
			<div className="flex justify-between px-3 py-2 bg-zinc-100 rounded-t-lg">
				<div className="flex gap-3">
					<div>
						<Image
							src={author?.img}
							alt={"Author Image"}
							width={40}
							height={40}
							className="rounded-full"
						></Image>
					</div>

					<div className="flex flex-col justify-between">
						<span>{author?.name}</span>
						<span>{author?.published_date}</span>
					</div>
				</div>

				<div className="flex justify-center items-center gap-3">
					<FiBookmark className="text-3xl"></FiBookmark>
					<IoShareSocialOutline className="text-3xl"></IoShareSocialOutline>
				</div>
			</div>

			<div className="px-5 pt-5 border border-zinc-200 rounded-b-lg space-y-3">
				<h2 className="text-3xl font-bold text-zinc-800">{title}</h2>
				<figure>
					<Image src={image_url} alt={title} width={800} height={400} />
				</figure>

				<div>
					<p className="text-zinc-500 font-medium line-clamp-3">
						{details}
					</p>
					<Link
						href={`/news/${_id}`}
						className="text-orange-500 font-medium"
					>
						Read More
					</Link>
				</div>

				<div className="border-t border-zinc-200 py-4 flex justify-between items-center">
					<div className="flex justify-center items-center gap-2">
						<div className="flex justify-center items-center gap-1.5">
							<FaStar className="text-xl text-orange-400 "></FaStar>
							<FaStar className="text-xl text-orange-400 "></FaStar>
							<FaStar className="text-xl text-orange-400 "></FaStar>
							<FaStar className="text-xl text-orange-400 "></FaStar>
							<FaStar className="text-xl text-orange-400 "></FaStar>
						</div>
						<p className="text-xl">{rating?.number}</p>
					</div>
					<div className="flex justify-center items-center gap-3">
						<IoEyeSharp className="text-2xl"></IoEyeSharp>
						<span>{total_view}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewsCard;

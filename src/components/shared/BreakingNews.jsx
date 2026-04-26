import { getNewsByCategory } from "@/lib/getData";
import Marquee from "react-fast-marquee";

/* const breakingNews = [
	{
		id: 1,
		title: "Major Earthquake Hits Southeast Asia",
	},
	{
		id: 2,
		title: "Stock Market Sees Sudden Drop Amid Global Tension",
	},
	{
		id: 3,
		title: "New AI Model Breaks Performance Records",
	},
	{
		id: 4,
		title: "National Cricket Team Wins Thriller Match",
	},
	{
		id: 5,
		title: "Heavy Rainfall Causes Flooding in Several Areas",
	},
	{
		id: 6,
		title: "Government Announces New Education Policy",
	},
]; */

const BreakingNews = async () => {

	const breakingNews = await getNewsByCategory("01");

	return (
		<div className="flex justify-between gap-2 items-center bg-zinc-200 p-3 container mx-auto">
			<button className="btn btn-xs sm:btn-sm md:btn-md bg-rose-600 text-white shadow-none rounded-none border-none">
				Latest News
			</button>
			<Marquee pauseOnHover={true}>
				{breakingNews.map((news, ind) => (
					<span key={ind} className="mr-10">
						{news.title}
					</span>
				))}
			</Marquee>
		</div>
	);
};

export default BreakingNews;

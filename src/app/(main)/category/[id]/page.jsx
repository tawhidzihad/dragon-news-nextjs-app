import LeftSideCategory from "@/components/homepageSection/News/LeftSideCategory";
import NewsCard from "@/components/homepageSection/News/NewsCard";
import RightSideLogin from "@/components/homepageSection/News/RightSideLogin";
import { getCategories, getNewsByCategory } from "@/lib/getData";

const CategoryByNewsPage = async ({ params }) => {
	const { id } = await params;
	const categories = await getCategories();
	const newsById = await getNewsByCategory(id);

	return (
		<div className="grid grid-cols-1 lg:grid-cols-4 container mx-auto py-7 gap-0 lg:gap-4">
			<div className="col-span-1 space-y-5">
				<LeftSideCategory
					categories={categories}
					activeId={id}
				></LeftSideCategory>
			</div>

			<div className="col-span-2 space-y-5 pb-5">
				<p className="text-lg font-semibold text-zinc-700 text-center lg:text-left">
					Dragon News Home
				</p>

				{newsById.length > 0 ? (
					<div className="flex flex-col gap-4">
						{newsById.map((news, ind) => (
							<NewsCard key={ind} news={news}></NewsCard>
						))}
					</div>
				) : (
					<h1 className="text-center">No News Found</h1>
				)}
			</div>

			<div className="col-span-1">
				<RightSideLogin></RightSideLogin>
			</div>
		</div>
	);
};

export default CategoryByNewsPage;

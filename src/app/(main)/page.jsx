import LeftSideCategory from "@/components/homepageSection/News/LeftSideCategory";
import RightSideLogin from "@/components/homepageSection/News/RightSideLogin";

const getCategories = async () => {
	const res = await fetch(
		"https://openapi.programming-hero.com/api/news/categories",
	);
	const categoriesData = await res.json();
	return categoriesData.data.news_category;
};

export default async function Home() {
	const categories = await getCategories();

	return (
		<div className="grid grid-cols-1 lg:grid-cols-4 container mx-auto py-7 gap-4">

			<div className="col-span-1 space-y-5">
				<LeftSideCategory categories={categories} activeId={null}></LeftSideCategory>
			</div>

			<div className="col-span-2 text-3xl bg-green-200">
				Dragon News Home
			</div>

			<div className="col-span-1">
				<RightSideLogin></RightSideLogin>
			</div>
		</div>
	);
}

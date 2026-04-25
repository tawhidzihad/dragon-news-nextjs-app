/* import LeftSideCategory from "@/components/homepageSection/News/LeftSideCategory";
import RightSideLogin from "@/components/homepageSection/News/RightSideLogin";

const getCategories = async () => {
	const res = await fetch(
		"https://openapi.programming-hero.com/api/news/categories",
	);
	const categoriesData = await res.json();
	return categoriesData.data.news_category;
};

const getNewsByCategory = async (categoryId) => {
	const res = await fetch(
		`https://openapi.programming-hero.com/api/news/category/${categoryId}`,
	);
	const categoriesData = await res.json();
	return categoriesData.data;
}; */

import { redirect } from "next/navigation";

const defaultCategory = "08";

export default async function Home() {
	/* const categories = await getCategories();
	const newsById = await getNewsByCategory("08");
	return (
		<div className="grid grid-cols-1 lg:grid-cols-4 container mx-auto py-7 gap-0 lg:gap-4">
			<div className="col-span-1 space-y-5">
				<LeftSideCategory
					categories={categories}
					activeId={"08"}
				></LeftSideCategory>
			</div>

			<div className="col-span-2 text-3xl bg-green-200 space-y-5">
				<p>All News</p>
				<div className="space-y-2">
					{newsById.map((news, index) => (
						<div key={index} className="border p-5 rounded">
							{news.title}
						</div>
					))}
				</div>
			</div>

			<div className="col-span-1">
				<RightSideLogin></RightSideLogin>
			</div>
		</div>
	); */

	redirect(`/category/${defaultCategory}`);
}

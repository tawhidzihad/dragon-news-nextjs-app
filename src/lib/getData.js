export const getCategories = async () => {
	const res = await fetch(
		"https://openapi.programming-hero.com/api/news/categories",
	);
	const categoriesData = await res.json();
	return categoriesData.data.news_category;
};

export const getNewsByCategory = async (categoryId) => {
	const res = await fetch(
		`https://openapi.programming-hero.com/api/news/category/${categoryId}`,
	);
	const categoriesData = await res.json();
	return categoriesData.data;
};

export const getNewsDetailsById = async (news_id) => {
	const res = await fetch(
		`https://openapi.programming-hero.com/api/news/${news_id}`,
	);
	const newsDetailsById = await res.json();
	return newsDetailsById.data?.[0];
};

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

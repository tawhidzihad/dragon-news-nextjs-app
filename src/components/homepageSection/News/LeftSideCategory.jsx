import Link from "next/link";

const LeftSideCategory = ({ categories, activeId }) => {
	return (
		<>
			<p className="text-lg font-semibold text-zinc-700 text-center lg:text-left">
				All Caterogy
			</p>

			<div className="flex justify-center items-center">
				<ul className="flex flex-col gap-3">
					{categories.map((category) => (
						<li key={category.category_id}>
							<Link
								href={`/category/${category.category_id}`}
								className={`${activeId === category.category_id && "bg-slate-200"} text-lg font-medium text-slate-700 px-20 py-2 rounded block`}
							>
								{category.category_name}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default LeftSideCategory;

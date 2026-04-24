const jobs = [
	{
		title: "News Reporter",
		location: "Remote",
		type: "Full-time",
	},
	{
		title: "Content Writer",
		location: "Dhaka",
		type: "Part-time",
	},
	{
		title: "Frontend Developer",
		location: "Remote",
		type: "Full-time",
	},
];

const CareerPage = () => {
	return (
		<div className="bg-gray-50 text-gray-800">
			<section className="bg-zinc-300 text-black py-16 text-center">
				<h1 className="text-4xl font-bold">Careers at Dragon News</h1>
				<p className="text-black mt-2">
					Join our team and build the future of news.
				</p>
			</section>

			<section className="max-w-5xl mx-auto py-12 px-6">
				<h2 className="text-2xl font-semibold mb-6 text-center">
					Open Positions
				</h2>

				<div className="grid md:grid-cols-2 gap-6">
					{jobs.map((job, index) => (
						<div key={index} className="bg-white p-6 rounded-xl shadow">
							<h3 className="text-lg font-semibold">{job.title}</h3>
							<p className="text-gray-500 text-sm">
								{job.location} • {job.type}
							</p>
							<button className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
								Apply Now
							</button>
						</div>
					))}
				</div>
			</section>

			<section className="bg-white text-center py-10 px-6">
				<h3 className="text-xl font-semibold mb-2">
					Don’t see a role for you?
				</h3>
				<p className="text-gray-600 mb-4">
					Send us your CV and we’ll get in touch.
				</p>
				<button className="bg-black text-white px-6 py-2 rounded">
					Contact Us
				</button>
			</section>
		</div>
	);
};

export default CareerPage;

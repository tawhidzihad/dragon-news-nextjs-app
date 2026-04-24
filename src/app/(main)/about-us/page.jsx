import DemoCard from "@/assets/demo-card-thumbnail.png";
import Image from "next/image";

const AboutUsPage = () => {
	return (
		<div className="bg-gray-50 text-gray-800">
			<section className="bg-zinc-300 text-black py-16 text-center">
				<h1 className="text-4xl font-bold">About Dragon News</h1>
				<p className="text-black mt-2">
					Fast, reliable, and accurate news.
				</p>
			</section>

			<section className="max-w-5xl mx-auto py-12 px-6 grid md:grid-cols-2 gap-8">
				<div>
					<h2 className="text-2xl font-semibold mb-3">Who We Are</h2>
					<p className="text-gray-600">
						Dragon News is a modern digital news platform delivering
						trusted and up-to-date information.
					</p>
				</div>

				<Image src={DemoCard} alt="demo-card-thumbnail"></Image>
			</section>

			<section className="bg-white py-10 text-center px-6">
				<h3 className="text-xl font-semibold mb-2">Our Mission</h3>
				<p className="text-gray-600">
					To provide accurate news and keep people informed.
				</p>
			</section>
		</div>
	);
};

export default AboutUsPage;

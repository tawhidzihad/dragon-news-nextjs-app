import logo from "@/assets/logo.png";
import { format } from "date-fns";
import Image from "next/image";

const Header = () => {
	return (
		<div className="text-center py-7 space-y-1 px-4 md:px-0">
			<Image
				src={logo}
				alt="brand logo"
				width={400}
				height={200}
				className="mx-auto"
			></Image>
			<p className="text-gray-500">Journalism Without Fear or Favour</p>

			<p className="text-gray-500">
				<span className="font-bold">{format(new Date(), "EEEE,")}</span>
				{format(new Date(), " MMM dd, yyyy")}
			</p>
		</div>
	);
};

export default Header;

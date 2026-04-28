import logo from "@/assets/logo.png";
import { format } from "date-fns";
import { toZonedTime } from "date-fns-tz";
import Image from "next/image";

const Header = () => {
	const timeZone = "Asia/Dhaka";
	const now = new Date();
	const zonedDate = toZonedTime(now, timeZone);

	return (
		<div className="text-center py-7 space-y-1 px-4 md:px-0">
			<Image
				src={logo}
				alt="brand logo"
				className="mx-auto"
				loading="eager"
			></Image>
			<p className="text-gray-500">Journalism Without Fear or Favour</p>

			<p className="text-gray-500">
				<span className="font-bold">{format(zonedDate, "EEEE,")}</span>
				{format(zonedDate, " MMM dd, yyyy")}
			</p>
		</div>
	);
};

export default Header;

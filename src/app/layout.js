import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
	variable: "--poppins-font",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

// export const montserrat = Montserrat({
// 	variable: "--montserrat-font",
// 	subsets: ["latin"],
// 	weight: ["400", "500", "600", "700"],
// });

export const metadata = {
	title: "Dragon News",
	description: "Best news in bangladesh",
};

export default function RootLayout({ children }) {
	return (
		<html data-theme="light" lang="en" className={`h-full antialiased`}>
			<body className={`${poppins.className} min-h-full flex flex-col`}>
				{/* <Header></Header>
				<Navbar></Navbar> */}
				{children}
			</body>
		</html>
	);
}

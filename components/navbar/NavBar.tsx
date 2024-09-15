import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import ActiveLink from "../active-link/ActiveLink";

const options = [
	{ path: "/pricing", text: "Pricing" },
	{ path: "/about", text: "About" },
	{ path: "/contact", text: "Contact" },
];

export function NavBar() {
	return (
		<nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
			<Link href={"/"}>
				<HomeIcon className="mr-2" />
				<span>home</span>
			</Link>
			<div className="flex flex-1"></div>
			{options.map((option) => (
				<ActiveLink key={option.path} to={option.path} text={option.text} />
			))}
			{/* <Link className="mr-2" href="/pricing/">
				pricing
			</Link>
			<Link className="mr-2" href="/contact">
				contact
			</Link>
			<Link className="mr-2" href="/about">
				about
			</Link> */}
		</nav>
	);
}

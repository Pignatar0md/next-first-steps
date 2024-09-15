import { NavBar } from "@/components";

export default function GeneralLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<NavBar />
			<main>
				<h1>Hello rootlayout about</h1>
				{children}
			</main>
		</>
	);
}

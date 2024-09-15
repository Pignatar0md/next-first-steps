"use client";

import React from "react";
import Link from "next/link";
import style from "./ActiveLink.module.css";
import { usePathname } from "next/navigation";

export default function ActiveLink({ to, text }: { to: string; text: string }) {
	const isActive = usePathname();
	const customStyle = isActive === to ? style["active-link"] : "";
	return (
		<Link className={`${style.link} ${customStyle}`} href={to}>
			{text}
		</Link>
	);
}

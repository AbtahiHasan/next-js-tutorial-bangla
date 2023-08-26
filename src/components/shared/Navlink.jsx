"use client"
import Link from "next/link";
import { usePathname } from "next/navigation"

const Navlink = ({ href, text, activeClasses, className }) => {
    const path = usePathname()
    const isActive = path === href
    return (
        <Link className={`${isActive ? activeClasses : ""} ${className}`} href={href}>{text}</Link>
    );
};

export default Navlink;
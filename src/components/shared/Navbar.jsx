import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <h3>Logo</h3>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">about</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
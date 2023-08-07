import Link from "next/link";
import Search from "../Search";

const Navbar = () => {
    return (
        <nav>
            <h3>Logo</h3>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">about</Link></li>
            </ul>
            <Search/>
        </nav>
    );
};

export default Navbar;
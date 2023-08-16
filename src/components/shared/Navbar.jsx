import Navlink from "./Navlink";


const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Navlink className="uppercase" activeClasses="text-red-600" text="home" href="/" /></li>
                <li><Navlink className="uppercase" activeClasses="text-red-600" text="About" href="/about" /></li>
            </ul>
        </nav>
    );
};

export default Navbar;
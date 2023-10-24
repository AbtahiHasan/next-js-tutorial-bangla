import { FiSearch } from "react-icons/fi";



const SearchBar = () => {
    return (
        <section className="relative ">
            <div
                className="banner-section bg-indigo-900 bg-blend-overlay bg-cover bg-center h-[35vh] flex justify-center items-center"

            >                <form className="my-10 bg-dark w-[95%] md:w-[60%] relative mx-auto h-[40px] border rounded-full ">
                    <input type="text" placeholder="search image" className="w-full text-white h-full border-none outline-none bg-transparent md:px-12" />
                    <button className="absolute left-5 top-[10px] " type="submit"><FiSearch className="text-white" /></button>
                </form>
            </div>

        </section>
    );
};

export default SearchBar;
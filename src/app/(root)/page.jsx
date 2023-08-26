import Carosel from "@/components/Carosel";
import { roboto } from "../layout";
import Image from "next/image";
import cifyImage from "/public/image.jpeg"

export const metadata = {
    "title": "abtahi Hasan",
    "description": "hello",
    "openGraph": {
        "title": "abtahi hasan",
        "images": [],
        "description": 'Acme is a...',
    }
}

const HomePage = () => {
    return (
        <div>
            <h2 className={roboto.className}>Heading</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ea nostrum aut sit nobis voluptatem, corporis itaque accusantium quae est.</p>
            <div className="w-full h-[500px] relative flex ">
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis cum id eveniet, assumenda dolorem non minima quo quos nulla labore aliquid tenetur, tempore, quia reiciendis ullam perspiciatis praesentium quasi dolorum!
                </div>
                <div>
                    <Image fill={true} src="https://images.pexels.com/photos/1907057/pexels-photo-1907057.jpeg" />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
import Link from 'next/link'
import { HiHome } from "react-icons/hi";
import errorImg from "../../public/404.png"
import Image from 'next/image';

export const metadata = {
    title: "404 - example.com"
}

const NotFound = () => {

    return (
        <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                <Image height={500} width={500} src={errorImg} alt="error page" />
                <div className='max-w-md text-center'>

                    <Link href="/" className=" text-white w-[200px] p-2 text-[21px]   mt-[10px]" >
                        <button className='bg-[#00abe4] mx-auto p-2 px-5 flex items-center rounded-full gap-3'> <HiHome /> <span>Back to homepage</span></button>
                    </Link>
                </div>
            </div>
        </section>
    )
}




export default NotFound
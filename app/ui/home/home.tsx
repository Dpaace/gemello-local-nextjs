import Image from 'next/image';
import Logo from "@/app/ui/logo";
import Login from "../../login/page";


export default function Home() {
    return (
        <div className="flex flex-col h-dvh w-screen items-center justify-center bg-white">
            <div className="flex w-full h-20 bg-black p-3 text-white items-center">
                <Logo />
                <h1 className="text-sm ml-10 md:text-3xl md:ml-auto md:mr-20"> Integration with Headless CMS Strapi</h1>
            </div>
            <div className="flex h-full w-full p-20">
                <div className="flex grow flex-col gap-4 md:flex-row">
                    <div className="flex flex-col items-center justify-center rounded-lg bg-gray-100 px-6 py-10 md:w-2/5 md:px-20">
                        <Login />
                    </div>
                    <div className="flex flex-col items-start justify-center p-6 md:w-3/5 md:px-28 md:py-12">
                        <h1 className='font-bold text-3xl leading-10'>
                            Gemello Local
                        </h1>
                        <br />
                        <Image
                            src="/dgtwin.jpg"
                            width={1000}
                            height={760}
                            className='hidden md:block rounded-lg'
                            alt="Screenshots of the dashboard project showing desktop version"
                        />
                    </div>
                </div>



            </div>
        </div>
    );
}
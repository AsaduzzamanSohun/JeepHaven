import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import jeepLogo from '../assets/jeep-min.png';
import 'animate.css';



const Navbar = () => {

    const [open, isOpen] = useState(false);
    const [active, setActive] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > 200) {
                setActive(true)
            }
            else {
                setActive(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])



    const link = <>
        <li>
            <Link>Home</Link>
        </li>
        <li>
            <Link>Cars</Link>
        </li>
        <li>
            <Link>About Us</Link>
        </li>
        <li>
            <Link>Career</Link>
        </li>

    </>


    return (
        <div className={` ${active ? "bg-white z-50 fixed w-full duration-500 drop-shadow-md animate__animated  animate__fadeInDown" : 'bg-white duration-1000 sticky z-50 '}`}>
            <div className={`p-6 bg-white z-50 flex justify-between items-center `}>
                <Link to='/'>
                    <div className="flex items-center gap-1">
                        <img className="w-8" src={jeepLogo} alt="" />
                        <h1 className="font-extrabold text-2xl">Jeep<span className="text-light-blue-600">Haven</span></h1>
                    </div>
                </Link>
                <div className={`hidden lg:inline-block ${active ? 'flex justify-end duration-700' : ''}`}>
                    <ul className={`flex gap-8 `}>
                        {link}
                    </ul>
                </div>
                <div className="hidden lg:inline-block space-x-2">

                    <button className="rounded-full shadow-md text-sm hover:shadow-light-blue-500/40 px-4 py-2 duration-500 hover:drop-shadow-lg hover:text-light-blue-500/95 hover:bg-white">
                        Sign in
                    </button>

                    <button
                        className="bg-light-blue-500 shadow-md shadow-light-blue-500/50 px-4 py-2 rounded-full hover:shadow-none duration-500  hover:bg-light-blue-500/80 text-white text-sm">
                        Sign up
                    </button>




                </div>

                <div className="lg:hidden " onClick={() => isOpen(!open)}>
                    {
                        open ?
                            <TfiClose /> : <CiMenuFries />
                    }

                    <div className={`absolute w-full -z-10 bg-white right-0 flex 
                        ${open ? 'top-[72px] duration-[400ms] ' : '-top-[800px] duration-[400ms]'}`}>


                        <div className="flex flex-col px-2 pb-4">
                            <ul className='flex-col gap-3'>
                                {link}
                            </ul>
                            <div className="my-2">
                                <button className="rounded-full shadow-md bg-light-blue-50 text-sm shadow-light-blue-500/40 px-4 py-2 duration-500 hover:drop-shadow-lg hover:text-light-blue-500/95 hover:shadow-none hover:bg-white">
                                    Sign in
                                </button>


                            </div>
                        </div>

                    </div>


                </div>




            </div>

        </div>
    );
};

export default Navbar;
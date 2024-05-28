import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import jeepLogo from '../assets/logo/jeep-6.png';
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
            <NavLink to='/' className={({ isActive }) => isActive ? 'text-light-blue-accent-200' : ''}>Home</NavLink>
        </li>
        <li>
            <NavLink to='/vehicles' className={({ isActive }) => isActive ? 'text-light-blue-accent-200' : ''}>Vehicles</NavLink>
        </li>
        <li>
            <NavLink to='/shipping-tools' className={({ isActive }) => isActive ? 'text-light-blue-accent-200' : ''}>Shipping Tools</NavLink>
        </li>
        <li>
            <NavLink to='/electrification' className={({ isActive }) => isActive ? 'text-light-blue-accent-200' : ''}>Electrification</NavLink>
        </li>
        <li>
            <NavLink to='/jeep-life' className={({ isActive }) => isActive ? 'text-light-blue-accent-200' : ''}>Jeep® Life</NavLink>
        </li>
    </>


    return (
        <div className={` text-white ${active ? "bg-black z-50 fixed w-full duration-500 drop-shadow-md animate__animated  animate__fadeInDown" : 'bg-black duration-1000 sticky z-50 '}`}>
            <div className={`p-6 bg-black z-50 flex justify-between items-center `}>
                <Link to='/'>
                    <div className="flex items-center gap-1">
                        <img className="w-8" src={jeepLogo} alt="" />
                        <h1 className="font-extrabold text-2xl">Jeep<span className="text-light-blue-600">Haven</span></h1>
                    </div>
                </Link>
                <div className={`hidden lg:inline-block ${active ? 'flex justify-end duration-700' : ''}`}>
                    <ul className={`flex gap-8 text-xs font-semibold`}>
                        {link}
                    </ul>
                </div>
                <div className="hidden lg:inline-block space-x-2">

                    <button className="rounded-full shadow-md text-sm hover:shadow-light-blue-500/40 px-4 py-2 duration-500 hover:drop-shadow-lg hover:text-light-blue-accent-400 font-bold hover:bg-white">
                        Sign in
                    </button>

                    <button
                        className="bg-light-blue-500 font-bold shadow-md shadow-light-blue-500/50 px-4 py-2 rounded-full hover:shadow-none duration-500  hover:bg-light-blue-500/80 text-white text-sm">
                        Sign up
                    </button>
                </div>

                <div className="lg:hidden" onClick={() => isOpen(!open)}>
                    {
                        open ?
                            <TfiClose /> : <CiMenuFries />
                    }

                    <div className={`absolute w-full -z-10 bg-gray-700 right-0 flex 
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
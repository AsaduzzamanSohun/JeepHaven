import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";


const Navbar = () => {

    const [open, isOpen] = useState(false);
    const [active, setActive] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > 100) {
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
        <div className={` ${active ? " bg-blue-gray-300 z-50 fixed w-full duration-1000" : 'bg-white duration-1000 sticky '}`}>
            <nav className={`p-6 flex justify-between ${active ? " bg-blue-gray-300 z-50 fixed w-full duration-1000" : 'bg-white duration-1000  z-50'}`}>
                <div>
                    <h1>JeepHaven</h1>
                </div>
                <div className={`hidden lg:inline-block ${active ? 'flex justify-end duration-700' : ''}`}>
                    <ul className={`flex gap-8 `}>
                        {link}
                    </ul>
                </div>
                <div className="hidden lg:inline-block">
                    <button>Login</button>
                </div>

                <div className="lg:hidden " onClick={() => isOpen(!open)}>
                    {
                        open ?
                            <TfiClose /> : <CiMenuFries />
                    }



                </div>


            </nav>
            <div className={`absolute w-full -z-10 bg-blue-gray-300 right-0 flex 
                        ${open ? 'top-[72px] duration-[1000ms] ' : '-top-[800px] duration-[1000ms] '}`}>

                <ul className='flex-col gap-3'> :
                    {link}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
import React, { useState } from 'react'; // Import useState
import { Link } from "react-scroll";
import Button from "../layouts/Button";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";

const Navbar = () => {
    const [menu, setMenu] = useState(false); // Initialize state

    const handleChange = () => {
        setMenu(!menu);
    }

    const closeMenu = () => {
        setMenu(false);
    }

    return (
        <header className="fixed w-full z-10 bg-slate-100 py-4 shadow-[rgba(0,_0,_0,_0,0.24)-0px_3px_8px]">
            {/* Desktop navigation section */}
            <nav className="container flex flex-row justify-between items-center">
                <div>
                    <Link to="home" spy={true} smooth={true} duration={500}>
                        <h1 className="font-bold text-2xl">CheesyBites.</h1>
                    </Link>
                </div>
                <nav className="flex gap-10 font-semibold text-xl">
                    <Link to="home" spy={true} smooth={true} duration={500} className="cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out">
                        Home
                    </Link>
                    <Link to="speciality" spy={true} smooth={true} duration={500} className="cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out">
                        Speciality
                    </Link>
                    <Link to="about" spy={true} smooth={true} duration={500} className="cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out">
                        About
                    </Link>
                    <Link to="menu" spy={true} smooth={true} duration={500} className="cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out">
                        Menu
                    </Link>
                    <Link to="review" spy={true} smooth={true} duration={500} className="cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out">
                        Review
                    </Link>
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <Button title="Sign Up" />
                </div>

                <div className="md:hidden flex items-center" onClick={handleChange}> 
                    {menu ? (
                        <AiOutlineClose size={25} />
                    ) : (
                        <AiOutlineMenuUnfold size={25} />
                    )}
                </div>
            </nav>

            {/* Mobile navigation section */}
            <div className={`${menu ? "translate-x-0" : "-translate-x-full"} md:hidden flex flex-col absolute bg-white left-0 top-16 font-medium text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>
                <Link to="home" spy={true} smooth={true} duration={500} className="cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out" onClick={closeMenu}>
                    Home
                </Link>
                <Link to="speciality" spy={true} smooth={true} duration={500} className="cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out" onClick={closeMenu}>
                    Speciality
                </Link>
                <Link to="about" spy={true} smooth={true} duration={500} className="cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out" onClick={closeMenu}>
                    About
                </Link>
                <Link to="menu" spy={true} smooth={true} duration={500} className="cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out" onClick={closeMenu}>
                    Menu
                </Link>
                <Link to="review" spy={true} smooth={true} duration={500} className="cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out" onClick={closeMenu}>
                    Review
                </Link>

                <div className="flex justify-center items-center gap-4">
                    <Button title="Sign Up" />
                </div>
            </div>
        </header>
    );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

function Header({ isDarkMode, setIsDarkMode }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

   
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup event listener
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Close mobile menu when a link is clicked
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            {/* ================= DESKTOP HEADER ================= */}
            <header
                className={`
                    top-0 sticky z-50
                    hidden min-[741px]:flex
                    justify-between items-center
                    px-12 py-4
                    transition-shadow duration-300
                    ${isDarkMode
                        ? "bg-gray-900 text-white"
                        : "bg-white text-gray-900"
                    }
                    ${isScrolled
                        ? "shadow-[0_4px_15px_rgba(0,0,0,0.12)]"
                        : "shadow-none"
                    }
                `}
            >

                {/* Logo */}
                <div>
                    <h1 className="text-xl font-bold">
                        oms<span className="text-blue-500">tech</span>
                    </h1>
                </div>

                {/* Navigation */}
                <nav>
                    <ul className="flex gap-4 items-center text-base font-semibold">
                        <li>
                            <a
                                href="/"
                                className="hover:text-blue-500 transition-colors"
                            >
                                Home
                            </a>
                        </li>

                        <li>
                            <a
                                href="/about"
                                className="hover:text-blue-500 transition-colors"
                            >
                                About
                            </a>
                        </li>

                        <li>
                            <a
                                href="/contact"
                                className="hover:text-blue-500 transition-colors"
                            >
                                Contact
                            </a>
                        </li>

                        <li>
                            <a
                                href="/services"
                                className="hover:text-blue-500 transition-colors"
                            >
                                Services
                            </a>
                        </li>

                        <li>
                            <a
                                href="/portfolio"
                                className="hover:text-blue-500 transition-colors"
                            >
                                Portfolio
                            </a>
                        </li>

                        <li>
                            <a
                                href="/blog"
                                className="hover:text-blue-500 transition-colors"
                            >
                                Blog
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Right Side */}
                <div className="flex gap-4 items-center">

                    {/* Dark Mode Button */}
                    <button
                        type="button"
                        aria-label="Toggle dark mode"
                        className="cursor-pointer rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-800 transition"
                        onClick={() => setIsDarkMode(!isDarkMode)}
                    >
                        {isDarkMode ? (
                            <Sun size={20} />
                        ) : (
                            <Moon size={20} />
                        )}
                    </button>

                    {/* Hire Me */}
                    <button
                        type="button"
                        className="bg-blue-800 text-white px-6 py-2 rounded-sm
                        hover:bg-blue-600 transition-colors"
                    >
                        Hire me
                    </button>

                </div>
            </header>


            {/* ================= MOBILE HEADER ================= */}
            <header
                className={`
                    top-0 sticky z-50
                    flex min-[741px]:hidden
                    justify-between items-center
                    px-4 py-3
                    transition-shadow duration-300
                    ${isDarkMode
                        ? "bg-gray-900 text-white"
                        : "bg-white text-gray-900"
                    }
                    ${isScrolled
                        ? "shadow-[0_4px_15px_rgba(0,0,0,0.12)]"
                        : "shadow-none"
                    }
                `}
            >

                {/* Logo */}
                <div>
                    <h1 className="text-xl font-bold">
                        oms<span className="text-blue-500">tech</span>
                    </h1>
                </div>

                {/* Mobile Buttons */}
                <div className="flex gap-2 items-center">

                    {/* Dark Mode */}
                    <button
                        type="button"
                        aria-label="Toggle dark mode"
                        className="cursor-pointer rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-800 transition"
                        onClick={() => setIsDarkMode(!isDarkMode)}
                    >
                        {isDarkMode ? (
                            <Sun size={20} />
                        ) : (
                            <Moon size={20} />
                        )}
                    </button>

                    {/* Menu Button */}
                    <button
                        type="button"
                        aria-label="Toggle menu"
                        className="cursor-pointer rounded-full p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <X size={24} />
                        ) : (
                            <Menu size={24} />
                        )}
                    </button>

                </div>
            </header>


            {/* ================= MOBILE SIDE MENU ================= */}
            <nav
                className={`
                    fixed
                    top-0
                    left-0
                    z-40
                    w-[300px]
                    h-screen
                    p-6
                    pt-24
                    transition-all
                    duration-500
                    ease-in-out

                    ${isMenuOpen
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-full opacity-0 pointer-events-none"
                    }

                    ${isDarkMode
                        ? "bg-gray-900 text-white"
                        : "bg-white text-gray-900"
                    }

                    shadow-xl
                `}
            >

                <ul className="flex flex-col gap-6 items-start text-base font-semibold">

                    <li>
                        <a
                            href="/"
                            onClick={closeMenu}
                            className="hover:text-blue-500 transition-colors"
                        >
                            Home
                        </a>
                    </li>

                    <li>
                        <a
                            href="/about"
                            onClick={closeMenu}
                            className="hover:text-blue-500 transition-colors"
                        >
                            About
                        </a>
                    </li>

                    <li>
                        <a
                            href="/contact"
                            onClick={closeMenu}
                            className="hover:text-blue-500 transition-colors"
                        >
                            Contact
                        </a>
                    </li>

                    <li>
                        <a
                            href="/services"
                            onClick={closeMenu}
                            className="hover:text-blue-500 transition-colors"
                        >
                            Services
                        </a>
                    </li>

                    <li>
                        <a
                            href="/portfolio"
                            onClick={closeMenu}
                            className="hover:text-blue-500 transition-colors"
                        >
                            Portfolio
                        </a>
                    </li>

                    <li>
                        <a
                            href="/blog"
                            onClick={closeMenu}
                            className="hover:text-blue-500 transition-colors"
                        >
                            Blog
                        </a>
                    </li>

                    {/* Hire Me */}
                    <li>
                        <button
                            type="button"
                            className="bg-blue-800 text-white px-6 py-2 rounded-sm
                            hover:bg-blue-600 transition-colors"
                        >
                            Hire me
                        </button>
                    </li>

                </ul>

            </nav>


            {/* Dark Overlay */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black/30 min-[741px]:hidden"
                    onClick={closeMenu}
                ></div>
            )}
        </>
    );
}

export default Header;
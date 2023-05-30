import React, { useState } from "react";
import Link from "next/link";
import Container from "../widgets/Container";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <Container>
            <nav className="flex items-center justify-between flex-wrap bg-white shadow-sm p-6">
                <div className="block lg:hidden">
                    <button
                        className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-black hover:border-black"
                        onClick={handleMenuToggle}
                    >
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            {isMenuOpen ? (
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4 5h12v1H4V5zm0 4h12v1H4V9zm0 4h12v1H4v-1z"
                                />
                            ) : (
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                <div
                    className={`${isMenuOpen ? "block" : "hidden"} w-full flex-grow lg:flex lg:items-center lg:w-auto`}
                >
                    <div className="text-lg font-medium lg:flex-grow ">
                        <Link
                            href="/"
                            className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-700 mr-4"
                        >
                            Dashboard
                        </Link>
                        <Link
                            href="/users"
                            className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-700 "
                        >
                            Users List
                        </Link>
                    </div>
                </div>
                <div className="flex items-center flex-shrink-0 text-black">
                    <span className="font-semibold text-xl tracking-tight mr-4">LOGO</span>
                </div>
            </nav>
        </Container>
    );
};

export default Header;

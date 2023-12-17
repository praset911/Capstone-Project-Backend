import { useState } from "react";
import NavButton from "../Elements/Navbutton";
import Dropdown from "../Dropdown";
import { Icon } from "@iconify/react";
import { Link } from "@inertiajs/react";

export default function Navbar({ auth, children }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleListClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="bg-white px-5 md:px-7 lg:px-20 py-16 md:py-7 item-center justify-between flex flex-col md:flex-row">
                <div className="flex justify-between">
                    <img
                        src="/images/fit-life-hub-high-resolution-logo-transparent.png"
                        alt="fit-life-hub-logo"
                        className="h-8"
                    />
                    <button onClick={handleListClick}>
                        <Icon
                            icon="ph:list"
                            className="text-cyan-900 md:hidden"
                            width={"30"}
                            height={"30"}
                        />
                    </button>
                </div>
                <div
                    className={`flex flex-col ${
                        isOpen ? "" : "hidden md:flex"
                    } md:flex-row md:space-x-10 pt-6 md:pt-0 font-medium text-lg md:text-lg`}
                >
                    <NavButton to="/" label="Home" />
                    <NavButton to="/articles" label="Articles" />
                    <NavButton to="/calc-it" label="Calc It!" />
                    <NavButton to="/about-us" label="About Us" />
                    {auth ? (
                        <div className="hidden sm:flex sm:items-center sm:ms-6">
                            <div className="ms-0 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="text-sm inline-flex items-center px-3 py-2 leading-4 rounded-md text-white bg-blue-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {auth.email}

                                                <svg
                                                    className="ms-2 -me-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                        >
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="hover:text-blue-700 text-white bg-blue-700 px-3 rounded-xl hover:bg-inherit hover:border hover:border-blue-700 flex items-center"
                            >
                                <Icon icon="mdi:user" />
                                Log in
                            </Link>
                        </>
                    )}
                </div>
            </div>
            <div>{children}</div>
        </>
    );
}

import power_t from "../assets/images/power_t_logo.webp"
import { useState } from "react"

export default function NavBar() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }

    return (
        <>
            <hr className="bg-utk-orange h-1 p-0 m-0 border-t-0" />
            <nav className="h-115 w-full flex flex-row flex-wrap items-center p-1">
                <div className="grow flex flex-row items-center">
                    <img
                        src={power_t}
                        width={48}
                        height={48}
                        alt="power T"
                        className="flex-none p-1"
                    />
                    <a className="text-3xl font-normal text-utk-smokey" href="https://lib.utk.edu">LIBRARIES</a>
                </div>
                <div>
                    <a className="flex-none text-utk-smokey px-3 underline-effect" href="/">Home</a>
                </div>
                <div className="dropdown relative mx-2 text-utk-smokey">
                    <button onClick={handleOpen} className="flex items-center">
                        <svg
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            className="block md:hidden"
                        >
                            <path
                                d="M4 5a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2H4ZM4 9a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2H4ZM3 14a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1ZM4 17a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2H4Z"
                                fill="#4b4b4b" />
                        </svg>
                        <div className="px-4 hidden md:flex items-center focus:outline-none">
                            Change Database
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                            >
                                <path
                                    d="M4.293 8.293a1 1 0 0 1 1.414 0L12 14.586l6.293-6.293a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 0-1.414Z"
                                    className="fill-utk-smokey hover:fill-utk-white focus:fill-utk-white"
                                />
                            </svg>
                        </div>
                    </button>
                    {open ?
                        <ul className="dropdown-content absolute right-0 mt-3 w-56 bg-utk-white shadow-lg overflow-y-auto md:text-end text-center z-[100]">
                            <li className="bg-utk-white hover:bg-utk-light-gray py-2">
                                <a className="flex-none text-utk-smokey px-3" href="/song">Song Index</a>
                            </li>
                            <li className="bg-utk-white hover:bg-utk-light-gray py-2">
                                <a className="flex-none text-utk-smokey px-3" href="/song-analysis">Analysis Index</a>
                            </li>
                            <li className="bg-utk-white hover:bg-utk-light-gray py-2">
                                <a className="flex-none text-utk-smokey px-3" href="/sermon">Sermon Database</a>
                            </li>
                            <li className="bg-utk-white hover:bg-utk-light-gray py-2">
                                <a className="flex-none text-utk-smokey px-3" href="/symphony">Knoxville Symphony</a>
                            </li>
                        </ul>
                        : <></>
                    }
                </div>
            </nav>
        </>
    )
}

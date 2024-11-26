import { Link } from "react-router-dom"
import power_t from "../assets/images/power_t_logo.png"

export default function NavBar() {
    return (
        <>
            <hr className="bg-utk-orange h-1.5 p-0 m-0 border-t-0" />
            <nav className="h-115 w-full flex flex-row items-center p-1">
                <div className="grow flex flex-row items-center">
                    <img
                        src={power_t}
                        width={56}
                        height={56}
                        alt="power T"
                        className="flex-none p-1"
                    />
                    <Link className="text-4xl font-light text-utk-smokey" to="https://lib.utk.edu">LIBRARIES</Link>
                </div>
                <Link className="flex-none text-2xl text-utk-smokey px-3" to="/">Home</Link>
            </nav>
        </>
    )
}

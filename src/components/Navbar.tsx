import { Link } from "react-router"
import power_t from "../assets/images/power_t_logo.png"

export default function NavBar() {
    return (
        <>
            <hr className="bg-utk-orange h-1 p-0 m-0 border-t-0" />
            <nav className="h-115 w-full flex flex-row items-center p-1">
                <div className="grow flex flex-row items-center">
                    <img
                        src={power_t}
                        width={48}
                        height={48}
                        alt="power T"
                        className="flex-none p-1"
                    />
                    <Link className="text-3xl font-normal text-utk-smokey" to="https://lib.utk.edu">LIBRARIES</Link>
                </div>
                <Link className="flex-none text-2xl text-utk-smokey px-3" to="/">Home</Link>
            </nav>
        </>
    )
}

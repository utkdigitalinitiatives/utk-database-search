import { Link } from "react-router-dom"
import power_t from "../assets/images/power_t_logo.png"

export default function NavBar() {
    return (
        <nav className="h-115 w-full flex flex-row items-center p-2">
            <img 
                src={power_t}
                width={72}
                height={72}
                alt="power T"
                className="flex-none p-1"
            />
            <Link className="grow text-3xl text-utk-smokey" to="/">Libraries Database Search</Link>
            <Link className="flex-none text-3xl text-utk-smokey px-3" to="/song">Home</Link>
        </nav>
    )
}
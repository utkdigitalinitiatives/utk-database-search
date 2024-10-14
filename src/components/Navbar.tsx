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
            <a className="grow text-3xl text-utk-smokey" href="https://lib.utk.edu">Libraries Database Search</a>
            <a className="flex-none text-3xl text-utk-smokey px-3" href="/">Home</a>
        </nav>
    )
}
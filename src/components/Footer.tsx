import { Link } from "react-router-dom";
import CampusLogo from "./CampusLogo";

// Need to add Web Speech API in the future

const Footer = () => {
    const footerLinks = [
        {
            title: "Events",
            url: "http://calendar.utk.edu/"
        },
        {
            title: "A-Z",
            url: "http://www.utk.edu/alpha/"
        },
        {
            title: "Apply",
            url: "http://www.utk.edu/admissions/"
        },
        {
            title: "Privacy",
            url: "https://www.utk.edu/aboutut/privacy/"
        },
        {
            title: "Map",
            url: "http://maps.utk.edu/"
        },
        {
            title: "Directory",
            url: "http://directory.utk.edu"
        },
        {
            title: "Give to UT",
            url: "http://giveto.utk.edu"
        },
        {
            title: "Accessibility",
            url: "https://oed.utk.edu/ada/campus-accessibility/"
        },
    ]
    return (
        <footer className="grid grid-cols-1 sm:grid-cols-2 bg-utk-light-gray py-2">
            <div className="grid grid-rows-2 px-2">
                <CampusLogo />
                <div className='text-utk-smokey my-0 py-0'>
                    <p className="text-xs">
                        <strong>The University of Tennessee, Knoxville</strong>
                        <br />
                        Knoxville, Tennessee 37996
                        <br />
                        <a href="tel:+18659741000" className="tel">865-974-1000</a>
                    </p>
                </div>
            </div>
            <div className="grid grid-rows-2 py-2 lg:py-0">
                <form id="utk_seek" method="GET" action="https://search.utk.edu/search" className='flex justify-center pt-3 px-2'>
                    <div className="">
                        <input type="text" id="utk_seek" name="q" onFocus={(e) => {
                            if (e.target.value === 'Search utk.edu') {
                                e.target.value = '';
                            }
                        }} placeholder="Search utk.edu" className="form-control shadow-inner border-s-2 border-y-2 focus:border-utk-orange focus:outline-none p-1 rounded-l-md md:w-96 " title="search" />
                        <input name="go" type="submit" title="Submit" className="bg-[#dbdcde] border-e-2 border-y-2 rounded-r-md text-utk-smokey hover:bg-utk-smokey hover:text-utk-white hover:border-utk-smokey  text-center p-1 w-24" value="Search" />
                    </div>
                </form>
                <div className="grid grid-cols-4 gap-1 text-utk-smokey text-xs py-2 px-2">
                    {footerLinks.map((children) => {
                        return (
                            <Link key={`${children.url}_${children.title}`} to={children.url}>{children.title}</Link>
                        )
                    })
                    }
                </div>
            </div>
        </footer>
    )
}

export default Footer;
import { Link } from "react-router-dom";
import CampusLogo from "./CampusLogo";

// Need to add Web Speech API in the future

const Footer = () => {
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
                        }} placeholder="Search utk.edu" className="form-control" title="search"  />
                        <input name="go" type="submit" title="Submit" className="bg-utk-gray--accent" value="Search" />
                    </div>
                </form>
                <div className="grid grid-cols-4 gap-1 text-utk-smokey text-xs py-1 px-2">
                    <Link className='' to="http://calendar.utk.edu/">Events</Link>
                    <Link className='' to="http://www.utk.edu/alpha/">A-Z </Link>
                    <Link className='' to="http://www.utk.edu/admissions/">Apply</Link>
                    <Link className='' to="https://www.utk.edu/aboutut/privacy/">Privacy</Link>
                    <Link className='' to="http://maps.utk.edu/">Map</Link>
                    <Link className='' to="http://directory.utk.edu">Directory</Link>
                    <Link className='' to="http://giveto.utk.edu">Give to UT</Link>
                    <Link className='' to="https://oed.utk.edu/ada/campus-accessibility/">Accessibility</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
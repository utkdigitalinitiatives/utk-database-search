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
        <footer className="grid grid-cols-1 md:grid-cols-2 gap-2 bg-utk-light-gray pt-2">
            <div className="grid row-start-1 sm:row-start-auto grid-rows-1 px-2">
                <CampusLogo />
                <div className='text-utk-smokey py-2 sm:my-0 sm:py-0'>
                    <p className="text-xs">
                        <strong>The University of Tennessee, Knoxville</strong>
                        <br />
                        Knoxville, Tennessee 37996
                        <br />
                        <a href="tel:+18659741000" className="tel">865-974-1000</a>
                    </p>
                </div>
            </div>
            <div className="grid row-start-2 sm:row-start-auto grid-cols-1 grid-rows-2 lg:py-1">
                <form id="utk_seek" method="GET" action="https://search.utk.edu/search" className='flex justify-center px-2 h-9'>
                    <input type="text" id="utk_seek" name="q" onFocus={(e) => {
                        if (e.target.value === 'Search utk.edu') {
                            e.target.value = '';
                        }
                    }} placeholder="Search utk.edu" className="form-control shadow-inner border-s-2 border-y-2 focus:border-utk-orange focus:outline-none p-1 rounded-l-md md:w-96 " title="search" />
                    <input name="go" type="submit" title="Submit" className="bg-[#dbdcde] border-e-2 border-y-2 rounded-r-md text-utk-smokey hover:bg-utk-smokey hover:text-utk-white hover:border-utk-smokey  text-center p-1 w-24" value="Search" />
                </form>
                <div className="grid grid-cols-4 gap-1 text-utk-smokey text-xs py-2 px-2">
                    {footerLinks.map((children) => {
                        return (
                            <div className="flex justify-centercenter">
                                <Link className='hover:underline' key={`${children.url}_${children.title}`} to={children.url}>{children.title}</Link>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="h-14 sm:h-10 row-start-3 sm:row-start-auto bg-utk-smokey text-xs text-utk-white col-span-2 flex flex-row items-center justify-center px-1">
                <svg className='max-w-6 mx-1' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 56.505"><title>University of Tennessee System</title><path fill="#ffffff" d="M83.829,19.645h-10.5V56.377H57.6V0H100c-.879.879-.559,2.2-1.757,3.914-1.557,2.076-3.087,1.107-4.352,2.635-1.167,1.41-.659,2.887-1.757,4.351-1.559,2.083-3.952,1.319-5.669,3.514-1.4,1.757-1.318,3.474-2.636,5.231Z" transform="translate(0)"></path><path fill="#ffffff" d="M35.409.107c-.877.879-.633,2.28-1.83,4C32.024,6.176,30.5,5.208,29.232,6.734c-1.166,1.408-.659,2.884-1.754,4.346-1.558,2.081-3.909,1.317-5.664,3.51-1.395,1.756-1.316,3.47-2.632,5.225H39.721V38.16H22.692c-1.41,0-2.546.153-3.51-.877a3.382,3.382,0,0,1-.877-2.633L18.37.107H.053L0,39.914C-.006,44.553,3.031,49.087,4.785,50.8c2.194,2.193,6.692,5.7,11.805,5.7H40.558L55,39.914,55.083.107Z" transform="translate(0)"></path></svg>
                <p>The flagship campus of <a className="underline decoration-1" href="http://tennessee.edu">the University of Tennessee System</a> and partner in <a className='underline decoration-1' href="http://www.tntransferpathway.org/">
                    the Tennessee Transfer Pathway
                </a>.
                </p>
            </div>
        </footer>
    )
}

export default Footer;

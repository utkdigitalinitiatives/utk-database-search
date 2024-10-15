import CampusLogo from "./CampusLogo";

const Footer = () => {
    return (
        <footer className="grid grid-cols-1 sm:grid-cols-2">
            <div className="grid grid-rows-2 px-2">
                <CampusLogo />
                <div className='text-utk-smokey text-base'>
                    <p>
                        <strong>The University of Tennessee, Knoxville</strong>
                        <br />
                        Knoxville, Tennessee 37996
                        <br />
                        <a href="tel:+18659741000" className="tel">865-974-1000</a>
                    </p>
                </div>

            </div>
        </footer>
    )
}

export default Footer;
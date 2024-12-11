import { useLocation, Link } from "react-router"


export default function Breadcrumbs() {
    const location = useLocation();  // Get the current location
    const pathnames = location.pathname.split('/').filter(x => x); // Split the path into segments
    const capitalizeFirstLetter = (string: string): string => {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    };

    return (
        <nav aria-label="breadcrumb" className="container text-utk-white mx-auto">
            <ol style={{ listStyle: 'none', padding: 0, display: 'flex' }}>
                <li>
                    <Link to="/">Home</Link> {/* Link to the home page */}
                </li>
                {pathnames.map((segment, index) => {
                    const path = `/${pathnames.slice(0, index + 1).join('/')}`; // Build the full path dynamically
                    return (
                        <li key={path} style={{ marginLeft: '8px' }}>
                            <span> &gt; </span>
                            <Link to={path}>{capitalizeFirstLetter(segment)}</Link>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
import { Link } from "react-router-dom";

// TODO: Come up with better names for the routes.
// Actually, lets come up with better names for everything on this project.

function Navbar() {
    return (
        <nav className="flex flex-row gap-4 p-4 border border-b-gray-500">
            <Link to="/">KBCSM</Link>
            <Link to="/analyzer">Analyzer</Link>
            <Link to="/creator">Creator</Link>
        </nav>
    );
}

export default Navbar;

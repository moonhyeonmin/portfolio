import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow-sm py-4">
            <ul className="max-w-7xl mx-auto px-6 py-1 flex justify-between items-center space-x-10 text-lg font-medium text-gray-700">
                <li>
                    <Link to="/" smooth={true} duration={600} offset={-80} className="cursor-pointer">
                        홈
                    </Link>
                </li>
                <li>
                    <Link to="/link" smooth={true} duration={600} offset={-80} className="cursor-pointer">
                        링크
                    </Link>
                </li>
                <li>
                    <Link to="/about" smooth={true} duration={600} offset={-80} className="cursor-pointer">
                        이력
                    </Link>
                </li>
                <li>
                    <Link to="/project" smooth={true} duration={600} offset={-80} className="cursor-pointer">
                        작업
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
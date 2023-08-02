import { Link } from "react-router-dom";

const Header = ({ logo }) => {
    return(
        <nav className="navbar h-[8vh] bg-[#312E81] flex fixed w-full z-40">
            <div className="left-nav w-2/5 flex justify-center items-center">
                <div className="logo">
                    <Link to={'/'} className="text-2xl font-medium font-sans text-white">{logo}</Link>
                </div>
            </div>
            <div className="right-nav w-3/5 flex justify-center ">
                <ul className="menu-bar flex w-3/4 justify-center items-center gap-[70px]">
                    <li><Link to={'/'} className="text-white text-lg">Home</Link></li>
                    <li className="text-white">
                       <button className="rounded-full bg-sky-600 text-white p-2 pr-5 pl-5">Sign In</button>
                    </li>
                    <li className="text-white">
                        <button className="rounded-full bg-[#312E81] text-white p-2 pr-5 pl-5 border border-sky-500">Sign Up</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;
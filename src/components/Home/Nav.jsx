import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <div className="lg:hidden navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="lg:hidden btn btn-ghost">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="z-[1] bg-base-100 shadow mt-3 p-2 rounded-box w-52 dropdown-content menu menu-sm">
                    </ul>
                </div>
            </div>

            <div className="flex justify-evenly">
                <Link to='/' className="gap-0 font-bold text-3xl italic btn btn-ghost"><span className="text-5xl text-red-500">B</span>ook Vibe</Link>
                <div className="flex-none">
                    <ul className="sm:flex items-center gap-5 hidden px-15 menu menu-horizontal">
                        <NavLink to='/' className={({ isActive }) => isActive ? 'font-bold text-primary' : 'font-bold'}>Home</NavLink>

                        <NavLink to='/listedBooks' className={({ isActive }) => isActive ? 'font-bold text-primary' : 'font-bold'}>Listed Books</NavLink>
                        
                        <NavLink to='/pagesToRead' className={({ isActive }) => isActive ? 'font-bold text-primary' : 'font-bold'}>Pages to Read</NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="bg-green-500 mr-4 px-6 py-3 rounded-lg font-semibold text-white text-xl btn">Sign In</a>
                    <a className="bg-cyan-400 px-6 py-3 rounded-lg font-semibold text-white text-xl btn">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Nav;
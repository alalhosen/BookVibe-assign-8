
const Nav = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start lg:hidden">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

                        {/* <li><a>Home</a></li>
                        <li><a>Listed Books</a></li>
                        <li><a>Pages to Read</a></li> */}

                    </ul>
                </div>
            </div>

            <div className="flex justify-evenly">
                <a className="btn btn-ghost text-3xl font-bold italic"><span className="text-red-400 text-4xl">B</span>ook Vibe</a>
                <div className="navbar-center hidden lg:flex">
                    <ul className="px-1 flex ">
                        <li className=""><a>Home</a></li>
                        <li className="ml-5 mr-5"><a>Listed Books</a></li>
                        <li><a>Pages to Read</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn mr-4 text-xl px-6 py-3 font-semibold rounded-lg bg-green-500 text-white">Sign In</a>
                    <a className="btn text-xl px-6 py-3 font-semibold rounded-lg bg-cyan-400 text-white">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Nav;
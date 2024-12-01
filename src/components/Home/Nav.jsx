import { Link } from "react-router-dom";

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

                        {/* <li><a>Home</a></li>
                        <li><a>Listed Books</a></li>
                        <li><a>Pages to Read</a></li> */}

                    </ul>
                </div>
            </div>

            <div className="flex justify-evenly">
                <a className="gap-0 font-bold text-3xl italic btn btn-ghost"><span className="text-5xl text-red-500">B</span>ook Vibe</a>
                <div className="lg:flex items-center hidden">
                    <ul className="flex px-12">
                        <Link to='/' className="font-bold text-primary">Home</Link>
                        <Link to='/listedBooks' className="mr-8 ml-8 font-bold">Listed Books</Link>
                        <li className="font-bold"><a>Pages to Read</a></li>
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
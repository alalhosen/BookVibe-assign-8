import { Outlet } from "react-router-dom";

import Nav from "../components/Home/Nav";
import Blogs from "../components/Home/Blogs";
import Footer from "../components/footer/Footer";


const MainLayout = () => {
    return (
        <div>
            <div className="h-16">
              <Nav/>
            </div>

            {/* packet */}
            <div className="min-h-[calc(100vh-116px)]">
                <Outlet />
            </div>
           <Blogs/>
           <Footer/>
        </div>
    );
};

export default MainLayout;
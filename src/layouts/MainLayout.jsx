import { Outlet } from "react-router-dom";
import Nav from "../components/Home/Nav";


const MainLayout = () => {
    return (
        <div>
            <div className="h-16">
                <Nav />
            </div>

            {/* packet */}
            <Outlet/>
        </div>
    );
};

export default MainLayout;
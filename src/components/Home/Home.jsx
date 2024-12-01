
import Banner from "./Banner";
import Nav from "./Nav";

const Home = () => {
    return (

        <>
            <div className="h-16">
                <Nav></Nav>
            </div>
            <Banner></Banner>
            <h1>This is Home nav page.</h1>
        </>
    );
};

export default Home;
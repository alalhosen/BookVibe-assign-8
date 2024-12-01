import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="bg-gray-200 mt-20 p-24 rounded-xl">
            <div className="flex lg:flex-row-reverse flex-col">
                <img
                    src="https://i.ibb.co.com/Fx7CZy6/61lh-BP2-Uf9-L-SY466.jpg"
                    className="shadow-2xl rounded-lg" />
                <div className="pr-24">
                    <h1 className="mt-8 mb-4 py- font-bold text-6xl">Books to freshen up your bookshelf</h1>

                    <Link to='/listedBooks' className="bg-green-500 mt-12 px-6 py-3 rounded-lg font-semibold text-white text-xl btn">View The List</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
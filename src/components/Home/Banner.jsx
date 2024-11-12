
const Banner = () => {
    return (
        <div className="mt-20 bg-gray-200 rounded-xl p-24">
            <div className="flex flex-col lg:flex-row-reverse">
                <img
                    src="https://i.ibb.co.com/Fx7CZy6/61lh-BP2-Uf9-L-SY466.jpg"
                    className="rounded-lg shadow-2xl" />
                <div className="pr-24">
                    <h1 className="text-5xl py- font-bold mb-4 mt-4">Books to freshen up your bookshelf</h1>

                    <button className=" 
                    btn mt-6 text-xl px-6 py-3 font-semibold rounded-lg bg-green-500 text-white">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
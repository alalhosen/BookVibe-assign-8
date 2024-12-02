import { Link } from "react-router-dom";

const BlogCard = () => {
    return (
        <Link to={'/'} className="dark:bg-gray-50 mx-auto max-w-sm hover:no-underline focus:no-underline group">
            <img role="presentation" className="dark:bg-gray-500 rounded w-full h-44 object-cover" src="https://source.unsplash.com/random/480x360?1" />
            <div className="space-y-2 p-6">
                <h3 className="font-semibold text-2xl group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
                <span className="text-xs dark:text-gray-600">January 21, 2021</span>
                <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
            </div>
        </Link>
    
    );
};

export default BlogCard;
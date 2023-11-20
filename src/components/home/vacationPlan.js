import { LocationMarkerIcon, StarIcon, ChevronLeftIcon, ChevronRightIcon, PaperAirplaneIcon } from '@heroicons/react/solid';
import firenze_img from '../../assets/img/firenze-img.png';
import osaka_img from '../../assets/img/osaka-img.png';
import london_img from '../../assets/img/london-img.png';
import { useState } from 'react';

const VacationPlan = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 3;

    const posts = [
        {
            title: 'Rome',
            imageUrl: firenze_img,
            country: 'Italy',
            price: '5,42',
            days: '10',
            rate: '4.8',
        },
        {
            title: 'London',
            imageUrl: london_img,
            country: 'UK',
            price: '2,42',
            days: '07',
            rate: '4.7',
        },
        {
            title: 'Osaka',
            imageUrl: osaka_img,
            country: 'Japan',
            price: '5,42',
            days: '10',
            rate: '4.8',
        },
    ];

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const totalPages = Math.ceil(posts.length / postsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="max-w-4xl relative bg-gray-50 pt-16 pb-20">
            <div className="absolute inset-0">
                <div className="h-1/3 bg-white sm:h-2/3" />
            </div>
            <div className="relative mx-auto max-w-7xl">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Best <span className="text-orange-button">vacation plan</span>
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-gray-600">
                        Plan your perfect vacation with our travel agency. Choose <br />
                        among hundreds of all-inclusive offers!
                    </p>
                </div>
                <div className="flex justify-end mt-4">
                    <button
                        onClick={prevPage}
                        className="mr-2 px-4 py-2 border border-gray-400 rounded-full flex items-center transition duration-300 ease-in-out hover:bg-orange-button hover:border-orange-button "
                        disabled={currentPage === 1}
                    >
                        <ChevronLeftIcon className="h-5 w-5 mr-1 text-gray-400" />
                    </button>
                    <button
                        onClick={nextPage}
                        className="px-4 py-2 border border-gray-400 rounded-full flex items-center transition duration-300 ease-in-out hover:bg-orange-button hover:border-orange-button"
                        disabled={currentPage === totalPages}
                    >
                        <ChevronRightIcon className="h-5 w-5 ml-1 text-gray-400" />
                    </button>
                </div>
                <div className="mx-auto mt-12 flex flex-nowrap justify-center items-center">
                    {currentPosts.map((post) => (
                        <div
                            key={post.title}
                            className="flex flex-col overflow-hidden rounded-lg shadow-lg mx-4 my-4 max-w-xs relative"
                        >
                            <img
                                className='h-48 w-full object-cover'
                                src={post.imageUrl}
                                alt=""
                            />
                            <div className="flex-1 p-4">
                                <div className="flex justify-between items-start mb-6">
                                    <p className="text-sm font-semibold text-gray-900 mr-12">
                                        {post.title}, {post.country}
                                    </p>
                                    <div className="flex items-center">
                                        <p className="text-md font-semibold text-orange-button ml-8">
                                            ${post.price}k
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-end mb-2">
                                    <PaperAirplaneIcon className="h-4 w-4 mr-1 text-orange-button" />
                                    <p className="text-xs font-semibold text-gray-600 rounded-md">
                                        {post.days} Days Trip
                                    </p>
                                    <StarIcon className="h-4 w-4 text-yellow-500 mr-1 ml-20" />
                                    <p className="text-sm font-semibold text-gray-400">
                                        {post.rate}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default VacationPlan;

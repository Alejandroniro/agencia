import { LocationMarkerIcon, StarIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import madrid_img from '../../assets/img/madrid-img.png';
import firenze_img from '../../assets/img/firenze-img.png';
import paris_img from '../../assets/img/paris-img.png';
import london_img from '../../assets/img/london-img.png';

import { useState, useEffect } from 'react';

const DealSection = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 4;

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const posts = [
        {
            title: 'Madrid',
            imageUrl: madrid_img,
            country: 'Spain',
            price: '950',
            discount: '850',
            rate: '4.8',
        },
        {
            title: 'Firenze',
            imageUrl: firenze_img,
            country: 'Italy',
            price: '850',
            discount: '750',
            rate: '4.5',
        },
        {
            title: 'Paris',
            imageUrl: paris_img,
            country: 'France',
            price: '699',
            discount: '599',
            rate: '4.4',
        },
        {
            title: 'London',
            imageUrl: london_img,
            country: 'UK',
            price: '850',
            discount: '850',
            rate: '4.8',
        }, {
            title: 'London1',
            imageUrl: london_img,
            country: 'UK',
            price: '850',
            discount: '850',
            rate: '4.8',
        }, {
            title: 'London2',
            imageUrl: london_img,
            country: 'UK',
            price: '850',
            discount: '850',
            rate: '4.8',
        }, {
            title: 'London3',
            imageUrl: london_img,
            country: 'UK',
            price: '850',
            discount: '850',
            rate: '4.8',
        }, {
            title: 'London4',
            imageUrl: london_img,
            country: 'UK',
            price: '850',
            discount: '850',
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
        <div className="max-w-4xl relative bg-gray-50 pt-14 pb-20">
            <div className="relative mx-auto max-w-7xl">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Exclusive <span className="text-orange-button">deals & discounts</span>
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-gray-600">
                        Discover our fantastic early booking discounts <br />
                        & start planning your journey.
                    </p>
                </div>
                <div className="mx-auto mt-12 flex flex-nowrap justify-center lg:justify-start">
                    {currentPosts.map((post, index) => (
                        <div
                            key={post.title}
                            className="flex flex-col overflow-hidden rounded-lg shadow-lg mx-4 my-4 max-w-xs relative"
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img
                                className={`h-48 w-full object-cover ${hoveredIndex === index ? 'opacity-50' : 'opacity-100'
                                    }`}
                                src={post.imageUrl}
                                alt=""
                            />
                            {hoveredIndex === index && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="h-48 absolute inset-0 bg-black opacity-50"></div>
                                    <a
                                        href="#"
                                        className="relative inline-flex items-center rounded-md border border-transparent bg-orange-button text-white mx-auto px-4 py-2 text-base font-medium hover:bg-orange-button focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-button"
                                    >
                                        Book Now
                                    </a>
                                </div>
                            )}
                            <div className="flex-1 p-4">
                                <div className="flex justify-between items-start mb-6">
                                    <p className="text-sm font-semibold text-gray-900 mr-12">
                                        {post.title}
                                    </p>
                                    <div className="flex items-center">
                                        <StarIcon className="h-4 w-4 text-yellow-500 mr-1" />
                                        <p className="text-sm font-semibold text-gray-400">
                                            {post.rate}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-end mb-2">
                                    <div className="flex items-center">
                                        <LocationMarkerIcon className="h-4 w-4 text-gray-500 mr-1" />
                                        <p className="text-sm font-semibold text-gray-400">
                                            {post.country}
                                        </p>
                                    </div>
                                    <p className="text-sm font-semibold text-gray-400 line-through ml-8">
                                        ${post.price}
                                    </p>
                                    <p className="text-sm font-semibold text-orange-button ml-1 shadow-md bg-orange-discount rounded-md">
                                        ${post.discount}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-4">
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
            </div>
        </div>
    );
};

export default DealSection;

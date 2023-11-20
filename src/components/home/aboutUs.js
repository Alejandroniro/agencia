import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

import firenze_img from '../../assets/img/firenze-img.png';
import london_img from '../../assets/img/london-img.png';

const AboutUs = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 1;

    const posts = [
        {
            name: 'Mike taylor',
            imageUrl: firenze_img,
            from: 'Lahore, Pakistan',
            comment: 'On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.'
        },
        {
            name: 'Chris Thomas',
            imageUrl: london_img,
            from: 'CEO of Red Buttom',
            comment: 'l',
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
        <div className="max-w-4xl flex flex-nowrap relative bg-gray-50 pt-16 pb-20">
            <div className="relative mx-auto max-w-7xl flex ">
                <div>
                    <div className="text-left">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            what people say <span className="text-orange-button">about us.</span>
                        </h2>
                        <p className="mt-4 text-lg leading-8 text-gray-600">
                            Our clients send us a bunch of smiles with our services <br />
                            and we love them.
                        </p>
                    </div>
                    <div className="flex justify-start mt-4">
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
                <div className="flex justify-center">
                    {currentPosts.map((post) => (
                        <div
                            key={post.name}
                            className="flex flex-col overflow-hidden rounded-lg shadow-lg mx-4 my-4 max-w-xs relative"
                        >
                            <img
                                className='h-12 w-12 object-cover rounded-full flex self-start'
                                src={post.imageUrl}
                                alt=""
                            />
                            <div className="flex-1 p-4">
                                <div className="flex justify-between items-start mb-6 ">
                                    <p className="text-sm font-semibold text-gray-900">
                                        "{post.comment}"
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col items-start">
                                <p className="text-sm font-semibold text-gray-900">
                                    {post.name}
                                </p>
                                <p className="text-sm font-semibold text-gray-400">
                                    {post.from}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AboutUs;

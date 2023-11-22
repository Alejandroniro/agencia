import { useState } from 'react';

export default function BlogSection({ blogs }) {

    const posts = blogs || [];
    const [currentPage, setCurrentPage] = useState(1);

    const postsPerPage = 4;

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const totalPages = Math.ceil(posts.length / postsPerPage);

    return (
        <div className="max-w-4xl relative bg-gray-50 pt-16 pb-20">
            <div className="absolute inset-0">
                <div className="h-1/3 bg-white sm:h-2/3" />
            </div>
            <div className="relative mx-auto max-w-7xl">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Get update with <span className="text-orange-button">latest blog</span>
                    </h2>
                </div>
                <div className="mx-auto mt-12 flex flex-nowrap justify-center">
                    {currentPosts.map((post) => (
                        <div key={post.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg mr-4">
                            <div className="flex-shrink-0">
                                <img className="h-48 w-full object-cover" src={post.image_url} alt="" />
                            </div>
                            <div className="flex flex-1 flex-col justify-between bg-white p-6">
                                <div className="flex-1">
                                    <div className="text-sm font-semibold text-gray-900">{post.title}</div>
                                </div>
                                <div className="mt-6 flex items-center ml-0">
                                    <div className="flex space-x-1 text-sm text-gray-500 items-baseline ">
                                        <time>{post.date}</time>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-4">
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index + 1)}
                            className={`mx-2 w-4 h-4 rounded-full ${currentPage === index + 1
                                    ? 'bg-orange-button'
                                    : 'bg-gray-400'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
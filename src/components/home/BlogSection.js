import { useState } from 'react';

const posts = [
    {
        title: 'The Amazing Difference a Year of Travelling.',
        date: 'July 27, 2021',
        imageUrl:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    },
    {
        title: 'Travel for enough, you meet yourself.',
        date: 'July 27, 2021',
        imageUrl:
            'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    },
    {
        title: 'How to Save Money While Visiting Africa.',
        date: 'July 27, 2021',
        imageUrl:
            'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    },
    {
        title: 'Reflections on 5 Months of Travel: Time to Hang',
        date: 'July 27, 2021',
        imageUrl:
            'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    },
]

const BlogSection = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const postsPerPage = 4;

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
                        Get update with <span className="text-orange-button">latest blog</span>
                    </h2>
                </div>
                <div className="mx-auto mt-12 flex flex-nowrap justify-center">
                    {currentPosts.map((post) => (
                        <div key={post.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg mr-4">
                            <div className="flex-shrink-0">
                                <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
                            </div>
                            <div className="flex flex-1 flex-col justify-between bg-white p-6">
                                <div className="flex-1">
                                    <a href='#' className="text-sm font-semibold text-gray-900">{post.title}</a>
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
                            className={`mx-2 w-4 h-4 rounded-full ${
                                currentPage === index + 1
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

export default BlogSection;
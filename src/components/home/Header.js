import home_header_logo from '../../assets/img/home-header-logo.png';
import { ChevronDownIcon } from '@heroicons/react/solid';

function Header() {
    return (
        <main>
            <div className="relative">
                <div className="mx-auto max-w-4xl pt-10 sm:pt-24 text-left flex gap-x-8 relative">
                    <div className="flex flex-wrap justify-center flex-1 w-1/2 z-10 relative">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                            Get started your exciting <span className="text-orange-button">journey</span> with us.
                        </h1>
                        <p className="mt-4 text-lg leading-8 text-gray-600">
                            A Team of experienced tourism professionals will provide you with the best advice and tips for your desired place.
                        </p>
                        <div className="mt-6 ml-0 flex gap-x-4">
                            <div
                                className="inline-block rounded-lg px-8 py-3 text-base font-semibold leading-7 text-orange-button shadow-sm ring-1 ring-orange-button"
                            >
                                Discover Now
                            </div>
                        </div>
                    </div>
                    <div className="flex-shrink-0 w-1/2 relative overflow-hidden">
                        <img
                            src={home_header_logo}
                            className="w-full h-full object-cover"
                            alt="Header Logo"
                        />
                    </div>
                </div>
                <div className="w-2/4 px-8 py-6 mt-16 bg-white border-gray-200 dark:border-gray-800 sm:flex items-center gap-8 shadow-navbar">
                    <div className="text-left whitespace-nowrap flex flex-wrap">
                        <div
                            className="text-lg font-semibold text-gray-700 dark:text-black mr-0 ml-0">
                            Location
                        </div>
                        <ChevronDownIcon className="h-5 w-5 text-orange-button ml-0" />
                        <p className="mt-2 text-gray-500">Where are you going</p>
                    </div>
                    <div className="text-left whitespace-nowrap flex flex-wrap">
                        <div
                            className="text-lg font-semibold text-gray-700 dark:text-black mr-0 ml-0">
                            Date
                        </div>
                        <ChevronDownIcon className="h-5 w-5 text-orange-button ml-0" />
                        <p className="mt-2 text-gray-500">When will you go</p>
                    </div>
                    <div className="text-left whitespace-nowrap flex flex-wrap">
                        <div
                            className="text-lg font-semibold text-gray-700 dark:text-black mr-0 ml-0">
                            Guest
                        </div>
                        <ChevronDownIcon className="h-5 w-5 text-orange-button ml-0" />
                        <p className="mt-2 text-gray-500">Number of guests</p>
                    </div>
                    <div className="mt-6 flex whitespace-nowrap">
                        <div
                            className='relative inline-flex items-center rounded-md border border-transparent bg-orange-button text-white px-8 py-3 text-base font-medium hover:bg-orange-button focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-button'
                        >
                            Explore Now
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Header;

import { MailIcon } from '@heroicons/react/outline';


export default function CTA() {
    return (
        <div className="mx-auto bg-orange-button max-w-4xl rounded-2xl">
            <div className="max-w-2xl mx-auto py-24 sm:px-2 sm:py-20 lg:px-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white text-center">
                    Subscribe and get exclusive <br />
                    deals & offer
                </h2>
                <form className="mt-12 sm:flex justify-center">
                    <div className="relative flex items-center w-full max-w-2xl">
                        <input
                            type="text"
                            id="form-subscribe-Subscribe"
                            className="flex-1 rounded-lg border-transparent appearance-none border border-gray-300 py-4 px-12 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                            placeholder="Enter your mail"
                        />
                        <MailIcon className="h-6 w-6 text-gray-400 absolute ml-3" />
                        <button
                            className="absolute mr-2 right-0 px-6 py-3 text-sm font-semibold leading-5 text-white bg-orange-button rounded-lg shadow-sm ring-1 ring-orange-button"
                            type="submit"
                        >
                            Subscribe
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

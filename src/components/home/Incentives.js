import DOMPurify from 'dompurify'

export default function Incentives({incentives}) {
    return (
        <div className="bg-white min-h-screen flex items-center justify-center">
            <div className="max-w-4xl mx-auto">
                <div className="mx-auto max-w-2xl px-4 lg:max-w-none text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-800">
                        Things You need <span className="text-orange-button">to do</span>
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-gray-600">
                        We ensure that you'll embark on a perfectly planned, <br/>
                        safe vacation at a price you can afford.
                    </p>
                </div>
                <div className="mt-16 mx-auto lg:mx-auto flex flex-nowrap">
                    {incentives&&incentives.map((incentive) => (
                        <div key={incentive.name} className="bg-white p-6 rounded-md shadow-md mb-4 max-w-xs">
                            <div className="sm:flex-shrink-0">
                                <img className="h-14 w-14 ml-0" src={decodeURI(incentive.image_url)} alt="" />
                            </div>
                            <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                                <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
                                <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(incentive.description)}} className="mt-2 text-sm text-gray-500"/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

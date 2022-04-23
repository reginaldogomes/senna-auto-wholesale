export const Slide = () => {
    const image =
        'https://envato-shoebox-0.imgix.net/56bc/2976-1ed1-46e5-9958-2e216a064ef5/AWS_5498.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=800&s=e74a243aa718473edf8129bb732e668b'

    return (
        <div
            className="w-full h-96 hblock bg-primary opacity-75 bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className="flex justify-center items-center h-full py-12">
                <div className="text-center text-white px-6 md:px-12">
                    <h1 className="text-5xl font-bold mt-0 mb-6">
                        Get an instant cash offer on your car.
                    </h1>
                    <h3 className="text-3xl font-bold mb-8">
                        Share a few details about your car, and you’ll get a
                        firm offer instantly.
                    </h3>
                    <a
                        href="/sell"
                        type="button"
                        className="inline-block px-6 py-2.5 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                    >
                        appraisal
                    </a>
                </div>
            </div>
        </div>
    )
}

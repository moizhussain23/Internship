import abovefooter from '../assets/abovefooter.webp';

export default function BeautyGlowUp() {
    return (
        <div className="w-full">
            <div className="flex flex-col md:flex-row w-full md:h-[600px]">
                
                {/* Left - Image Section */}
                <div className="md:w-1/2 w-full h-64 md:h-full">
                    <img
                        src={abovefooter}
                        alt="Salon Welcome"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right - Text Section */}
                <div className="md:w-1/2 w-full bg-[#6D7154] text-white p-6 sm:p-8 md:p-20 flex flex-col justify-center min-h-[400px] md:h-full">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif leading-tight text-white">
                        Exclusive all-in-one glow up beauty{' '}
                        <span className="italic text-pink-300">packages</span>
                    </h1>

                    <p className="text-sm sm:text-base md:text-lg mt-4 md:mt-6 text-gray-200">
                        We created this space with you in mind, for your time with us to be calming and invigorating.
                        It's your time to rest easy in our salon home. But before you're gone, pay our photo booth a visit
                        and you'll be so glad you did.
                    </p>

                    <ul className="mt-4 md:mt-6 space-y-2 md:space-y-3">
                        <li className="flex items-center text-sm sm:text-base md:text-lg text-gray-100">
                            <span className="text-pink-300 text-lg md:text-xl mr-3">✔</span>
                            Tailored treatments for every client;
                        </li>
                        <li className="flex items-center text-sm sm:text-base md:text-lg text-gray-100">
                            <span className="text-pink-300 text-lg md:text-xl mr-3">✔</span>
                            A range of high-quality beauty services;
                        </li>
                        <li className="flex items-center text-sm sm:text-base md:text-lg text-gray-100">
                            <span className="text-pink-300 text-lg md:text-xl mr-3">✔</span>
                            Top-rated by our clients.
                        </li>
                    </ul>

                    <button
                        onClick={() => window.location.href = '/packages'}
                        className="bg-white text-gray-800 text-xs sm:text-sm mt-4 md:mt-6 tracking-wide px-4 py-3 border border-white hover:bg-gray-200 rounded-md transition w-full sm:w-auto"
                    >
                        LEARN MORE
                    </button>
                </div>
            </div>
        </div>
    );
}

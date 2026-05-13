import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
    { bg: "#b5294e", label: "Mother's Day", title: "Gift Ideas" },
    { bg: "#7c3aed", label: "New Arrivals", title: "Spring Collection" },
    { bg: "#0e7490", label: "Best Sellers", title: "Shop Now" },
];

const WelcomeSection = () => {
    return (
        <div className="bg-white px-4 sm:px-6 md:px-10 lg:px-16 py-4 sm:py-6 w-full">

            <div className="flex items-center gap-2 border border-gray-200 rounded-full px-4 py-2 mb-4 sm:mb-6 max-w-sm sm:max-w-md lg:max-w-lg">
                <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                </svg>
                <input
                    type="text"
                    placeholder="Search for Cleansers..."
                    className="w-full bg-transparent outline-none border-none text-sm text-gray-700 placeholder-pink-400"
                />
            </div>

            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-5 text-gray-900">
                Welcome to Roopsee.
            </h2>

            <div style={{ position: "relative", zIndex: 0 }}>
                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    loop={true}
                    className="rounded-xl w-full"
                    style={{
                        zIndex: 0,
                        "--swiper-pagination-color": "#d946a8",
                        "--swiper-pagination-bullet-inactive-color": "#ddd",
                        "--swiper-pagination-bullet-inactive-opacity": 1,
                        "--swiper-pagination-bullet-size": "7px",
                        "--swiper-pagination-bullet-horizontal-gap": "4px",
                    }}
                >
                    {slides.map((slide, i) => (
                        <SwiperSlide key={i}>
                            <div
                                className="
                h-48 sm:h-56 md:h-64 lg:h-80 xl:h-96
                flex items-end justify-end
                p-4 sm:p-6 md:p-8
                rounded-xl relative overflow-hidden
              "
                                style={{ backgroundColor: slide.bg }}
                            >
                                <div className="absolute top-[-40px] left-[-40px] w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-white opacity-5" />

                                <div className="bg-white rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-right z-10">
                                    <p className="text-xs sm:text-sm font-bold uppercase tracking-wide text-pink-700">
                                        {slide.label}
                                    </p>
                                    <p className="text-sm sm:text-base md:text-lg font-extrabold text-gray-900">
                                        {slide.title}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>


        </div>
    );
};

export default WelcomeSection;
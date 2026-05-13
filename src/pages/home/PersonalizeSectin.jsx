import React from "react";
import { ArrowRight } from "lucide-react";
import skinModel from "../../assets/images/skin-2.jpeg";
import { Link } from "react-router-dom";

const PersonalizeSection = () => {
  return (
    <div className="mx-4 sm:mx-6 md:mx-10 lg:mx-16 my-6 rounded-2xl overflow-hidden relative min-h-[180px] sm:min-h-[220px] md:min-h-[260px] bg-[#f5e6e0]">

      <img
        src={skinModel}
        alt="Skin model"
        className="absolute right-0 top-0 h-full w-[40%] rounded rounded-1 object-cover object-left-top"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#f5e6e0] via-[#f5e6e0]/80 to-transparent" />

      <div className="relative z-10 flex flex-col justify-center gap-2 px-5 sm:px-8 py-6 sm:py-10 max-w-[55%] h-full min-h-[180px] sm:min-h-[220px] md:min-h-[260px]">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">
          Personalize<br />your skincare.
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          Take the Roopsee Quiz to find the best match for your skin now!
        </p>
        <Link
          to="/quiz"
          className="inline-flex items-center gap-1 text-sm font-semibold text-pink-500 hover:text-pink-600 transition-colors mt-1"
        >
          Take the quiz <ArrowRight size={14} />
        </Link>
      </div>

    </div>
  );
};

export default PersonalizeSection;
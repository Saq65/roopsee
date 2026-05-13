import React from "react";
import { ArrowRight } from "lucide-react";
import skinModel from "../../assets/images/skin-2.jpeg"; 
import { Link } from "react-router-dom";

const PersonalizeSection = () => {
  return (
    <div
      className="mx-4 sm:mx-6 md:mx-10 lg:mx-16 my-6 rounded-2xl overflow-hidden relative min-h-[180px] sm:min-h-[220px]"
      style={{
        backgroundImage: `url(${skinModel})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent rounded-2xl" />

      {/* Text content */}
      <div className="relative z-10 flex flex-col justify-center gap-2 px-5 sm:px-8 py-6 sm:py-8 max-w-[55%]">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-tight">
          Personalize<br />your skincare.
        </h2>
        <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
          Take the Roopsee Quiz to find the best match for your skin now!
        </p>
        <Link
          to="/quiz"
          className="inline-flex items-center gap-1 text-sm font-semibold text-pink-400 hover:text-pink-300 transition-colors mt-1"
        >
          Take the quiz <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
};

export default PersonalizeSection;
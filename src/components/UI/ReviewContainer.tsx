import { RiStarFill } from "@remixicon/react";
import React from "react";

interface Props {
  reviewName?: string;
  reviewRating: number;
  reviewComment: string;
}

const ReviewContainer = ({
  reviewName,
  reviewRating,
  reviewComment,
}: Props) => {
  return (
    <div className="p-10 w-[90%] sm:w-[480px] text-left bg-c_light_gray rounded-xl shadow-md shadow-black">
      <h2 className="mb-2 font-bold">{reviewName || "Unknown"}</h2>
      <div className="mb-4 flex flex-row gap-1">
        <RiStarFill
          size={18}
          className={`${
            Math.round(reviewRating) >= 0
              ? "fill-c_primary"
              : "fill-c_dark_gray"
          }`}
        />
        <RiStarFill
          size={18}
          className={`${
            Math.round(reviewRating) > 1 ? "fill-c_primary" : "fill-c_dark_gray"
          }`}
        />
        <RiStarFill
          size={18}
          className={`${
            Math.round(reviewRating) > 2 ? "fill-c_primary" : "fill-c_dark_gray"
          }`}
        />
        <RiStarFill
          size={18}
          className={`${
            Math.round(reviewRating) > 3 ? "fill-c_primary" : "fill-c_dark_gray"
          }`}
        />
        <RiStarFill
          size={18}
          className={`${
            Math.round(reviewRating) > 4 ? "fill-c_primary" : "fill-c_dark_gray"
          }`}
        />
        <p className="ml-2 text-sm text-c_dark_gray">{reviewRating} out of 5</p>
      </div>
      <p className="text-justify italic">"{reviewComment}"</p>
    </div>
  );
};

export default ReviewContainer;

import React from "react";

interface Props {
  foodName: string;
  foodDescription: string;
  foodImageUrl: string;
  imageLeft?: boolean;
  imageRight?: boolean;
}

const FoodContainer = ({
  foodName,
  foodDescription,
  foodImageUrl,
  imageLeft,
  imageRight,
}: Props) => {
  return (
    <div className="w-full flex justify-center">
      <div
        className={`p-10 mb-5 sm:mb-0 w-[90%] sm:w-3/4 text-center ${
          imageLeft ? "sm:text-left" : "sm:text-right"
        } bg-c_light_gray rounded-md sm:rounded-none`}
      >
        <h2 className="mb-8 text-2xl">{foodName}</h2>
        <div className="flex flex-wrap sm:flex-nowrap items-center">
          {/* Image For Large Device On Left */}
          {imageLeft && (
            <img
              src={foodImageUrl}
              alt="menu"
              className="hidden sm:block w-full lg:w-1/4 p-2 sm:p-0 mb-4 lg:mb-0 lg:mr-4 sm:shadow-c_dark_gray sm:shadow-xl"
            />
          )}

          {/* Image For Small Device */}
          <img
            src={foodImageUrl}
            alt="menu"
            className="block sm:hidden w-full lg:w-1/4 p-2 sm:p-0 mb-4 lg:mb-0 lg:mr-4 sm:shadow-c_dark_gray sm:shadow-xl"
          />
          <div className="w-full lg:w-3/4 sm:px-5 text-justify">
            <p>{foodDescription}</p>
          </div>

          {/* Image For Large Device On Right */}
          {imageRight && (
            <img
              src={foodImageUrl}
              alt="menu"
              className="hidden sm:block w-full lg:w-1/4 p-2 sm:p-0 mb-4 lg:mb-0 lg:mr-4 sm:shadow-c_dark_gray sm:shadow-xl"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodContainer;

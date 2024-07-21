import React from "react";
import ReviewContainer from "./UI/ReviewContainer";

const ReviewContent = () => {
  return (
    <div id="review" className="w-full pt-[5%]">
      <div className="mt-[10%] sm:mt-[5%] sm:flex sm:flex-col sm:items-center">
        <h1 className="mb-10 text-4xl text-center text-c_white">Reviews</h1>
        <div className="sm:w-3/4 flex flex-wrap justify-center gap-10">
          <ReviewContainer
            reviewRating={4.5}
            reviewComment="Saya sangat senang menemukan warung nasi ayam di Bagan. Nasi tim ayam mereka benar-benar lezat, dengan potongan ayam yang juicy dan rempahnya yang menggugah selera. Pelayanan yang ramah dan harga yang terjangkau membuat pengalaman makan di sini sangat menyenangkan. Sangat direkomendasikan untuk pecinta nasi ayam!"
          />
          <ReviewContainer
            reviewRating={4.2}
            reviewComment="Nasi tim ayam mereka luar biasa! Ayamnya digoreng dengan sempurna dan juicy di dalam. Sambal daun jeruknya juga pas banget, menambah kenikmatan saat menyantapnya. Lokasi warung yang strategis dan suasana yang nyaman membuat saya sering kembali ke sini."
          />
          <ReviewContainer
            reviewRating={5}
            reviewComment="Menu spesial mereka, nasi tim ayam, benar-benar menggoda! Potongan ayam yang dibumbui dan digoreng memberikan kombinasi gurih yang sempurna. Selain itu, porsi yang besar dan harga yang terjangkau membuat nilai dari hidangan ini sangat tinggi. Pasti akan menjadi favorit saya di warung ini!"
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewContent;

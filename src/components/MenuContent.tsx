import React from "react";
import FoodContainer from "./UI/FoodContainer";

const MenuContent = () => {
  return (
    <div id="menu" className="w-full pt-[10%]">
      <div className="w-full mt-[10%] sm:mt-[5%]">
        <h1 className="mb-10 text-4xl text-center text-c_white">Our Menu</h1>
        <div className="sm:flex sm:flex-col sm:items-center sm:gap-10">
          <FoodContainer
            foodName="Nasi Tim Ayam"
            foodDescription="Nasi Tim Ayam dengan potongan Paha ayam yang juicy dan berbumbu, disajikan dengan nasi hangat yang telah dibumbu tiram. Paduan sempurna rasa gurih dan rempah yang membuatnya menjadi favorit."
            foodImageUrl="/menu-1.jpg"
            imageLeft={true}
          />
          <FoodContainer
            foodName="Minuman"
            foodDescription="Tersedia Teh Bunga, Teh Manis, Teh Tawar, dan sirup jeruk, baik dingin maupun panas."
          />
        </div>
      </div>
    </div>
  );
};

export default MenuContent;

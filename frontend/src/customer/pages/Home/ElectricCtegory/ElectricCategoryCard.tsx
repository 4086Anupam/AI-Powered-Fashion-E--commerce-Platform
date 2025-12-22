import React from "react";
import { HomeCategory } from "../../../../type/homeCategoryTypes";

const ElectricCategoryCard = ({ item }: { item: HomeCategory }) => {
  return (
    <div>
      {/* <img className='object-contain h-10' src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTdpi8j_Rd8BAOHJr6_2lr2zFa_XI4blrGTlYqYUYSLxTJ9nJrK2uopIDrA8DpOxfndv7jNbB5-kqca1kkoMPT_r1CJcvOskdVBnDSbmjDOkui-N4VzW_988g" alt="" />
        <h2 className='font-semibold text-m'>Loptop</h2> */}
      <img className="object-contain h-10" src={item.image} alt="" />
      <h2 className="font-semibold text-m">{item.name}</h2>
    </div>
  );
};

export default ElectricCategoryCard;

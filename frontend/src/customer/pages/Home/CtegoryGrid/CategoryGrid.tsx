// import React from "react";

// const CategoryGrid = () => {
//   return (
//     <div className="grid gap-4 grid-rows-12 grid-cols-12 lg:h=[600px] px-5 lg:px-20">
//       <div className="col-span-3 row-span-12 text-white ">
//         <img
//           className="w-full h-full object-cover object-top  rounded-md"
//           src="https://images.unsplash.com/photo-1654764746225-e63f5e90facd?ixlib=rb-4.1.0&fm=jpg&q=60&w=3000"
//           alt=""
//         />
//       </div>
//       <div className="col-span-2 row-span-6 text-white ">
//         <img
//           className="w-full h-full object-cover object-top  rounded-md"
//           src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13837166/2021/8/19/04e40e02-4c56-4705-94d0-f444b29973aa1629373611707-House-of-Pataudi-Women-Maroon-Embellished-Handcrafted-Wedges-1.jpg"
//           alt=""
//         />
//       </div>
//       <div className="col-span-4 row-span-6 text-white ">
//         <img
//           className="w-full h-full object-cover object-top  rounded-md"
//           src="https://t4.ftcdn.net/jpg/01/10/04/51/360_F_110045173_QgmA3gg5OwTlLNQBqmPdFnkh6sPvsvt8.jpg"
//           alt=""
//         />
//       </div>
//       <div className="col-span-3 row-span-12 text-white ">
//         <img
//           className="w-full h-full object-cover object-top  rounded-md"
//           src="https://shreeman.in/cdn/shop/files/20_3cfbd5a3-ecb6-482a-b798-7ffd9de1c784.jpg?v=1712061674&width=700"
//           alt=""
//         />
//       </div>

//       <div className="col-span-4 row-span-6 text-white ">
//         <img
//           className="w-full h-full object-cover object-top  rounded-md"
//           src="https://media.istockphoto.com/id/2135052737/photo/young-multiracial-rapper-acting-on-the-street.jpg?s=612x612&w=0&k=20&c=jSmhYb-tk-m6n_STVSUQfzwh8B0s38q3uQM4GCTZA2k="
//           alt=""
//         />
//       </div>
//       <div className="col-span-2 row-span-6 text-white ">
//         <img
//           className="w-full h-full object-cover object-top  rounded-md"
//           src="https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/2024/SEPTEMBER/3/paioXPum_7bbbdd2c194546c48db078ae975e880f.jpg"
//           alt=""
//         />
//       </div>
//     </div>
//   );
// };

// export default CategoryGrid;

import React from "react";

const categories = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1654764746225-e63f5e90facd?ixlib=rb-4.1.0&fm=jpg&q=60&w=3000",
    title: "Traditional Wear",
    colSpan: "lg:col-span-3 col-span-12",
    rowSpan: "lg:row-span-2",
  },
  {
    id: 2,
    src: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13837166/2021/8/19/04e40e02-4c56-4705-94d0-f444b29973aa1629373611707-House-of-Pataudi-Women-Maroon-Embellished-Handcrafted-Wedges-1.jpg",
    title: "Footwear",
    colSpan: "lg:col-span-2 col-span-6",
    rowSpan: "lg:row-span-1",
  },
  {
    id: 3,
    src: "https://t4.ftcdn.net/jpg/01/10/04/51/360_F_110045173_QgmA3gg5OwTlLNQBqmPdFnkh6sPvsvt8.jpg",
    title: "Accessories",
    colSpan: "lg:col-span-4 col-span-6",
    rowSpan: "lg:row-span-1",
  },
  {
    id: 4,
    src: "https://shreeman.in/cdn/shop/files/20_3cfbd5a3-ecb6-482a-b798-7ffd9de1c784.jpg?v=1712061674&width=700",
    title: "Men’s Collection",
    colSpan: "lg:col-span-3 col-span-12",
    rowSpan: "lg:row-span-2",
  },
  {
    id: 5,
    src: "https://media.istockphoto.com/id/2135052737/photo/young-multiracial-rapper-acting-on-the-street.jpg?s=612x612&w=0&k=20&c=jSmhYb-tk-m6n_STVSUQfzwh8B0s38q3uQM4GCTZA2k=",
    title: "Streetwear",
    colSpan: "lg:col-span-4 col-span-6",
    rowSpan: "lg:row-span-1",
  },
  {
    id: 6,
    src: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/2024/SEPTEMBER/3/paioXPum_7bbbdd2c194546c48db078ae975e880f.jpg",
    title: "Casuals",
    colSpan: "lg:col-span-2 col-span-6",
    rowSpan: "lg:row-span-1",
  },
];

const CategoryGrid = () => {
  return (
    <div className="px-6 lg:px-20 py-2 bg-white">
      <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center tracking-tight">
        Explore Our Collections
      </h2>

      <div className="grid grid-cols-12 gap-4 auto-rows-[250px] lg:auto-rows-[300px]">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className={`${cat.colSpan} ${cat.rowSpan} relative overflow-hidden rounded-2xl shadow-lg group`}
          >
            <img
              src={cat.src}
              alt={cat.title}
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-110"
            />
            {/* Lighter overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent group-hover:from-black/30 transition-all duration-500" />
            <div className="absolute bottom-4 left-4">
              <h3 className="text-white text-lg lg:text-xl font-semibold drop-shadow-lg">
                {cat.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;

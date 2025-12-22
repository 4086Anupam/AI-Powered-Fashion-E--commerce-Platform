import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { teal } from "@mui/material/colors";
import React, { useState, useEffect } from "react";
import { colors } from "../../../data/Filter/color";
import { price } from "../../../data/Filter/price";
import { discount } from "../../../data/Filter/discount";
import { useSearchParams } from "react-router-dom";

const FilterSection = () => {
  const [expandColor, setExpandColor] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  // Local UI state for selected filters (controlled inputs)
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedDiscount, setSelectedDiscount] = useState("");

  // Sync UI when URL params change
  useEffect(() => {
    setSelectedColor(searchParams.get("color") || "");
    setSelectedPrice(searchParams.get("price") || "");
    setSelectedDiscount(searchParams.get("discount") || "");
  }, [searchParams]);

  // Update filter params dynamically
  const updateFilterParams = (e: any) => {
    const { name, value } = e.target;
    if (value) {
      searchParams.set(name, value);
    } else {
      searchParams.delete(name);
    }
    setSearchParams(searchParams);
  };

  // Clear all filters
  const clearAllFilters = () => {
    searchParams.forEach((_, key) => searchParams.delete(key));
    setSearchParams(searchParams);

    // reset UI selections
    setSelectedColor("");
    setSelectedPrice("");
    setSelectedDiscount("");
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200">
        <p className="text-lg font-semibold text-gray-800 tracking-wide">
          Filters
        </p>
        <Button
          onClick={clearAllFilters}
          size="small"
          sx={{
            textTransform: "none",
            color: teal[600],
            fontWeight: "600",
            fontSize: "0.9rem",
          }}
        >
          Clear All
        </Button>
      </div>

      <div className="px-6 py-4 space-y-8">
        {/* Color Section */}
        <section>
          <FormControl component="fieldset" fullWidth>
            <FormLabel
              id="color"
              sx={{
                fontSize: "1rem",
                fontWeight: 700,
                color: teal[500],
                mb: 1.5,
              }}
            >
              Color
            </FormLabel>

            <RadioGroup
              name="color"
              aria-labelledby="color"
              value={selectedColor}
              onChange={updateFilterParams}
            >
              {colors.slice(0, expandColor ? colors.length : 6).map((item) => (
                <FormControlLabel
                  key={item.name}
                  value={item.hex}
                  control={<Radio size="small" color="primary" />}
                  label={
                    <div className="flex items-center gap-2">
                      <span>{item.name}</span>
                      <span
                        style={{ backgroundColor: item.hex }}
                        className={`h-4 w-4 rounded-full border ${
                          item.name === "white" ? "border-gray-300" : ""
                        }`}
                      ></span>
                    </div>
                  }
                />
              ))}
            </RadioGroup>

            {/* Expand button */}
            {colors.length > 6 && (
              <button
                onClick={() => setExpandColor(!expandColor)}
                className="text-sm text-teal-600 mt-2 hover:text-teal-800 font-medium"
              >
                {expandColor
                  ? "Hide colors"
                  : `+${colors.length - 6} more colors`}
              </button>
            )}
          </FormControl>
        </section>

        <Divider />

        {/* Price Section */}
        <section>
          <FormControl component="fieldset" fullWidth>
            <FormLabel
              id="price"
              sx={{
                fontSize: "1rem",
                fontWeight: 700,
                color: teal[500],
                mb: 1.5,
              }}
            >
              Price Range
            </FormLabel>

            <RadioGroup
              name="price"
              aria-labelledby="price"
              value={selectedPrice}
              onChange={updateFilterParams}
            >
              {price.map((item) => (
                <FormControlLabel
                  key={item.name}
                  value={item.value}
                  control={<Radio size="small" color="primary" />}
                  label={<span>{item.name}</span>}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </section>

        <Divider />

        {/* Discount Section */}
        <section>
          <FormControl component="fieldset" fullWidth>
            <FormLabel
              id="discount"
              sx={{
                fontSize: "1rem",
                fontWeight: 700,
                color: teal[500],
                mb: 1.5,
              }}
            >
              Discount
            </FormLabel>

            <RadioGroup
              name="discount"
              aria-labelledby="discount"
              value={selectedDiscount}
              onChange={updateFilterParams}
            >
              {discount.map((item) => (
                <FormControlLabel
                  key={item.name}
                  value={item.value}
                  control={<Radio size="small" color="primary" />}
                  label={<span>{item.name}</span>}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </section>
      </div>
    </div>
  );
};

export default FilterSection;

// import {
//   Button,
//   Divider,
//   FormControl,
//   FormControlLabel,
//   FormLabel,
//   Radio,
//   RadioGroup,
// } from "@mui/material";
// import { teal } from "@mui/material/colors";
// import React, { useState } from "react";
// import { colors } from "../../../data/Filter/color";
// import { useSearchParams } from "react-router-dom";
// import { price } from "../../../data/Filter/price";
// import { discount } from "../../../data/Filter/discount";

// const FilterSection = () => {
//   const [expendColor, setExpendColor] = useState(false);
//   const handleColorToggle = () => {
//     setExpendColor(!expendColor);
//   };
//   const [searchParams, setSearchParams] = useSearchParams();

//   const updateFilterParams = (e: any) => {
//     const { value, name } = e.target;
//     if (value) {
//       searchParams.set(name, value);
//     } else {
//       searchParams.delete(name);
//     }
//     setSearchParams(searchParams);
//   };

//   const clearAllFilters = () => {
//     console.log("clearAllFilters", searchParams);
//     searchParams.forEach((value: any, key: any) => {
//       searchParams.delete(key);
//     });
//     setSearchParams(searchParams);
//   };

//   return (
//     <div className="-z-50 space-y-5 bg-white">
//       <div className="flex items-center justify-between h-[40px] px-9 lg:border-r">
//         <p className="text-lg font-semibold">Filters</p>
//         <Button
//           onClick={clearAllFilters}
//           size="small"
//           className="text-teal-600 cursor-pointer font-semibold"
//         >
//           Clear All
//         </Button>
//       </div>

//       <Divider />
//       <div className="px-9 space-y-6">
//         <section>
//           <FormControl>
//             <FormLabel
//               sx={{
//                 fontSize: "16px",
//                 fontWeight: "bold",
//                 color: teal[500],
//                 pb: "14px",
//               }}
//               className="text-2xl font-semibold "
//               id="color"
//             >
//               Color
//             </FormLabel>
//             <RadioGroup
//               aria-labelledby="color"
//               defaultValue=""
//               name="color"
//               onChange={updateFilterParams}
//             >
//               {colors.slice(0, expendColor ? colors.length : 5).map((item) => (
//                 <FormControlLabel
//                   value={item.hex}
//                   control={<Radio />}
//                   label={
//                     <div className="flex items-center gap-3">
//                       <p>{item.name}</p>
//                       <p
//                         style={{ backgroundColor: item.hex }}
//                         className={`h-5 w-5 rounded-full ${
//                           item.name === "white" ? "border" : ""
//                         }`}
//                       ></p>
//                     </div>
//                   }
//                 />
//               ))}
//             </RadioGroup>
//           </FormControl>
//           <div>
//             <button
//               onClick={handleColorToggle}
//               className="text-primary-color cursor-pointer hover:text-teal-900 flex items-center"
//             >
//               {expendColor ? "hide" : `+${colors.length - 5} more`}
//             </button>
//           </div>
//         </section>
//         <Divider />
//         <section>
//           <FormControl>
//             <FormLabel
//               sx={{
//                 fontSize: "16px",
//                 fontWeight: "bold",
//                 pb: "14px",
//                 color: "teal[600]",
//               }}
//               className="text-2xl font-semibold"
//               id="price"
//             >
//               Price
//             </FormLabel>
//             <RadioGroup
//               name="price"
//               onChange={updateFilterParams}
//               aria-labelledby="price"
//               defaultValue=""
//             >
//               {price.map((item, index) => (
//                 <FormControlLabel
//                   key={item.name}
//                   value={item.value}
//                   control={<Radio size="small" />}
//                   label={item.name}
//                 />
//               ))}
//             </RadioGroup>
//           </FormControl>
//         </section>
//         <Divider />
//         <section>
//           <FormControl>
//             <FormLabel
//               sx={{
//                 fontSize: "16px",
//                 fontWeight: "bold",
//                 pb: "14px",
//                 color: "teal[600]",
//               }}
//               className="text-2xl font-semibold"
//               id="brand"
//             >
//               Discount
//             </FormLabel>
//             <RadioGroup
//               name="discount"
//               onChange={updateFilterParams}
//               aria-labelledby="brand"
//               defaultValue=""
//             >
//               {discount.map((item, index) => (
//                 <FormControlLabel
//                   key={item.name}
//                   value={item.value}
//                   control={<Radio size="small" />}
//                   label={item.name}
//                 />
//               ))}
//             </RadioGroup>
//           </FormControl>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default FilterSection;

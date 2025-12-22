// import { Delete } from "@mui/icons-material";
// import { Avatar, Box, Grid, IconButton, Rating } from "@mui/material";
// import { red } from "@mui/material/colors";
// import React from "react";

// const ReviewCard = () => {
//   return (
//     <div className=" rounded-lg p-4">
//       <Grid container alignItems="center" spacing={2}>
//         {/* Avatar Section */}
//         <Grid size={{ xs: 1 }}>
//           <Box display="flex" justifyContent="center">
//             <Avatar sx={{ width: 56, height: 56, bgcolor: "#9155FD" }}>
//               A
//             </Avatar>
//           </Box>
//         </Grid>

//         {/* Text Section */}
//         <Grid size={{ xs: 9 }}>
//           <div className="space-y-1">
//             <p className="font-semibold text-lg">Adarsha</p>
//             <p className="opacity-70 text-sm">24:24:24</p>
//           </div>
//           <Rating readOnly value={4.5} precision={0.5} />
//           <p>value for product, greate product</p>
//           <div>
//             <img
//               className="w-24 h-24 object-cover"
//               src="http://res.cloudinary.com/dxoqwusir/image/upload/v1727459152/purchased_product_b19fgy.jpg"
//               alt=""
//             />
//           </div>
//         </Grid>
//       </Grid>
//       <IconButton>
//         <Delete sx={{ color: red[700] }} />
//       </IconButton>
//     </div>
//   );
// };

// export default ReviewCard;

import { Delete } from "@mui/icons-material";
import { Avatar, Box, Grid, IconButton, Rating } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";

const ReviewCard = () => {
  return (
    <div className="relative  rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200 bg-white">
      <Grid container alignItems="flex-start" spacing={2}>
        {/* Avatar Section */}
        <Grid size={{ xs: 1 }}>
          <Box display="flex" justifyContent="center">
            <Avatar sx={{ width: 56, height: 56, bgcolor: "#9155FD" }}>
              A
            </Avatar>
          </Box>
        </Grid>

        {/* Text Section */}
        <Grid size={{ xs: 9 }}>
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <p className="font-semibold text-lg leading-none">Adarsha</p>
              <p className="text-xs text-gray-500">24:24:24</p>
            </div>
            <Rating readOnly value={4.5} precision={0.5} size="small" />
            <p className="text-gray-700 text-sm mt-1">
              Value for money, great product!
            </p>
            <div className="mt-2">
              <img
                className="w-24 h-24 rounded-md object-cover border"
                src="http://res.cloudinary.com/dxoqwusir/image/upload/v1727459152/purchased_product_b19fgy.jpg"
                alt="review"
              />
            </div>
          </div>
        </Grid>
      </Grid>

      <IconButton
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
          "&:hover": { bgcolor: "transparent", transform: "scale(1.1)" },
          transition: "all 0.2s ease",
        }}
      >
        <Delete sx={{ color: red[700] }} />
      </IconButton>
    </div>
  );
};

export default ReviewCard;

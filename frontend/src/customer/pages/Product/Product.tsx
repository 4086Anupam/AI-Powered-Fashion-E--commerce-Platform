// import React, { useEffect, useState } from "react";
// import FilterSection from "./FilterSection";
// import ProductCard from "./ProductCard";
// import {
//   Box,
//   Divider,
//   FormControl,
//   IconButton,
//   InputLabel,
//   MenuItem,
//   Pagination,
//   Select,
//   Typography,
//   Drawer,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material";
// import { FilterAlt } from "@mui/icons-material";
// import { useAppDispatch, useAppSelector } from "../../../State/Store";
// import {
//   fetchAllProduct,
//   fetchProductById,
// } from "../../../State/Customer/ProductSlice";
// import { useParams, useSearchParams } from "react-router-dom";
// import { Spline } from "lucide-react";
// import { menLevelThree } from "../../../data/category/level three/menLevelThree";
// import { colors } from "../../../data/Filter/color";

// const Product = () => {
//   const theme = useTheme();
//   const isLarge = useMediaQuery(theme.breakpoints.up("lg"));

//   const [sort, setSort] = useState("");
//   const [page, setPage] = useState(1);
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const dispatch = useAppDispatch();

//   const [searchParam, setSearchParam] = useSearchParams();

//   const { category } = useParams();

//   const product = useAppSelector((state) => state.product);

//   // console.log("category -----", category);
//   const categoryObj = menLevelThree.find(
//     (item) => item.categoryId === category
//   );

//   // console.log("Category Name ----", categoryObj?.name);
//   useEffect(() => {
//     const [minPrice, maxPrice] = searchParam.get("price")?.split("-") || [];
//     const color = searchParam.get("color");
//     const minDiscount = searchParam.get("discount")
//       ? Number(searchParam.get("discount"))
//       : undefined;
//     const pageNumber = page - 1;
//     console.log("color--------------------", color);
//     console.log("MinDiscount--------------------", minDiscount);
//     const colorObj = colors.find((item) => item.hex === color);

//     const newFilter = {
//       category: categoryObj?.categoryId,
//       color: colorObj?.name || "",
//       minPrice: minPrice ? Number(minPrice) : undefined,
//       maxPrice: maxPrice ? Number(maxPrice) : undefined,
//       minDiscount,
//       pageNumber,
//     };
//     dispatch(fetchAllProduct(newFilter));

//     // dispatch(fetchAllProduct({ category: categoryObj?.name }));
//   }, [category, searchParam]);

//   // const { categoryId } = useParams();
//   // // console.log("Category Name ----", categoryObj?.name);
//   // useEffect(() => {
//   //   dispatch(fetchAllProduct({ category: categoryId }));
//   // }, [categoryId]);

//   const handleSortChange = (event: any) => {
//     setSort(event.target.value);
//   };

//   const handlePageChange = (value: number) => {
//     setPage(value);
//   };

//   const toggleDrawer = (open: boolean) => {
//     setDrawerOpen(open);
//   };
//   console.log(product.product?.category?.parentCategory?.categoryId);

//   return (
//     <div className="mt-10">
//       {/* Title */}
//       <Typography
//         variant="h4"
//         align="center"
//         sx={{
//           fontWeight: 700,
//           color: "#374151",
//           mb: 4,
//           textTransform: "uppercase",
//           letterSpacing: 1,
//         }}
//       >
//         {product.product?.category?.parentCategory?.categoryId}
//       </Typography>

//       {/* Layout */}
//       <div className="lg:flex px-4 lg:px-10 gap-6">
//         {/* Sidebar Filter (Desktop) */}
//         <aside className="hidden lg:block w-[23%]">
//           <Box
//             sx={{
//               backgroundColor: "#fff",
//               borderRadius: 2,
//               boxShadow: "0px 1px 4px rgba(0,0,0,0.08)",
//               overflow: "hidden",
//             }}
//           >
//             <FilterSection />
//           </Box>
//         </aside>

//         {/* Main Product Grid */}
//         <main className="w-full lg:w-[77%]">
//           {/* Top Controls */}
//           <div className="flex justify-between items-center pb-3">
//             {/* Mobile Filter Icon */}
//             {!isLarge && (
//               <IconButton onClick={() => toggleDrawer(true)}>
//                 <FilterAlt fontSize="medium" />
//               </IconButton>
//             )}

//             {/* Sort Dropdown */}
//             <FormControl size="small" sx={{ width: 180 }}>
//               <InputLabel id="sort-select-label">Sort by</InputLabel>
//               <Select
//                 labelId="sort-select-label"
//                 id="sort-select"
//                 value={sort}
//                 label="Sort by"
//                 onChange={handleSortChange}
//               >
//                 <MenuItem value={"price_low"}>Price: Low → High</MenuItem>
//                 <MenuItem value={"price_high"}>Price: High → Low</MenuItem>
//               </Select>
//             </FormControl>
//           </div>

//           <Divider sx={{ mb: 4 }} />

//           {/* Product Grid */}
//           <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {/* {Array.from({ length: 12 }).map((_, i) => (
//               <ProductCard key={i} />
//             ))} */}
//             {product.products.map((item) => (
//               <ProductCard item={item} />
//             ))}
//           </section>

//           {/* Pagination */}
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               py: 6,
//             }}
//           >
//             <Pagination
//               page={page}
//               onChange={(e, value) => handlePageChange(value)}
//               count={10}
//               variant="outlined"
//               color="primary"
//               shape="rounded"
//               size={isLarge ? "medium" : "small"}
//             />
//           </Box>
//         </main>
//       </div>

//       {/* Drawer (Mobile Filter) */}
//       <Drawer
//         anchor="left"
//         open={drawerOpen}
//         onClose={() => toggleDrawer(false)}
//         PaperProps={{
//           sx: { width: 280, p: 2, backgroundColor: "#fff" },
//         }}
//       >
//         <Typography
//           variant="h6"
//           sx={{
//             fontWeight: 600,
//             mb: 1.5,
//             textAlign: "center",
//             color: "#0f766e",
//           }}
//         >
//           Filters
//         </Typography>
//         <Divider sx={{ mb: 2 }} />
//         <FilterSection />
//       </Drawer>
//     </div>
//   );
// };

// export default Product;

// import React, { useEffect, useState } from "react";
// import FilterSection from "./FilterSection";
// import ProductCard from "./ProductCard";
// import {
//   Box,
//   Divider,
//   FormControl,
//   IconButton,
//   InputLabel,
//   MenuItem,
//   Pagination,
//   Select,
//   Typography,
//   Drawer,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material";
// import { FilterAlt } from "@mui/icons-material";
// import { useAppDispatch, useAppSelector } from "../../../State/Store";
// import { fetchAllProduct } from "../../../State/Customer/ProductSlice";
// import { useParams, useSearchParams } from "react-router-dom";

// // ✅ Import both men & women categories
// import { menLevelThree } from "../../../data/category/level three/menLevelThree";
// import { womenLevelThree } from "../../../data/category/level three/womenLevelThree";
// import { colors } from "../../../data/Filter/color";

// const Product = () => {
//   const theme = useTheme();
//   const isLarge = useMediaQuery(theme.breakpoints.up("lg"));

//   const [sort, setSort] = useState("");
//   const [page, setPage] = useState(1);
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const dispatch = useAppDispatch();

//   const [searchParam] = useSearchParams();
//   const { category } = useParams();

//   const product = useAppSelector((state) => state.product);

//   // ✅ Detect which category data to use (men or women)
//   const currentPath = window.location.pathname.toLowerCase();
//   const isWomen = currentPath.includes("women");
//   const categoriesData = isWomen ? womenLevelThree : menLevelThree;

//   const categoryObj = categoriesData.find(
//     (item) => item.categoryId === category
//   );

//   // ✅ Fetch product on filters or category change
//   useEffect(() => {
//     const [minPrice, maxPrice] = searchParam.get("price")?.split("-") || [];
//     const color = searchParam.get("color");
//     const minDiscount = searchParam.get("discount")
//       ? Number(searchParam.get("discount"))
//       : undefined;
//     const pageNumber = page - 1;

//     const colorObj = colors.find((item) => item.hex === color);

//     const newFilter = {
//       category: categoryObj?.categoryId,
//       color: colorObj?.name || "",
//       minPrice: minPrice ? Number(minPrice) : undefined,
//       maxPrice: maxPrice ? Number(maxPrice) : undefined,
//       minDiscount,
//       pageNumber,
//     };

//     if (categoryObj?.categoryId) {
//       dispatch(fetchAllProduct(newFilter));
//     }
//   }, [category, searchParam, page, dispatch]);

//   const handleSortChange = (event: any) => {
//     setSort(event.target.value);
//   };

//   const handlePageChange = (value: number) => {
//     setPage(value);
//   };

//   const toggleDrawer = (open: boolean) => {
//     setDrawerOpen(open);
//   };

//   return (
//     <div className="mt-10">
//       {/* Title */}
//       <Typography
//         variant="h4"
//         align="center"
//         sx={{
//           fontWeight: 700,
//           color: "#374151",
//           mb: 4,
//           textTransform: "uppercase",
//           letterSpacing: 1,
//         }}
//       >
//         {categoryObj?.name || "Products"}
//       </Typography>

//       {/* Layout */}
//       <div className="lg:flex px-4 lg:px-10 gap-6">
//         {/* Sidebar Filter (Desktop) */}
//         <aside className="hidden lg:block w-[23%]">
//           <Box
//             sx={{
//               backgroundColor: "#fff",
//               borderRadius: 2,
//               boxShadow: "0px 1px 4px rgba(0,0,0,0.08)",
//               overflow: "hidden",
//             }}
//           >
//             <FilterSection />
//           </Box>
//         </aside>

//         {/* Main Product Grid */}
//         <main className="w-full lg:w-[77%]">
//           {/* Top Controls */}
//           <div className="flex justify-between items-center pb-3">
//             {/* Mobile Filter Icon */}
//             {!isLarge && (
//               <IconButton onClick={() => toggleDrawer(true)}>
//                 <FilterAlt fontSize="medium" />
//               </IconButton>
//             )}

//             {/* Sort Dropdown */}
//             <FormControl size="small" sx={{ width: 180 }}>
//               <InputLabel id="sort-select-label">Sort by</InputLabel>
//               <Select
//                 labelId="sort-select-label"
//                 id="sort-select"
//                 value={sort}
//                 label="Sort by"
//                 onChange={handleSortChange}
//               >
//                 <MenuItem value={"price_low"}>Price: Low → High</MenuItem>
//                 <MenuItem value={"price_high"}>Price: High → Low</MenuItem>
//               </Select>
//             </FormControl>
//           </div>

//           <Divider sx={{ mb: 4 }} />

//           {/* Product Grid */}
//           <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {product.products?.length > 0 ? (
//               product.products.map((item) => (
//                 <ProductCard key={item.id} item={item} />
//               ))
//             ) : (
//               <Typography
//                 variant="body1"
//                 align="center"
//                 sx={{ gridColumn: "1 / -1", py: 4, color: "gray" }}
//               >
//                 No products found.
//               </Typography>
//             )}
//           </section>

//           {/* Pagination */}
//           <Box sx={{ display: "flex", justifyContent: "center", py: 6 }}>
//             <Pagination
//               page={page}
//               onChange={(e, value) => handlePageChange(value)}
//               count={10}
//               variant="outlined"
//               color="primary"
//               shape="rounded"
//               size={isLarge ? "medium" : "small"}
//             />
//           </Box>
//         </main>
//       </div>

//       {/* Drawer (Mobile Filter) */}
//       <Drawer
//         anchor="left"
//         open={drawerOpen}
//         onClose={() => toggleDrawer(false)}
//         PaperProps={{
//           sx: { width: 280, p: 2, backgroundColor: "#fff" },
//         }}
//       >
//         <Typography
//           variant="h6"
//           sx={{
//             fontWeight: 600,
//             mb: 1.5,
//             textAlign: "center",
//             color: "#0f766e",
//           }}
//         >
//           Filters
//         </Typography>
//         <Divider sx={{ mb: 2 }} />
//         <FilterSection />
//       </Drawer>
//     </div>
//   );
// };

// export default Product;
import React, { useEffect, useState } from "react";
import FilterSection from "./FilterSection";
import ProductCard from "./ProductCard";
import {
  Box,
  Divider,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Typography,
  Drawer,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FilterAlt } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../../../State/Store";
import { fetchAllProduct } from "../../../State/Customer/ProductSlice";
import { useParams, useSearchParams } from "react-router-dom";

// ✅ Import all category data
import { menLevelThree } from "../../../data/category/level three/menLevelThree";
import { womenLevelThree } from "../../../data/category/level three/womenLevelThree";
import { electronicsLevelThree } from "../../../data/category/level three/electronicsLevelThree";
import { furnitureLevelThree } from "../../../data/category/level three/furnitureLevelThree";

import { colors } from "../../../data/Filter/color";

const Product = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));

  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const dispatch = useAppDispatch();

  const [searchParam] = useSearchParams();
  const { category } = useParams();
  const product = useAppSelector((state) => state.product);

  // ✅ Detect which main category is active (robust for all)
  const currentPath = window.location.pathname.toLowerCase();

  const categoryMap: Record<string, any[]> = {
    men: menLevelThree,
    women: womenLevelThree,
    electronics: electronicsLevelThree,
    furniture: furnitureLevelThree,
  };

  let mainCategoryKey = "men"; // default fallback

  for (const key of Object.keys(categoryMap)) {
    if (
      currentPath.includes(`/${key}`) || // e.g. /women, /electronics
      category?.startsWith(`${key}_`) || // e.g. women_tops, furniture_bedroom
      category === key // exact match
    ) {
      mainCategoryKey = key;
      break;
    }
  }

  const categoriesData = categoryMap[mainCategoryKey];

  // Find the current category object from level-three data
  const categoryObj = categoriesData.find(
    (item) => item.categoryId === category
  );

  // ✅ Fetch products when category, filters, or page changes
  useEffect(() => {
    const [minPrice, maxPrice] = searchParam.get("price")?.split("-") || [];
    const color = searchParam.get("color");
    const minDiscount = searchParam.get("discount")
      ? Number(searchParam.get("discount"))
      : undefined;
    const pageNumber = page - 1;

    const colorObj = colors.find((item) => item.hex === color);

    const newFilter = {
      category: categoryObj?.categoryId,
      color: colorObj?.name || "",
      minPrice: minPrice ? Number(minPrice) : undefined,
      maxPrice: maxPrice ? Number(maxPrice) : undefined,
      minDiscount,
      pageNumber,
    };

    if (categoryObj?.categoryId) {
      dispatch(fetchAllProduct(newFilter));
    }
  }, [category, searchParam, page, dispatch]);

  const handleSortChange = (event: any) => {
    setSort(event.target.value);
  };

  const handlePageChange = (value: number) => {
    setPage(value);
  };

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  return (
    <div className="mt-10">
      {/* Title */}
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontWeight: 700,
          color: "#374151",
          mb: 4,
          textTransform: "uppercase",
          letterSpacing: 1,
        }}
      >
        {categoryObj?.name || "Products"}
      </Typography>

      {/* Layout */}
      <div className="lg:flex px-4 lg:px-10 gap-6">
        {/* Sidebar Filter (Desktop) */}
        <aside className="hidden lg:block w-[23%]">
          <Box
            sx={{
              backgroundColor: "#fff",
              borderRadius: 2,
              boxShadow: "0px 1px 4px rgba(0,0,0,0.08)",
              overflow: "hidden",
            }}
          >
            <FilterSection />
          </Box>
        </aside>

        {/* Main Product Grid */}
        <main className="w-full lg:w-[77%]">
          {/* Top Controls */}
          <div className="flex justify-between items-center pb-3">
            {/* Mobile Filter Icon */}
            {!isLarge && (
              <IconButton onClick={() => toggleDrawer(true)}>
                <FilterAlt fontSize="medium" />
              </IconButton>
            )}

            {/* Sort Dropdown */}
            <FormControl size="small" sx={{ width: 180 }}>
              <InputLabel id="sort-select-label">Sort by</InputLabel>
              <Select
                labelId="sort-select-label"
                id="sort-select"
                value={sort}
                label="Sort by"
                onChange={handleSortChange}
              >
                <MenuItem value={"price_low"}>Price: Low → High</MenuItem>
                <MenuItem value={"price_high"}>Price: High → Low</MenuItem>
              </Select>
            </FormControl>
          </div>

          <Divider sx={{ mb: 4 }} />

          {/* Product Grid */}
          <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {product.products?.length > 0 ? (
              product.products.map((item) => (
                <ProductCard key={item.id} item={item} />
              ))
            ) : (
              <Typography
                variant="body1"
                align="center"
                sx={{ gridColumn: "1 / -1", py: 4, color: "gray" }}
              >
                No products found.
              </Typography>
            )}
          </section>

          {/* Pagination */}
          <Box sx={{ display: "flex", justifyContent: "center", py: 6 }}>
            <Pagination
              page={page}
              onChange={(e, value) => handlePageChange(value)}
              count={10}
              variant="outlined"
              color="primary"
              shape="rounded"
              size={isLarge ? "medium" : "small"}
            />
          </Box>
        </main>
      </div>

      {/* Drawer (Mobile Filter) */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
        PaperProps={{
          sx: { width: 280, p: 2, backgroundColor: "#fff" },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            mb: 1.5,
            textAlign: "center",
            color: "#0f766e",
          }}
        >
          Filters
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <FilterSection />
      </Drawer>
    </div>
  );
};

export default Product;

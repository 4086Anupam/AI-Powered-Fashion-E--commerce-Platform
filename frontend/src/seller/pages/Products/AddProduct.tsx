import { AddPhotoAlternate, Close } from "@mui/icons-material";
import {
  Button,
  CircularProgress,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { uploadToCloudinary } from "../../../Util/uploadToCloudinary";
import { menLevelThree } from "../../../data/category/level three/menLevelThree";
import { womenLevelThree } from "../../../data/category/level three/womenLevelThree";
import { furnitureLevelTwo } from "../../../data/category/level two/furnitureLevelTwo";
import { womenLevelTwo } from "../../../data/category/level two/womenLevelTwo";
import { menLevelTwo } from "../../../data/category/level two/menLevelTwo";
import { electronicsLevelTwo } from "../../../data/category/level two/electronicsLevelTwo";
import { furnitureLevelThree } from "../../../data/category/level three/furnitureLevelThree";
import { electronicsLevelThree } from "../../../data/category/level three/electronicsLevelThree";
import { colors } from "../../../data/Filter/color"; // ✅ colors imported
import { mainCategory } from "../../../data/category/mainCategory"; // ✅ your top-level categories
import { useAppDispatch } from "../../../State/Store";
import { createProduct } from "../../../State/Seller/SellerProductSlice";

// // ✅ category mapping
// const categoryTwo: { [key: string]: any[] } = {
//   men: menLevelTwo,
//   women: womenLevelTwo,
//   home_furniture: furnitureLevelTwo,
//   electronics: electronicsLevelTwo,
// };

// const categoryThree: { [key: string]: any[] } = {
//   men: menLevelThree,
//   women: womenLevelThree,
//   home_furniture: furnitureLevelThree,
//   electronics: electronicsLevelThree,
// };

const categoryTwo: { [key: string]: any[] } = {
  men: menLevelTwo,
  women: womenLevelTwo,
  furniture: furnitureLevelTwo, // ✅ changed
  electronics: electronicsLevelTwo,
};

const categoryThree: { [key: string]: any[] } = {
  men: menLevelThree,
  women: womenLevelThree,
  furniture: furnitureLevelThree, // ✅ changed
  electronics: electronicsLevelThree,
};

const AddProduct = () => {
  const [uploadImage, setUploadingImage] = useState(false);
  const [snackbarOpen, setOpenSnackbar] = useState(false);
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      mrpPrice: "",
      sellingPrice: "",
      quantity: "",
      color: "",
      images: [],
      category: "",
      category2: "",
      category3: "",
      sizes: "",
    },
    // validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      dispatch(
        createProduct({ request: values, jwt: localStorage.getItem("jwt") })
      );
    },
  });

  const handleImageChange = async (event: any) => {
    const file = event.target.files[0];
    setUploadingImage(true);
    const image = await uploadToCloudinary(file);
    formik.setFieldValue("images", [...formik.values.images, image]);
    setUploadingImage(false);
  };

  const handleRemoveImage = (index: number) => {
    const updatedImages = [...formik.values.images];
    updatedImages.splice(index, 1);
    formik.setFieldValue("images", updatedImages);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="space-y-4 p-4">
        <Grid container spacing={2}>
          {/* Image upload */}
          <Grid className="flex flex-wrap gap-5" size={{ xs: 12 }}>
            <input
              type="file"
              accept="image/*"
              id="fileInput"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
            <label className="relative" htmlFor="fileInput">
              <span className="w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md border-gray-400">
                <AddPhotoAlternate className="text-gray-700" />
              </span>
              {uploadImage && (
                <div className="absolute inset-0 w-24 h-24 flex justify-center items-center bg-white/60">
                  <CircularProgress />
                </div>
              )}
            </label>
            <div className="flex flex-wrap gap-2">
              {formik.values.images.map((image, index) => (
                <div
                  key={index}
                  className="relative w-24 h-24 rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all"
                >
                  <img
                    src={image}
                    alt={`Product Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <IconButton
                    onClick={() => handleRemoveImage(index)}
                    size="small"
                    color="error"
                    sx={{
                      position: "absolute",
                      top: 2,
                      right: 2,
                      backgroundColor: "white",
                      boxShadow: 1,
                      "&:hover": {
                        backgroundColor: "#fee2e2",
                      },
                    }}
                  >
                    <Close sx={{ fontSize: "1rem" }} />
                  </IconButton>
                </div>
              ))}
            </div>
          </Grid>

          {/* Title */}
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              id="title"
              name="title"
              label="Title"
              value={formik.values.title}
              onChange={formik.handleChange}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
              required
            />
          </Grid>

          {/* Description */}
          <Grid size={{ xs: 12 }}>
            <TextField
              multiline
              rows={4}
              fullWidth
              id="description"
              name="description"
              label="Description"
              value={formik.values.description}
              onChange={formik.handleChange}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
              required
            />
          </Grid>

          {/* MRP */}
          <Grid size={{ xs: 12, md: 4, lg: 3 }}>
            <TextField
              fullWidth
              id="mrpPrice"
              name="mrpPrice"
              label="MRP Price"
              type="number"
              value={formik.values.mrpPrice}
              onChange={formik.handleChange}
              error={formik.touched.mrpPrice && Boolean(formik.errors.mrpPrice)}
              helperText={formik.touched.mrpPrice && formik.errors.mrpPrice}
              required
            />
          </Grid>

          {/* Selling Price */}
          <Grid size={{ xs: 12, md: 4, lg: 3 }}>
            <TextField
              fullWidth
              id="sellingPrice"
              name="sellingPrice"
              label="Selling Price"
              type="number"
              value={formik.values.sellingPrice}
              onChange={formik.handleChange}
              error={
                formik.touched.sellingPrice &&
                Boolean(formik.errors.sellingPrice)
              }
              helperText={
                formik.touched.sellingPrice && formik.errors.sellingPrice
              }
              required
            />
          </Grid>

          {/* Sizes */}
          <Grid size={{ xs: 12, md: 4, lg: 3 }}>
            <FormControl
              fullWidth
              error={formik.touched.sizes && Boolean(formik.errors.sizes)}
              required
            >
              <InputLabel id="size-label">Sizes</InputLabel>
              <Select
                labelId="size-label"
                id="sizes"
                name="sizes"
                value={formik.values.sizes}
                onChange={formik.handleChange}
                label="Sizes"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {["XS", "S", "M", "L", "XL", "XXL"].map((size, index) => (
                  <MenuItem key={index} value={size}>
                    {size}
                  </MenuItem>
                ))}
              </Select>
              {formik.touched.sizes && formik.errors.sizes && (
                <FormHelperText>{formik.errors.sizes}</FormHelperText>
              )}
            </FormControl>
          </Grid>

          {/* Color */}
          <Grid size={{ xs: 12, md: 4, lg: 3 }}>
            <FormControl
              fullWidth
              error={formik.touched.color && Boolean(formik.errors.color)}
              required
            >
              <InputLabel id="color-label">Color</InputLabel>
              <Select
                labelId="color-label"
                id="color"
                name="color"
                value={formik.values.color}
                onChange={formik.handleChange}
                label="Color"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {colors.map((color, index) => (
                  <MenuItem key={index} value={color.name}>
                    <div className="flex gap-3 items-center">
                      <span
                        style={{ backgroundColor: color.hex }}
                        className={`h-5 w-5 rounded-full ${
                          color.name === "White" ? "border" : ""
                        }`}
                      ></span>
                      <p>{color.name}</p>
                    </div>
                  </MenuItem>
                ))}
              </Select>
              {formik.touched.color && formik.errors.color && (
                <FormHelperText>{formik.errors.color}</FormHelperText>
              )}
            </FormControl>
          </Grid>

          {/* Category (Main) */}
          <Grid size={{ xs: 12, md: 4, lg: 4 }}>
            <FormControl
              fullWidth
              error={formik.touched.category && Boolean(formik.errors.category)}
              required
            >
              <InputLabel id="category-label">Main Category</InputLabel>
              <Select
                labelId="category-label"
                id="category"
                name="category"
                value={formik.values.category}
                onChange={(e) => {
                  formik.handleChange(e);
                  formik.setFieldValue("category2", "");
                  formik.setFieldValue("category3", "");
                }}
                label="Main Category"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>

                {/* ✅ Now categories come from mainCategory */}
                {mainCategory.map((cat: any) => (
                  <MenuItem key={cat.categoryId} value={cat.categoryId}>
                    {cat.name}
                  </MenuItem>
                ))}
              </Select>
              {formik.touched.category && formik.errors.category && (
                <FormHelperText>{formik.errors.category}</FormHelperText>
              )}
            </FormControl>
          </Grid>

          {/* Second Category (Level 2) */}
          <Grid size={{ xs: 12, md: 4, lg: 4 }}>
            <FormControl
              fullWidth
              error={
                formik.touched.category2 && Boolean(formik.errors.category2)
              }
              required
              disabled={!formik.values.category}
            >
              <InputLabel id="category2-label">Second Category</InputLabel>
              <Select
                labelId="category2-label"
                id="category2"
                name="category2"
                value={formik.values.category2}
                onChange={(e) => {
                  formik.handleChange(e);
                  formik.setFieldValue("category3", "");
                }}
                label="Second Category"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>

                {(categoryTwo[formik.values.category.toLowerCase()] || []).map(
                  (cat: any) => (
                    <MenuItem key={cat.categoryId} value={cat.categoryId}>
                      {cat.name}
                    </MenuItem>
                  )
                )}
              </Select>
              {formik.touched.category2 && formik.errors.category2 && (
                <FormHelperText>{formik.errors.category2}</FormHelperText>
              )}
            </FormControl>
          </Grid>

          {/* ✅ Third Category (Level 3) */}
          <Grid size={{ xs: 12, md: 4, lg: 4 }}>
            <FormControl
              fullWidth
              error={
                formik.touched.category3 && Boolean(formik.errors.category3)
              }
              required
              disabled={!formik.values.category2}
            >
              <InputLabel id="category3-label">Third Category</InputLabel>
              <Select
                labelId="category3-label"
                id="category3"
                name="category3"
                value={formik.values.category3}
                onChange={formik.handleChange}
                label="Third Category"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>

                {(categoryThree[formik.values.category.toLowerCase()] || [])
                  .filter((cat: any) => {
                    const selectedCategory2 = (
                      categoryTwo[formik.values.category.toLowerCase()] || []
                    ).find(
                      (c: any) => c.categoryId === formik.values.category2
                    ); // ✅ FIXED
                    return (
                      cat.parentCategoryId === selectedCategory2?.categoryId
                    );
                  })
                  .map((cat: any) => (
                    <MenuItem key={cat.categoryId} value={cat.categoryId}>
                      {cat.name}
                    </MenuItem>
                  ))}
              </Select>
              {formik.touched.category3 && formik.errors.category3 && (
                <FormHelperText>{formik.errors.category3}</FormHelperText>
              )}
            </FormControl>
          </Grid>

          {/* Submit */}
          <Grid size={{ xs: 12 }}>
            <Button
              sx={{ p: "14px" }}
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
            >
              {false ? (
                <CircularProgress
                  size="small"
                  sx={{ width: "27px", height: "27px" }}
                />
              ) : (
                "Add Product"
              )}
            </Button>
          </Grid>
        </Grid>
      </form>

      {/* Snackbar (commented intentionally) */}
      {/* 
      <Snackbar
        anchororigin={{ vertical: "top", horizontal: "right" }}
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={sellerProduct.error ? "error" : "success"}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {sellerProduct.error
            ? sellerProduct.error
            : "Product created successfully"}
        </Alert>
      </Snackbar> 
      */}
    </div>
  );
};

export default AddProduct;

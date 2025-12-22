import React, { useEffect } from "react";
import {
  AddShoppingCart,
  FavoriteBorder,
  LocalShipping,
  Shield,
  Wallet,
  WorkspacePremium,
  Remove,
} from "@mui/icons-material";
import { Button, Divider } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { teal } from "@mui/material/colors";
import SimilarProduct from "./SimilarProduct";
import ReviewCard from "../Review/ReviewCard";
import { useAppDispatch, useAppSelector } from "../../../State/Store";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../../../State/Customer/ProductSlice";
import { string } from "yup";
import {
  addItemToCart,
  fetchUserCart,
} from "../../../State/Customer/CartSlice";

const ProductDetails = () => {
  const [quantity, setQuantity] = React.useState(1);
  const product = useAppSelector((state) => state.product);
  const [selectedImage, setSelectedImage] = React.useState(
    "http://res.cloudinary.com/dxoqwusir/image/upload/v1727451205/SoftSilkZariBanarasiSaree_4_fyohzg.jpg"
  );
  const { productId } = useParams();
  const dispatch = useAppDispatch();
  // const { jwt } = useAppSelector((state) => state.auth);
  useEffect(() => {
    if (productId) {
      // ✅ ensures it's defined
      console.log("productId:", productId);
      dispatch(fetchProductById(productId));
    }
  }, [productId, dispatch]);

  useEffect(() => {
    const firstImage = product.product?.images?.[0];
    if (firstImage) {
      setSelectedImage(firstImage);
    }
  }, [product.product]);

  const handleAddToCart = () => {
    const jwt = localStorage.getItem("jwt") || "";
    if (!product.product || !jwt) {
      alert("Please log in first or select a valid product");
      return;
    }

    const request = {
      productId: product.product.id,
      size: "M", // you can make this dynamic if user chooses size
      quantity: quantity,
    };

    console.log("Adding to cart:", request);
    dispatch(addItemToCart({ jwt, request }))
      .unwrap()
      .then(() => {
        console.log("✅ Item added to cart");
        dispatch(fetchUserCart(jwt)); // refresh user cart after adding
      })
      .catch((err) => {
        console.error("❌ Failed to add item to cart:", err);
      });
  };

  return (
    <div className="px-5 lg:px-20 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* ---------- Left Section: Images ---------- */}
        <section className="flex flex-col lg:flex-row gap-5">
          <div className="flex lg:flex-col gap-3 w-full lg:w-[15%]">
            {product.product?.images.map((img) => (
              <img
                // key={i}
                src={img}
                alt=""
                onClick={() => setSelectedImage(img)}
                className={`rounded-lg cursor-pointer border-2 ${
                  selectedImage === img
                    ? "border-teal-500"
                    : "border-transparent"
                } hover:border-teal-300 transition-all`}
              />
            ))}
          </div>

          <div className="w-full lg:w-[85%]">
            {/* <img
              src={selectedImage}
              alt="Main Product"
              className="w-full rounded-xl shadow-md"
            /> */}

            <img
              src={selectedImage}
              alt="Main Product"
              className="w-full max-w-[80%] rounded-xl shadow-md mx-auto"
            />

            {/* <img
              src={selectedImage}
              alt="Main Product"
              className="w-full h-[450px] object-contain rounded-xl shadow-md"
            /> */}
          </div>
        </section>

        {/* ---------- Right Section: Details ---------- */}
        <section>
          <h1 className="font-bold text-xl text-primary-color">
            {product.product?.seller?.businessDetails.businessName}
          </h1>
          <p className="text-gray-500 font-medium text-base">
            {product.product?.title}
          </p>

          {/* Ratings */}
          <div className="flex items-center gap-3 py-2 border w-fit px-3 mt-3 rounded-md">
            <div className="flex items-center gap-1">
              <span>4</span>
              <StarIcon sx={{ color: teal[500], fontSize: "17px" }} />
            </div>
            <Divider orientation="vertical" flexItem />
            <span className="text-sm text-gray-600">2234 ratings</span>
          </div>

          {/* Price Section */}
          <div className="mt-5">
            <div className="flex items-center gap-3 text-2xl">
              <span className="font-bold text-gray-800">
                ₹{product.product?.sellingPrice}
              </span>
              <span className="line-through text-gray-400 text-sm">
                ₹{product.product?.mrpPrice}
              </span>
              <span className="text-teal-600 font-semibold text-sm">
                {product.product?.discountPercent}% OFF
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              {product.product?.description}
            </p>
          </div>

          {/* Offers */}
          <div className="mt-6 space-y-3">
            {[
              { icon: Shield, text: "1 Year Brand Warranty" },
              {
                icon: WorkspacePremium,
                text: "5% cashback on Axis Bank cards",
              },
              { icon: LocalShipping, text: "Free delivery within 3 days" },
              { icon: Wallet, text: "Pay later options available" },
            ].map(({ icon: Icon, text }, i) => (
              <div key={i} className="flex items-center gap-3 text-sm">
                <Icon sx={{ color: teal[500] }} />
                <p>{text}</p>
              </div>
            ))}
          </div>

          {/* Quantity */}
          <div className="mt-8">
            <h1 className="text-sm font-semibold mb-2">QUANTITY</h1>
            <div className="flex items-center gap-3 border rounded-md w-fit px-2">
              <Button
                disabled={quantity === 1}
                onClick={() => setQuantity(quantity - 1)}
              >
                <Remove />
              </Button>
              <span className="px-3">{quantity}</span>
              <Button onClick={() => setQuantity(quantity + 1)}>
                <AddShoppingCart />
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <Button
              fullWidth
              variant="contained"
              startIcon={<AddShoppingCart />}
              sx={{ py: "0.9rem" }}
              onClick={handleAddToCart}
            >
              Add to Bag
            </Button>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<FavoriteBorder />}
              sx={{ py: "0.9rem" }}
            >
              Add to Wishlist
            </Button>
          </div>

          {/* Description */}
          <div className="mt-6 text-gray-600 text-sm leading-6">
            Enjoy immersive viewing with the Egate Atom 3X projector that has a
            Full HD 1080p screen, 4K decoding, and HDR for a 533.4 cm (210”)
            display. Android 13, Wi-Fi 6, and pre-installed apps such as Netflix
            ensure uninterrupted streaming. Auto keystone, 180° rotatable stand,
            and 300 ISO brightness provide clarity anywhere.
          </div>
          <div className="mt-5">
            <ReviewCard />
          </div>
        </section>
      </div>

      {/* Similar Products */}
      <div className="mt-20">
        <h1 className="text-lg font-bold mb-6">Similar Products</h1>
        <SimilarProduct />
      </div>
    </div>
  );
};

export default ProductDetails;

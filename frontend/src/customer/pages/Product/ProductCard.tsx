import React, { useEffect, useState } from "react";
import "./ProductCard.css";
import { Button } from "@mui/material";
import { Favorite, ModeComment } from "@mui/icons-material";
import { teal } from "@mui/material/colors";
import { Product } from "../../../type/ProductTypes";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../State/Store";
import { addProductToWishlist } from "../../../State/Customer/wishlistSlice";

const ProductCard = ({ item }: { item: Product }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const wishlist = useAppSelector((state) => state.product);
  // useEffect(() => {
  //   dispatch(getWishlistByUserId());
  // }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isHovered) {
      interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % item.images.length);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovered]);

  const handleWishlist = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    item.id && dispatch(addProductToWishlist({ productId: item.id }));
  };

  return (
    <div
      onClick={() =>
        navigate(
          `/product-details/${item.category?.categoryId}/${item.title}/${item.id}`
        )
      }
      className="group product-card-container cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card relative">
        {item.images.map((src, index) => (
          <img
            key={index}
            className="card-media"
            style={{
              transform: `translateX(${(index - currentImage) * 100}%)`,
            }}
            src={src}
            alt="product"
          />
        ))}

        {isHovered && (
          <div className="indicator flex flex-col items-center gap-3">
            <div className="flex gap-3">
              <Button
                onClick={(e) => handleWishlist(e)}
                size="small"
                variant="contained"
                sx={{ background: "white", minWidth: 40, height: 40 }}
              >
                <Favorite color="primary" />
              </Button>
              <Button
                size="small"
                variant="contained"
                sx={{ background: "white", minWidth: 40, height: 40 }}
              >
                <ModeComment color="primary" />
              </Button>
            </div>
          </div>
        )}
      </div>

      <div className="details space-y-1 group-hover-effect rounded-md">
        <div className="name">
          <h1 className="font-semibold text-gray-800 text-base">
            {item.seller?.businessDetails.businessName}
          </h1>
          <p className="text-gray-500 text-sm">{item.title}</p>
        </div>
        <div className="price flex items-center gap-3">
          <span className="font-bold text-gray-800 text-lg">
            ₹{item.sellingPrice}
          </span>
          <span className="thin-line-through text-gray-400 text-sm">
            ₹{item.mrpPrice}
          </span>
          <span className="text-teal-600 font-semibold text-sm">
            {item.discountPercent}% OFF
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

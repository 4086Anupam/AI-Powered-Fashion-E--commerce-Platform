import React, { useEffect } from "react";
import WishlistCard from "./WishlistCard";
import { useAppDispatch, useAppSelector } from "../../../State/Store";
import { getWishlistByUserId } from "../../../State/Customer/wishlistSlice";

const WishList = () => {
  const dispatch = useAppDispatch();
  const wishlist = useAppSelector((state) => state.wishlist);
  useEffect(() => {
    dispatch(getWishlistByUserId());
  }, []);
  return (
    <div className=" h-[90vh] p-5 lg:p-20">
      <section>
        <h1>
          <strong>My Wishlist</strong>{" "}
          {wishlist.wishlist?.products?.length || 0} items
        </h1>
        <div className=" pt-10 flex flex-wrap gap-5">
          {wishlist.wishlist?.products.map((item) => (
            <WishlistCard item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default WishList;

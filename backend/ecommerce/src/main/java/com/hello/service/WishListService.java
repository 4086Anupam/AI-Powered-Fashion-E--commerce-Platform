package com.hello.service;

import com.hello.model.Product;
import com.hello.model.User;
import com.hello.model.Wishlist;

public interface WishListService {

    Wishlist createWishList(User user);
    Wishlist getWishListByUserId(User user);
    Wishlist addProductToWishList(User user, Product product);
}

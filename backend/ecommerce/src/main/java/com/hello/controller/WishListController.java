package com.hello.controller;

import com.hello.model.Product;
import com.hello.model.User;
import com.hello.model.Wishlist;
import com.hello.service.ProductService;
import com.hello.service.UserService;
import com.hello.service.WishListService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/wishlist")
public class WishListController {
    private final WishListService wishListService;
    private final UserService userService;
    private final ProductService productService;

    @GetMapping
    public ResponseEntity<Wishlist> getWishlistByUserId(
            @RequestHeader("Authorization") String jwt) throws Exception {
            User user = userService.findUserByJwtToken(jwt);
            Wishlist wishlist = wishListService.getWishListByUserId(user);
            return ResponseEntity.ok(wishlist);
    }

    @PostMapping("/add-product/{productId}")
    public ResponseEntity<Wishlist> addProductToWishlist(
            @PathVariable Long productId,
            @RequestHeader("Authorization") String jwt) throws Exception
    {
        Product product = productService.findProductById(productId);
        User user = userService.findUserByJwtToken(jwt);
        Wishlist updatedWishlist = wishListService.addProductToWishList(
                user,
                product
        );
        return ResponseEntity.ok(updatedWishlist);
    }

}

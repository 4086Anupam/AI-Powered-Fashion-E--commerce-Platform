package com.hello.service;

import com.hello.model.Cart;
import com.hello.model.CartItem;
import com.hello.model.Product;
import com.hello.model.User;

public interface CartService {
    public CartItem addCartItem(
            User user,
            Product product,
            String size,
            int quantity
    );
    public Cart findUserCart(User user);

}

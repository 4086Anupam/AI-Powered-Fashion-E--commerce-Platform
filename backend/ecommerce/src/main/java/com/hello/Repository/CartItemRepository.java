package com.hello.Repository;

import com.hello.model.Cart;
import com.hello.model.CartItem;
import com.hello.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartItemRepository extends JpaRepository<CartItem,Long> {
    CartItem findByCartAndProductAndSize(Cart cart, Product product, String  size);
}

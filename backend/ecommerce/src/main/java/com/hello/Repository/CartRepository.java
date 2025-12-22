package com.hello.Repository;

import com.hello.model.Cart;
import com.hello.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository extends JpaRepository<Cart,Long> {
    Cart findByUser(User user);
    Cart findByUserId(Long userId);

}

package com.hello.service;

import com.hello.domain.OrderStatus;
import com.hello.model.*;

import java.util.List;
import java.util.Set;

public interface OrderService {
    Set<Order> createOrder(User user, Address shippingAddress, Cart cart);
    Order findOrderById(Long id) throws Exception;
    List<Order> userOrderHistory(Long userId);
    List<Order> sellerOrder(Long sellerId);
    Order updateOderStatus(Long orderId, OrderStatus orderStatus) throws Exception;
    Order cancleOrder(Long orderId,User user) throws Exception;

    OrderItem getOrderItemById(Long id) throws Exception;
}

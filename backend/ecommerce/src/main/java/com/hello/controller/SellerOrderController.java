package com.hello.controller;

import com.hello.domain.OrderStatus;
import com.hello.model.Order;
import com.hello.model.Seller;
import com.hello.service.OrderService;
import com.hello.service.SellerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/seller/orders")
public class SellerOrderController {
    private final OrderService orderService;
    private final SellerService sellerService;

    @GetMapping()
    public ResponseEntity<List<Order>> getAllOrdersHandler(
            @RequestHeader("Authorization") String jwt
    ) throws Exception {
        // Get the seller's profile using the JWT
        Seller seller = sellerService.getSellerProfile(jwt);

        // Get all orders for the seller using their ID
        List<Order> orders = orderService.sellerOrder(seller.getId());

        // Return the list of orders with an HTTP status of ACCEPTED
        return new ResponseEntity<>(orders, HttpStatus.ACCEPTED);
    }
    @PatchMapping("/{orderId}/status/{orderStatus}")
    public ResponseEntity<Order> updateOrderHandler(
            @RequestHeader("Authorization") String jwt,
            @PathVariable Long orderId,
            @PathVariable OrderStatus orderStatus
    ) throws Exception {

        Order order=orderService.updateOderStatus(orderId, orderStatus);

        return new ResponseEntity<>(order, HttpStatus.ACCEPTED);
    }
    @DeleteMapping("/{orderId}/delete")
    public ResponseEntity<String> deleteOrderHandler(
            @RequestHeader("Authorization") String jwt,
            @PathVariable Long orderId
    ) throws Exception {
        Order order = orderService.findOrderById(orderId);
        orderService.updateOderStatus(orderId, OrderStatus.CANCELLED);
        return new ResponseEntity<>("Order deleted successfully", HttpStatus.OK);
    }

}

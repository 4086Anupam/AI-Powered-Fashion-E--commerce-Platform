package com.hello.service.impl;

import com.hello.Repository.AddressRepository;
import com.hello.Repository.OrderItemRepository;
import com.hello.Repository.OrderRepository;
import com.hello.domain.OrderStatus;
import com.hello.domain.PaymentStatus;
import com.hello.model.*;
import com.hello.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;
    private final AddressRepository addressRepository;
    private final OrderItemRepository orderItemRepository;


//    @Override
//    public Set<Order> createOrder(User user, Address shippingAddress, Cart cart) {
//        if (!user.getAddresses().contains(shippingAddress)){
//            user.getAddresses().add(shippingAddress);
//        }
//        Address address=addressRepository.save(shippingAddress);
//
//        // brand 1 => 4 shirts
//        // brand 2 => 3 pants
//        // brand 3 => 1 watch
//        Map<Long, List<CartItem>> itemsBySeller = cart.getCarItems().stream()
//                .collect(Collectors.groupingBy(item->item.getProduct()
//                        .getSeller().getId()));
//        Set<Order> orders=new HashSet<>();
//        for (Map.Entry<Long, List<CartItem>> entry: itemsBySeller.entrySet()){
//            Long sellerId=entry.getKey();
//            List<CartItem> items=entry.getValue();
//
//            int totalOrderPrice=items.stream().mapToInt(
//                    CartItem::getSellingPrice
//            ).sum();
//            int totalItem=items.stream().mapToInt(CartItem::getQuantity).sum();
//
//            Order createdOrder=new Order();
//            createdOrder.setUser(user);
//            createdOrder.setSellerId(sellerId);
//            createdOrder.setTotalMrpPrice(totalOrderPrice);
//            createdOrder.setTotalSellingPrice(totalOrderPrice);
//            createdOrder.setTotalItem(totalItem);
//            createdOrder.setShippingAddress(address);
//            createdOrder.setOrderStatus(OrderStatus.PENDING);
//            createdOrder.getPaymentDetails().setStatus(PaymentStatus.PENDING);
//
//            Order savedOrder = orderRepository.save(createdOrder);
//            orders.add(createdOrder);
//
//            List<OrderItem> orderItems = new ArrayList<>();
//
//            for(CartItem item:items){
//                OrderItem orderItem=new OrderItem();
//                orderItem.setOrder(savedOrder);
//                orderItem.setMrpPrice(item.getMrpPrice());
//                orderItem.setProduct(item.getProduct());
//                orderItem.setQuantity(item.getQuantity());
//                orderItem.setSize(item.getSize());
//                orderItem.setUserId(item.getUserId());
//                orderItem.setSellingPrice(item.getSellingPrice());
//
//                savedOrder.getOrderItems().add(orderItem);
//
//                OrderItem savedOrderItem = orderItemRepository.save(orderItem);
//                orderItems.add(savedOrderItem);
//            }
//        }
//
//
//        return Set.of();
//    }


    
//@Override
//public Set<Order> createOrder(User user, Address shippingAddress, Cart cart) {
//    if (!user.getAddresses().contains(shippingAddress)) {
//        user.getAddresses().add(shippingAddress);
//    }
//
//    Address address = addressRepository.save(shippingAddress);
//
//    // Group cart items by seller
//    Map<Long, List<CartItem>> itemsBySeller = cart.getCarItems().stream()
//            .collect(Collectors.groupingBy(item -> item.getProduct().getSeller().getId()));
//
//    Set<Order> orders = new HashSet<>();
//
//    for (Map.Entry<Long, List<CartItem>> entry : itemsBySeller.entrySet()) {
//        Long sellerId = entry.getKey();
//        List<CartItem> items = entry.getValue();
//
//        // ✅ Use long/double for amount to avoid precision issues
//        double totalOrderPrice = items.stream()
//                .mapToDouble(CartItem::getSellingPrice)
//                .sum();
//        int totalItem = items.stream()
//                .mapToInt(CartItem::getQuantity)
//                .sum();
//
//        // ✅ Create new order
//        Order createdOrder = new Order();
//        createdOrder.setUser(user);
//        createdOrder.setSellerId(sellerId);
//        createdOrder.setTotalMrpPrice(totalOrderPrice);
//        createdOrder.setTotalSellingPrice((int)totalOrderPrice);
//        createdOrder.setTotalItem(totalItem);
//        createdOrder.setShippingAddress(address);
//        createdOrder.setOrderStatus(OrderStatus.PENDING);
//
//        // Ensure payment details are not null
//        if (createdOrder.getPaymentDetails() == null) {
//            createdOrder.setPaymentDetails(new PaymentDetails());
//        }
//        createdOrder.getPaymentDetails().setStatus(PaymentStatus.PENDING);
//
//        // ✅ Save order first (to get its ID)
//        Order savedOrder = orderRepository.save(createdOrder);
//
//        // ✅ Save each order item
//        List<OrderItem> orderItems = new ArrayList<>();
//        for (CartItem item : items) {
//            OrderItem orderItem = new OrderItem();
//            orderItem.setOrder(savedOrder);
//            orderItem.setMrpPrice(item.getMrpPrice());
//            orderItem.setProduct(item.getProduct());
//            orderItem.setQuantity(item.getQuantity());
//            orderItem.setSize(item.getSize());
//            orderItem.setUserId(item.getUserId());
//            orderItem.setSellingPrice(item.getSellingPrice());
//
//            OrderItem savedOrderItem = orderItemRepository.save(orderItem);
//            orderItems.add(savedOrderItem);
//        }
//
//        // ✅ Attach saved order items to the order
//        savedOrder.setOrderItems(orderItems);
//        orderRepository.save(savedOrder);
//
//        // ✅ Add to final result set
//        orders.add(savedOrder);
//    }
//
//    // ✅ Return actual created orders (not empty)
//    return orders;
//}


    @Override
    public Set<Order> createOrder(User user, Address shippingAddress, Cart cart) {
        if (!user.getAddresses().contains(shippingAddress)) {
            user.getAddresses().add(shippingAddress);
        }

        Address address = addressRepository.save(shippingAddress);

        // Group cart items by seller
        Map<Long, List<CartItem>> itemsBySeller = cart.getCarItems().stream()
                .collect(Collectors.groupingBy(item -> item.getProduct().getSeller().getId()));

        Set<Order> orders = new HashSet<>();

        for (Map.Entry<Long, List<CartItem>> entry : itemsBySeller.entrySet()) {
            Long sellerId = entry.getKey();
            List<CartItem> items = entry.getValue();

            // ✅ Use double for precision, cast to int where needed
            double totalOrderPrice = items.stream()
                    .mapToDouble(CartItem::getSellingPrice)
                    .sum();
            int totalItem = items.stream()
                    .mapToInt(CartItem::getQuantity)
                    .sum();

            // ✅ Create new order
            Order createdOrder = new Order();
            createdOrder.setUser(user);
            createdOrder.setSellerId(sellerId);
            createdOrder.setTotalMrpPrice((int) Math.round(totalOrderPrice));
            createdOrder.setTotalSellingPrice((int) Math.round(totalOrderPrice));
            createdOrder.setTotalItem(totalItem);
            createdOrder.setShippingAddress(address);
            createdOrder.setOrderStatus(OrderStatus.PENDING);

            // ✅ Initialize payment details safely
            if (createdOrder.getPaymentDetails() == null) {
                createdOrder.setPaymentDetails(new PaymentDetails());
            }
            createdOrder.getPaymentDetails().setStatus(PaymentStatus.PENDING);

            // ✅ Initialize orderItems list before saving
            createdOrder.setOrderItems(new ArrayList<>());

            // ✅ Save order first
            Order savedOrder = orderRepository.save(createdOrder);

            // ✅ Add each order item (don’t replace the list later!)
            for (CartItem item : items) {
                OrderItem orderItem = new OrderItem();
                orderItem.setOrder(savedOrder);
                orderItem.setMrpPrice(item.getMrpPrice());
                orderItem.setProduct(item.getProduct());
                orderItem.setQuantity(item.getQuantity());
                orderItem.setSize(item.getSize());
                orderItem.setUserId(item.getUserId());
                orderItem.setSellingPrice(item.getSellingPrice());

                OrderItem savedOrderItem = orderItemRepository.save(orderItem);

                // ✅ Add directly to existing list (no orphan removal error)
                savedOrder.getOrderItems().add(savedOrderItem);
            }

            // ✅ Update order after adding items
            orderRepository.save(savedOrder);

            // ✅ Add to final set
            orders.add(savedOrder);
        }

        return orders;
    }



    @Override
    public Order findOrderById(Long id) throws Exception {
        return orderRepository.findById(id)
                .orElseThrow(() -> new Exception("Order not found with id: " + id));

    }

    @Override
    public List<Order> userOrderHistory(Long userId) {
        return orderRepository.findByUserId(userId);
    }

    @Override
    public List<Order> sellerOrder(Long sellerId) {
        return orderRepository.findBySellerId(sellerId);
    }

    @Override
    public Order updateOderStatus(Long orderId, OrderStatus orderStatus) throws Exception {
        Order order=findOrderById(orderId);
        order.setOrderStatus(orderStatus);

        return orderRepository.save(order);
    }

    @Override
    public Order cancleOrder(Long orderId, User user) throws Exception {
        Order order=findOrderById(orderId);

        if (!Objects.equals(order.getUser().getId(), user.getId())) {
            throw new Exception("User does not have permission to cancel this order.");
        }


        order.setOrderStatus(OrderStatus.CANCELLED);

        return orderRepository.save(order);
    }

    @Override
    public OrderItem getOrderItemById(Long id) throws Exception {
        return orderItemRepository.findById(id).orElseThrow(()->
                new Exception("OrderIten not exist ....."));
    }
}

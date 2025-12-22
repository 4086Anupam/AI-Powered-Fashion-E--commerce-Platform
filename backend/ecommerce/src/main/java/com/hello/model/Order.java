package com.hello.model;
//
//import com.hello.domain.OrderStatus;
//import com.hello.domain.PaymentStatus;
//import jakarta.persistence.*;
//import lombok.*;
//
//import java.time.LocalDateTime;
//import java.util.ArrayList;
//import java.util.List;
//
//@Entity
//@Getter
//@Setter
//@AllArgsConstructor
//@NoArgsConstructor
//@EqualsAndHashCode
//@Table(name = "orders")
//public class Order {
//    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
//    private long id;
//
//    private String orderId;
//
//    @ManyToOne
//    private User user;
//
//    private Long sellerId;
//
//    @OneToMany (mappedBy = "order", cascade =CascadeType. ALL, orphanRemoval = true)
//    private List<OrderItem> orderItems = new ArrayList<>();
//
//    @ManyToOne
//    private Address shippingAddress;
//
//    private PaymentDetails paymentDetails=new PaymentDetails();
//    private double totalMrpPrice;
//    private Integer totalSellingPrice;
//    private Integer discount;
//    private OrderStatus orderStatus;
//    private int totalItem;
//    private PaymentStatus paymentStatus=PaymentStatus.PENDING;
//    private LocalDateTime orderDate = LocalDateTime.now();
//    private LocalDateTime deliverDate = orderDate.plusDays(7);
//}


//import com.hello.domain.OrderStatus;
//import com.hello.domain.PaymentStatus;
//import com.hello.modal.Address;
//import com.hello.modal.OrderItem;
//import com.hello.modal.PaymentDetails;
//import com.hello.modal.User;
//import jakarta.persistence.*;
//import lombok.*;
//
//import java.time.LocalDateTime;
//import java.util.ArrayList;
//import java.util.List;
//
//@Entity
//@Getter
//@Setter
//@AllArgsConstructor
//@NoArgsConstructor
//@EqualsAndHashCode
//@Table(name = "orders")
//public class Order{
//    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
//    private long id;
//
//    private String orderId;
//
//    @ManyToOne
//    private User user;
//
//    private Long sellerId;
//
//    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
//    private List<OrderItem> orderItems = new ArrayList<>();
//
//    @ManyToOne
//    private Address shippingAddress;
//
//    @Embedded
//    private PaymentDetails paymentDetails = new PaymentDetails();
//
//    private double totalMrpPrice;
//    private Integer totalSellingPrice;
//    private Integer discount;
//    private OrderStatus orderStatus;
//    private int totalItem;
//    private PaymentStatus paymentStatus = PaymentStatus.PENDING;
//    private LocalDateTime orderDate = LocalDateTime.now();
//    private LocalDateTime deliverDate = orderDate.plusDays(7);
//}



//package com.hello.modal;

import com.hello.domain.OrderStatus;
import com.hello.domain.PaymentStatus;
import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String orderId;

    @ManyToOne
    private User user;

    private Long sellerId;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<OrderItem> orderItems = new ArrayList<>();
//    @OneToMany(mappedBy = "order", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
//    private List<OrderItem> orderItems;

    @ManyToOne
    private Address shippingAddress;

    @Embedded
    private PaymentDetails paymentDetails = new PaymentDetails();

    private double totalMrpPrice;
    private Integer totalSellingPrice;
    private Integer discount;

    @Enumerated(EnumType.STRING)
    private OrderStatus orderStatus;

    private int totalItem;

    @Enumerated(EnumType.STRING)
    private PaymentStatus paymentStatus = PaymentStatus.PENDING;

    private LocalDateTime orderDate = LocalDateTime.now();
    private LocalDateTime deliverDate = orderDate.plusDays(7);
}

//package com.hello.service.impl;
//
//import com.hello.Repository.OrderRepository;
//import com.hello.Repository.PaymentOrderRepository;
//import com.hello.domain.PaymentOrderStatus;
//import com.hello.domain.PaymentStatus;
//import com.hello.modal.Order;
//import com.hello.modal.PaymentOrder;
//import com.hello.modal.User;
//import com.hello.service.PaymentService;
//import com.razorpay.Payment;
//import com.razorpay.PaymentLink;
//import com.razorpay.RazorpayClient;
//import com.razorpay.RazorpayException;
//import com.stripe.Stripe;
////import com.stripe.model.billingportal.Session;
//import com.stripe.exception.StripeException;
//import com.stripe.model.checkout.Session;
//import com.stripe.param.checkout.SessionCreateParams;
////import jakarta.websocket.Session;
//import lombok.RequiredArgsConstructor;
////import lombok.Value;
//import org.json.JSONObject;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.stereotype.Service;
//
//
//import java.util.Set;
//
//@Service
//@RequiredArgsConstructor
//public class PaymentServiceImpl implements PaymentService {
//    private final PaymentOrderRepository paymentOrderRepository;
//    private final OrderRepository orderRepository;
////    private String apiKey ="APIKEY";
////    private String apiSectret="API_SECRET";
////    private String stripeSecretKey="StripeSercertKey";
//    @Value("${stripe.api.key}")
//    private String stripeSecretKey;
//
//    @Value("${razorpay.api.key}")
//    private String apiKey;
//
//    @Value("${razorpay.api.secret}")
//    private String apiSectret;
//
//
//    @Override
//    public PaymentOrder createOrder(User user, Set<Order> orders) {
//        Long amount=orders.stream().mapToLong(Order::getTotalSellingPrice).sum();
//
//        PaymentOrder paymentOrder=new PaymentOrder();
//        paymentOrder.setAmount(amount);
//        paymentOrder.setUser(user);
//        paymentOrder.setOrders(orders);
//        return paymentOrderRepository.save(paymentOrder);
//    }
//
//    @Override
//    public PaymentOrder getPaymentById(Long orderId) throws Exception {
//        return paymentOrderRepository.findById(orderId).orElseThrow(()->
//                new  Exception("Payment order not found"));
//    }
//
//    @Override
//    public PaymentOrder getPaymentOrderByPaymentId(String orderId) throws Exception {
//        PaymentOrder paymentOrder=paymentOrderRepository.findByPaymentLinkId(orderId);
//        if (paymentOrder==null){
//            throw  new Exception("Payment order is not found with provided id");
//
//        }
//        return paymentOrder;
//    }
//
//    @Override
//    public Boolean ProceedPaymentOrder(PaymentOrder paymentOrder,
//                                       String paymentId,
//                                       String paymentLinkId) throws RazorpayException {
//        if (paymentOrder.getStatus().equals(PaymentOrderStatus.PENDING)){
//            RazorpayClient razorpay = new RazorpayClient(apiKey,apiSectret);
//
//            Payment payment=razorpay.payments.fetch(paymentId);
//            String status=payment.get("status");
//            if(status.equals("captured")){
//                Set<Order> orders = paymentOrder.getOrders();
//                for (Order order: orders){
//                    order.setPaymentStatus(PaymentStatus.COMPLETED);
//                    orderRepository.save(order);
//                }
//                paymentOrder.setStatus(PaymentOrderStatus.SUCCESS);
//                paymentOrderRepository.save(paymentOrder);
//                return true;
//            }
//            paymentOrder.setStatus(PaymentOrderStatus.FAILED);
//            paymentOrderRepository.save(paymentOrder);
//            return false;
//        }
//        return null;
//    }
//
//    @Override
//    public PaymentLink createRazorpayPaymentLink(User user, Long amount, Long orderId) throws RazorpayException {
//        amount=amount*100;
//
//        try {
//            RazorpayClient razorpay=new RazorpayClient(apiKey, apiSectret);
//
//            JSONObject paymentLinkRequest=new JSONObject();
//            paymentLinkRequest.put("amount", amount);
//            paymentLinkRequest.put("currency", "INR");
//
//            JSONObject customer=new JSONObject();
//            customer.put("name", user.getFullName());
//            customer.put("email",user.getEmail());
//            paymentLinkRequest.put("customer",customer);
//
//            JSONObject notify = new JSONObject();
//            notify.put("email",true);
//            paymentLinkRequest.put("notify",notify);
//
//            paymentLinkRequest.put("callback_url",
//                    "http://localhost:3000/payment-success/"+orderId);
//
//            paymentLinkRequest.put("callback_method","get");
//
//            PaymentLink paymentLink=razorpay.paymentLink.create(paymentLinkRequest);
////            String paymentLinkUrl=paymentLink.get("Short_url");
//            String paymentLinkUrl = paymentLink.get("short_url");
//
//            String paymentLinkId = paymentLink.get("id");
//
//            return paymentLink;
//
//        }
//        catch(Exception e){
//            System.out.println(e.getMessage());
//            throw new RazorpayException(e.getMessage());
//        }
////        return null;
////        return null;
//    }
//
//    @Override
//    public String createStripePaymentLink(User user, Long amount, Long orderId) throws StripeException {
//        Stripe.apiKey=stripeSecretKey;
//        SessionCreateParams params=SessionCreateParams.builder()
//                .addPaymentMethodType(SessionCreateParams.PaymentMethodType.CARD)
//                .setMode(SessionCreateParams.Mode.PAYMENT)
//                .setSuccessUrl("http://localhost:3000/payment-success/"+orderId)
//                .setCancelUrl("http://localhost:3000/payment-cancel")
//                .addLineItem(SessionCreateParams.LineItem.builder()
//                        .setQuantity(1L)
//                        .setPriceData(SessionCreateParams.LineItem.PriceData.builder()
//                                .setCurrency("usd")
//                                .setUnitAmount(amount*100)
//                                .setProductData(
//                                        SessionCreateParams
//                                                .LineItem.PriceData.ProductData
//                                                .builder().setName("zosh bazaar payment")
//                                                .build()
//                                ).build()
//                        ).build()
//                ).build();
//        Session session=Session.create(params);
//
//        return session.getUrl();
//    }
//}



























package com.hello.service.impl;

import com.hello.Repository.OrderRepository;
import com.hello.Repository.PaymentOrderRepository;
import com.hello.domain.PaymentOrderStatus;
import com.hello.domain.PaymentStatus;
import com.hello.model.Order;
import com.hello.model.PaymentOrder;
import com.hello.model.User;
import com.hello.service.PaymentService;
import com.razorpay.Payment;
import com.razorpay.PaymentLink;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import lombok.RequiredArgsConstructor;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
@RequiredArgsConstructor
public class PaymentServiceImpl implements PaymentService {

    private final PaymentOrderRepository paymentOrderRepository;
    private final OrderRepository orderRepository;

    @Value("${stripe.api.key}")
    private String stripeSecretKey;

    @Value("${razorpay.api.key}")
    private String apiKey;

    @Value("${razorpay.api.secret}")
    private String apiSecret;

    // ✅ Create Payment Order
    @Override
    public PaymentOrder createOrder(User user, Set<Order> orders) {
        // Corrected: calculate total amount properly (supports double)
        double totalAmount = orders.stream()
                .mapToDouble(Order::getTotalSellingPrice)
                .sum();

        // Razorpay expects amount in paise (multiply by 100)
        long amountInPaise = (long) (totalAmount * 100);
//        amountInPaise=100000;

        // Debug log
        System.out.println("💰 Creating payment order for amount (paise): " + amountInPaise);

        PaymentOrder paymentOrder = new PaymentOrder();
        paymentOrder.setAmount(amountInPaise);
        paymentOrder.setUser(user);
        paymentOrder.setOrders(orders);
        paymentOrder.setStatus(PaymentOrderStatus.PENDING);

        return paymentOrderRepository.save(paymentOrder);
    }

    @Override
    public PaymentOrder getPaymentById(Long orderId) throws Exception {
        return paymentOrderRepository.findById(orderId)
                .orElseThrow(() -> new Exception("Payment order not found"));
    }

    @Override
    public PaymentOrder getPaymentOrderByPaymentId(String orderId) throws Exception {
        PaymentOrder paymentOrder = paymentOrderRepository.findByPaymentLinkId(orderId);
        if (paymentOrder == null) {
            throw new Exception("Payment order not found with provided ID");
        }
        return paymentOrder;
    }

    // ✅ Proceed Payment Order
    @Override
    public Boolean ProceedPaymentOrder(PaymentOrder paymentOrder,
                                       String paymentId,
                                       String paymentLinkId) throws RazorpayException {
        if (paymentOrder.getStatus().equals(PaymentOrderStatus.PENDING)) {
            RazorpayClient razorpay = new RazorpayClient(apiKey, apiSecret);

            Payment payment = razorpay.payments.fetch(paymentId);
            String status = payment.get("status");

            if (status.equals("captured")) {
                Set<Order> orders = paymentOrder.getOrders();
                for (Order order : orders) {
                    order.setPaymentStatus(PaymentStatus.COMPLETED);
                    orderRepository.save(order);
                }
                paymentOrder.setStatus(PaymentOrderStatus.SUCCESS);
                paymentOrderRepository.save(paymentOrder);
                return true;
            }
            paymentOrder.setStatus(PaymentOrderStatus.FAILED);
            paymentOrderRepository.save(paymentOrder);
            return false;
        }
        return null;
    }

    // ✅ Create Razorpay Payment Link
    @Override
    public PaymentLink createRazorpayPaymentLink(User user, Long amount, Long orderId) throws RazorpayException {
        try {
            RazorpayClient razorpay = new RazorpayClient(apiKey, apiSecret);

            JSONObject paymentLinkRequest = new JSONObject();
            paymentLinkRequest.put("amount", amount); // already in paise
            paymentLinkRequest.put("currency", "INR");

            JSONObject customer = new JSONObject();
            customer.put("name", user.getFullName());
            customer.put("email", user.getEmail());
            paymentLinkRequest.put("customer", customer);

            JSONObject notify = new JSONObject();
            notify.put("email", true);
            paymentLinkRequest.put("notify", notify);

            paymentLinkRequest.put("callback_url",
                    "http://localhost:3000/payment-success/" + orderId);
            paymentLinkRequest.put("callback_method", "get");

            PaymentLink paymentLink = razorpay.paymentLink.create(paymentLinkRequest);

            // Debug log
            System.out.println("✅ Razorpay Payment Link Created: " + paymentLink.get("short_url"));
            System.out.println("🔗 Payment Link ID: " + paymentLink.get("id"));

            return paymentLink;

        } catch (Exception e) {
            System.out.println("❌ Razorpay Link Error: " + e.getMessage());
            throw new RazorpayException(e.getMessage());
        }
    }

    // ✅ Create Stripe Payment Link
    @Override
    public String createStripePaymentLink(User user, Long amount, Long orderId) throws StripeException {
        Stripe.apiKey = stripeSecretKey;

        SessionCreateParams params = SessionCreateParams.builder()
                .addPaymentMethodType(SessionCreateParams.PaymentMethodType.CARD)
                .setMode(SessionCreateParams.Mode.PAYMENT)
                .setSuccessUrl("http://localhost:3000/payment-success/" + orderId)
                .setCancelUrl("http://localhost:3000/payment-cancel")
                .addLineItem(SessionCreateParams.LineItem.builder()
                        .setQuantity(1L)
                        .setPriceData(SessionCreateParams.LineItem.PriceData.builder()
                                .setCurrency("usd")
                                .setUnitAmount(amount) // already in cents if multiplied earlier
                                .setProductData(SessionCreateParams
                                        .LineItem.PriceData.ProductData.builder()
                                        .setName("Zosh Bazaar Payment")
                                        .build())
                                .build())
                        .build())
                .build();

        Session session = Session.create(params);

        System.out.println("✅ Stripe Payment Link Created: " + session.getUrl());

        return session.getUrl();
    }
}


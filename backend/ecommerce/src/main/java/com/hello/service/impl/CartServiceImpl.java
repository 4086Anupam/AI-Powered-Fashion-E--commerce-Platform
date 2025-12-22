package com.hello.service.impl;

import com.hello.Repository.CartItemRepository;
import com.hello.Repository.CartRepository;
import com.hello.model.Cart;
import com.hello.model.CartItem;
import com.hello.model.Product;
import com.hello.model.User;
import com.hello.service.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CartServiceImpl implements CartService {
    private final CartItemRepository cartItemRepository;
    private final CartRepository cartRepository;

    @Override
    public CartItem addCartItem(User user, Product product, String size, int quantity) {
        Cart cart=findUserCart(user);
        CartItem isPresent = cartItemRepository.findByCartAndProductAndSize(cart,product,size);

        if(isPresent==null){
//            CartItem cartItem= new CartItem();
            CartItem cartItem = new CartItem();
            cartItem.setProduct(product);
            cartItem.setQuantity(quantity);
            cartItem.setUserId(user.getId());
            cartItem.setSize(size);

            int totalPrice = quantity * product.getSellingPrice();
            cartItem.setSellingPrice(totalPrice);
            cartItem.setMrpPrice(quantity*product.getMrpPrice());

            cart.getCarItems().add(cartItem);
            cartItem.setCart(cart);
            return  cartItemRepository.save(cartItem);
        }
        return isPresent;
    }

//    @Override
//    public Cart findUserCart(User user) {
//        Cart cart = cartRepository.findByUser(user);
//        int totalPrice = 0;
//        int totalDiscountedPrice = 0;
//        int totalItem=0;
//
//        for (CartItem cartItem: cart.getCarItems()){
//            totalPrice+=cartItem.getMrpPrice();
//            totalDiscountedPrice+=cartItem.getSellingPrice();
//            totalItem+=cartItem.getQuantity();
//        }
//        cart.setTotalMrpPrice(totalPrice);
//        cart.setTotalItem(totalItem);
//        cart.setTotalSellingPrice(totalDiscountedPrice);
//        cart.setDiscount(calculateDiscountPercentage(totalPrice,totalDiscountedPrice));
//        cart.setTotalItem(totalItem);
//        return null;
//    }
//    private int calculateDiscountPercentage(int mrpPrice, int sellingPrice) {
//        if (mrpPrice<=0){
//            throw new IllegalArgumentException("ActualPrice Must be >0");
//
//        }
//        double discount = mrpPrice-sellingPrice;
//        double discountPercentage=(discount/mrpPrice)*100;
//        return (int)discountPercentage;
//    }
@Override
public Cart findUserCart(User user) {
    Cart cart = cartRepository.findByUserId(user.getId());
    int totalPrice = 0;
    int totalDiscountedPrice = 0;
    int totalItem = 0;

    for (CartItem cartItem : cart.getCarItems()) {
        // Defensive null and zero checks
        if (cartItem.getMrpPrice() > 0 && cartItem.getSellingPrice() > 0) {
            totalPrice += cartItem.getMrpPrice();
            totalDiscountedPrice += cartItem.getSellingPrice();
        }
        totalItem += cartItem.getQuantity();
    }

    cart.setTotalMrpPrice(totalPrice);
    cart.setTotalItem(totalItem);
    cart.setTotalSellingPrice(totalDiscountedPrice);

    // Safely handle empty or invalid cart
    if (totalPrice > 0) {
        cart.setDiscount(calculateDiscountPercentage(totalPrice, totalDiscountedPrice));
    } else {
        cart.setDiscount(0);
    }

    // ⚠️ You must return the cart (your original code returned null!)
    return cart;
}

    private int calculateDiscountPercentage(int mrpPrice, int sellingPrice) {
        if (mrpPrice <= 0) {
            return 0; // no discount if invalid
        }
        double discount = mrpPrice - sellingPrice;
        double discountPercentage = (discount / mrpPrice) * 100;
        return (int) discountPercentage;
    }

}

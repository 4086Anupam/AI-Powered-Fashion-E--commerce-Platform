package com.hello.service.impl;

import com.hello.Repository.WishListRepository;
import com.hello.model.Product;
import com.hello.model.User;
import com.hello.model.Wishlist;
import com.hello.service.WishListService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class WishListServiceImpl implements WishListService {

    private final WishListRepository wishListRepository;

    @Override
    public Wishlist createWishList(User user) {
        Wishlist wishlist= new Wishlist();
        wishlist.setUser(user);
        return  wishListRepository.save(wishlist);

    }

    @Override
    public Wishlist getWishListByUserId(User user) {
        Wishlist wishlist=wishListRepository.findByUserId(user.getId());
        if(wishlist==null){
            wishlist=new Wishlist();
        }
        return wishlist;
    }

//    @Override
//    public Wishlist addProductToWishList(User user, Product product) {
//        Wishlist wishlist=getWishListByUserId(user);
//
//        if(wishlist.getProducts().contains(product)){
//            wishlist.getProducts().remove(product);
//        }
//        else wishlist.getProducts().add(product);
//        return wishListRepository.save(wishlist);
//    }
@Override
public Wishlist addProductToWishList(User user, Product product) {
    Wishlist wishlist = getWishListByUserId(user);

    if (wishlist.getProducts().contains(product)) {
        wishlist.getProducts().remove(product);
    } else {
        wishlist.getProducts().add(product);
    }

    wishlist.setUser(user); // ✅ FIX: link user before saving

    return wishListRepository.save(wishlist);
}

}

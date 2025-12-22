//package com.hello.service.impl;
//
//import com.hello.Repository.SellerRepository;
//import com.hello.Repository.UserRepository;
//import com.hello.domain.USER_ROLE;
//import com.hello.modal.Seller;
//import com.hello.modal.User;
//import jakarta.validation.constraints.NotNull;
//import lombok.RequiredArgsConstructor;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//
//import java.util.ArrayList;
//import java.util.List;
//
//@RequiredArgsConstructor
//@Service
//public class CustomUserServiceImpl implements UserDetailsService {
//
//    private UserRepository userRepository;
//    private static  final String SELLER_PREFIX="seller_";
//    private  final SellerRepository sellerRepository;
//
//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        if (username.startsWith(SELLER_PREFIX)){
//            String actualUserName =  username.substring(SELLER_PREFIX.length());
//            Seller seller = sellerRepository.findByEmail(actualUserName);
//
//            if (seller!=null){
//                return  builUserDetails(seller.getEmail(),seller.getPassword(),seller.getRole());
//            }
//
//        }else {
//            User user = userRepository.findByEmail(username);
//            if(user!=null){
//                return builUserDetails(user.getEmail(),user.getPassword(),user.getRole());
//            }
//        }
//        throw  new UsernameNotFoundException("user or seller not found with email"+username);
//    }
//
//    private UserDetails builUserDetails(String email, String password, USER_ROLE role) {
//        if(role==null) role=USER_ROLE.ROLE_CUSTOMER;
//        List<GrantedAuthority> authorityList = new ArrayList<>();
//        authorityList.add(new SimpleGrantedAuthority(role.toString()));
//        return  new org.springframework.security.core.userdetails.User(email,password,authorityList);
//    }
//}

package com.hello.service.impl;

import com.hello.Repository.SellerRepository;
import com.hello.Repository.UserRepository;
import com.hello.domain.USER_ROLE;
import com.hello.model.Seller;
import com.hello.model.User;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Service
public class CustomUserServiceImpl implements UserDetailsService {

    private final UserRepository userRepository;
    private final SellerRepository sellerRepository;

    private static final String SELLER_PREFIX = "seller_";

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        if (username.startsWith(SELLER_PREFIX)) {
            String actualUserName = username.substring(SELLER_PREFIX.length());
            Seller seller = sellerRepository.findByEmail(actualUserName);

            if (seller != null) {
                return buildUserDetails(seller.getEmail(), seller.getPassword(), seller.getRole());
            }

        } else {
            User user = userRepository.findByEmail(username);
            if (user != null) {
                return buildUserDetails(user.getEmail(), user.getPassword(), user.getRole());
            }
        }

        throw new UsernameNotFoundException("User or seller not found with email: " + username);
    }

    private UserDetails buildUserDetails(String email, String password, USER_ROLE role) {
        if (role == null) role = USER_ROLE.ROLE_CUSTOMER;

        List<GrantedAuthority> authorityList = new ArrayList<>();
        authorityList.add(new SimpleGrantedAuthority(role.toString()));

        return new org.springframework.security.core.userdetails.User(email, password, authorityList);
    }

    // Optional: for debugging to confirm Spring injected your repositories
    @PostConstruct
    public void checkRepos() {
        System.out.println("✅ userRepository injected: " + (userRepository != null));
        System.out.println("✅ sellerRepository injected: " + (sellerRepository != null));
    }
}


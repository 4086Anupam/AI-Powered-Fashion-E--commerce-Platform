package com.hello.controller;

//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//public class HomeController {
////
//    @GetMapping

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

////    public ApiResponse HomeControllerHandler(){
////        ApiResponse apiResponse = new ApiResponse();
////        apiResponse.setMessage("Welcome to ecommerce multivendor system");
////        return apiResponse;
////    }
//    public String HomeControllerHandler(){
//
//        return "Welcome to ecommerce multivendor system";
//    }
//}

@RestController
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "Welcome to ecommerce multivendor system";
    }

//    @GetMapping("/login")
//    public String login() {
//        return "This is the login page endpoint.";
//    }
}



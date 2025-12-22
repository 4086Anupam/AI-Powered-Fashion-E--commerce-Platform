package com.hello.controller;

import com.hello.Repository.UserRepository;
import com.hello.domain.USER_ROLE;
import com.hello.request.LoginOtpRequest;
import com.hello.request.LoginRequest;
import com.hello.response.ApiResponse;
import com.hello.response.AuthResponse;
import com.hello.response.SignupRequest;
import com.hello.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UserRepository userRepository;
    private final AuthService authService;

//    @PostMapping("/signup")
//    public ResponseEntity<AuthResponse> createUserHandler(@RequestBody SignupRequest req){
////        User user =new User();
////        user.setEmail(req.getEmail());
////        user.setFullName(req.getFullName());
////
////        User savedUser = userRepository.save(user);
//        String jwt = authService.createUser(req);
//        AuthResponse res = new AuthResponse();
//        res.setMessage("register success");
//        res.setRole(USER_ROLE.ROLE_CUSTOMER);
//        return  ResponseEntity.ok(res);
//    }
    @PostMapping("/signup")
    public ResponseEntity<AuthResponse> createUserHandler(@RequestBody SignupRequest req) throws Exception {
        String jwt = authService.createUser(req); // this should return the token

        AuthResponse res = new AuthResponse();
        res.setJwt(jwt); // ✅ Assign the token here
        res.setMessage("register success");
        res.setRole(USER_ROLE.ROLE_CUSTOMER);

        return ResponseEntity.ok(res);
    }


    @PostMapping("/sent/login-signup-otp")
    public ResponseEntity<ApiResponse> sentOtpHandler(@RequestBody LoginOtpRequest req) throws Exception {
        authService.sentLoginOtp(req.getEmail(),req.getRole()); // this should return the token

        ApiResponse res = new ApiResponse();
        res.setMessage("otp sent  successfully");

        return ResponseEntity.ok(res);
    }
//    @PostMapping("/sent/login-signup-otp")
//    public ResponseEntity<ApiResponse> sentOtpHandler(@RequestBody VerificationCode req) {
//        try {
//            authService.sentLoginOtp(req.getEmail());
//            ApiResponse res = new ApiResponse();
//            res.setMessage("OTP sent successfully");
//            return ResponseEntity.ok(res);
//        } catch (Exception e) {
//            e.printStackTrace(); // Log the real error in console
//            ApiResponse res = new ApiResponse();
//            res.setMessage("Failed to send OTP: " + e.getMessage());
//            return ResponseEntity.badRequest().body(res);
//        }
//    }
//@PostMapping("/sent/login-signup-otp")
//public ResponseEntity<ApiResponse> sentOtpHandler(@RequestBody Map<String, String> req) throws Exception {
//    String email = req.get("email");
//    authService.sentLoginOtp(email);
//
//    ApiResponse res = new ApiResponse();
//    res.setMessage("OTP sent successfully");
//    return ResponseEntity.ok(res);
//}

    @PostMapping("/signin")
    public ResponseEntity<AuthResponse> sentOtpHandler(@RequestBody LoginRequest req) throws Exception {
        AuthResponse authResponse = authService.signing(req); // this should return the token


        return ResponseEntity.ok(authResponse);
    }


}

//package com.hello.service.impl;
//
//import com.hello.Repository.CartRepository;
//import com.hello.Repository.SellerRepository;
//import com.hello.Repository.UserRepository;
//import com.hello.Repository.VerificationCodeRepository;
//import com.hello.config.JwtProvider;
//import com.hello.domain.USER_ROLE;
//import com.hello.modal.Cart;
//import com.hello.modal.Seller;
//import com.hello.modal.User;
//import com.hello.modal.VerificationCode;
//import com.hello.request.LoginRequest;
//import com.hello.response.AuthResponse;
//import com.hello.response.SignupRequest;
//import com.hello.service.AuthService;
//import com.hello.service.EmailService;
//import com.hello.utils.OtpUtil;
//import lombok.RequiredArgsConstructor;
//import org.springframework.security.authentication.BadCredentialsException;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Service;
//
//import java.util.ArrayList;
//import java.util.Collection;
//import java.util.Collections;
//import java.util.List;
//
//@Service
//@RequiredArgsConstructor
//public class AuthServiceImplement implements AuthService {
//
//    private final UserRepository userRepository;
//    private final SellerRepository sellerRepository;
//    private final PasswordEncoder passwordEncoder;
//    private final CartRepository cartRepository;
//    private final JwtProvider jwtProvider;
//    private final VerificationCodeRepository verificationCodeRepository;
//    private final EmailService emailService;
//    private final CustomUserServiceImpl customUserService;
//
//    @Override
//    public void sentLoginOtp(String email , USER_ROLE role) throws Exception {
//        String SIGNIN_PREFIX = "signin_";
//        if(email.startsWith(SIGNIN_PREFIX)){
//            email=email.substring(SIGNIN_PREFIX.length());
//            if(role.equals(USER_ROLE.ROLE_SELLER)){
//                Seller seller = sellerRepository.findByEmail(email);
//                if(seller==null){
//                    throw  new Exception("seller not found...");
//                }
//            }
//            else {
//
//                User user = userRepository.findByEmail(email);
//                if(user==null){
//                    throw  new Exception("User not exist with provided email...");
//                }
//            }
//
//
//
//        }
//        VerificationCode isExist = verificationCodeRepository.findByEmail(email);
//        if(isExist!=null){
//            verificationCodeRepository.delete(isExist);
//
//        }
//        String otp = OtpUtil.generateOtp();
//        VerificationCode verificationCode = new VerificationCode();
//        verificationCode.setOtp(otp);
//        verificationCode.setEmail(email);
//        verificationCodeRepository.save(verificationCode);
//
//        String subject = "hello bazzar login/signup otp";
//        String text = "Your login/signup otp is -"+otp;
//        emailService.sendVrificationOtpEmail(email,otp,subject,text);
//    }
//
//    @Override
//    public String createUser(SignupRequest req) throws Exception {
//
//        VerificationCode verificationCode = verificationCodeRepository.findByEmail(req.getEmail());
//        if(verificationCode==null || !verificationCode.getOtp().equals(req.getOtp())){
//            throw new Exception("Wrong OTP");
//        }
//
//
//
//        User user =  userRepository.findByEmail(req.getEmail());
//        if (user==null){
//            User createdUser = new User();
//            createdUser.setEmail(req.getEmail());
//            createdUser.setFullName(req.getFullName());
//            createdUser.setRole(USER_ROLE.ROLE_CUSTOMER);
//            createdUser.setMobile("7501417553");
//            createdUser.setPassword(passwordEncoder.encode(req.getOtp()));
//
//            user = userRepository.save(createdUser);
//
//            Cart cart = new Cart();
//            cart.setUser(user);
//            cartRepository.save(cart);
//        }
//
//        List<GrantedAuthority> authorities = new ArrayList<>();
//        authorities.add(new SimpleGrantedAuthority(USER_ROLE.ROLE_CUSTOMER.toString()));
//
//        Authentication authentication=new UsernamePasswordAuthenticationToken(req.getEmail(),null,authorities);
//        SecurityContextHolder.getContext().setAuthentication(authentication);
//
//
//        return jwtProvider.generateToken(authentication);
//    }
//
//    @Override
//    public AuthResponse signing(LoginRequest req) throws Exception {
//
//        String username=req.getEmail();
//        String otp = req.getOtp();
//
//        Authentication authentication=authentication(username,otp);
//        SecurityContextHolder.getContext().setAuthentication(authentication);
//
//        String token = jwtProvider.generateToken(authentication);
//
//        AuthResponse authResponse= new AuthResponse();
//        authResponse.setJwt(token);
//        authResponse.setMessage("Login success");
//
//        Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
//        String roleName = authorities.isEmpty()?null:authorities.iterator().next().getAuthority();
//        authResponse.setRole(USER_ROLE.valueOf(roleName));
//        return authResponse;
//
//    }
//
//    private Authentication authentication(String username, String otp) throws Exception {
//        UserDetails userDetails= customUserService.loadUserByUsername(username);
//
//        String SELLER_PREFIX="seller_";
//        if (username.startsWith(SELLER_PREFIX)){
//            username=username.substring(SELLER_PREFIX.length());
//        }
//
//        if (userDetails==null){
//            throw  new BadCredentialsException("invalid username or password");
//        }
//         VerificationCode verificationCode =verificationCodeRepository.findByEmail(username);
//
//        if(verificationCode== null || !verificationCode.getOtp().equals(otp)){
//            throw  new Exception("wrong otp");
//        }
//        return new UsernamePasswordAuthenticationToken(
//                userDetails,
//                null,
//                userDetails.getAuthorities());
//
//    }
//}


package com.hello.service.impl;

import com.hello.Repository.CartRepository;
import com.hello.Repository.SellerRepository;
import com.hello.Repository.UserRepository;
import com.hello.Repository.VerificationCodeRepository;
import com.hello.config.JwtProvider;
import com.hello.domain.AccountStatus;
import com.hello.domain.USER_ROLE;
import com.hello.model.Cart;
import com.hello.model.Seller;
import com.hello.model.User;
import com.hello.model.VerificationCode;
import com.hello.request.LoginRequest;
import com.hello.response.AuthResponse;
import com.hello.response.SignupRequest;
import com.hello.service.AuthService;
import com.hello.service.EmailService;
import com.hello.utils.OtpUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AuthServiceImplement implements AuthService {

    private final UserRepository userRepository;
    private final SellerRepository sellerRepository;
    private final PasswordEncoder passwordEncoder;
    private final CartRepository cartRepository;
    private final JwtProvider jwtProvider;
    private final VerificationCodeRepository verificationCodeRepository;
    private final EmailService emailService;
    private final CustomUserServiceImpl customUserService;

    // ========================
    // Send OTP (Login/Signup)
    // ========================
    @Override
    public void sentLoginOtp(String email, USER_ROLE role) throws Exception {
        String SIGNIN_PREFIX = "signin_";
        if (email.startsWith(SIGNIN_PREFIX)) {
            email = email.substring(SIGNIN_PREFIX.length());
            if (role.equals(USER_ROLE.ROLE_SELLER)) {
                Seller seller = sellerRepository.findByEmail(email);
                if (seller == null) {
                    throw new Exception("Seller not found...");
                }
            } else {
                User user = userRepository.findByEmail(email);
                if (user == null) {
                    throw new Exception("User not exist with provided email...");
                }
            }
        }

        // ✅ Delete all existing verification codes for this email
        List<VerificationCode> existingCodes = verificationCodeRepository.findAllByEmail(email);
        if (!existingCodes.isEmpty()) {
            verificationCodeRepository.deleteAll(existingCodes);
        }

        // ✅ Create and save a new verification code
        String otp = OtpUtil.generateOtp();
        VerificationCode verificationCode = new VerificationCode();
        verificationCode.setOtp(otp);
        verificationCode.setEmail(email);
        verificationCodeRepository.save(verificationCode);

        // ✅ Send OTP Email
        String subject = "\uD83C\uDF89 Welcome to Stylence Bazaar! Here’s Your Secure OTP \uD83D\uDD10";
        //String text = "Your login/signup OTP is - " + otp;
        String text = "Hey there 👋,\n\n"
                + "Welcome to Stylence Bazaar — we’re super excited to have you on board! 🛍️\n\n"
                + "Your Login/Signup OTP is: " + otp + "\n\n"
                + "Please use this code to verify your account.\n"
                + "⏳ This OTP is valid for 10 minutes.\n\n"
                + "For your security, don’t share this code with anyone. 🔒\n\n"
                + "If you didn’t request this, simply ignore this message — your account is safe.\n\n"
                + "With love 💛,\n"
                + "The Stylence Bazaar Team ✨\n"
                + "Where Style Meets Elegance! 💃";
        emailService.sendVrificationOtpEmail(email, otp, subject, text);
    }

    // ========================
    // Signup (User Creation)
    // ========================
    @Override
    public String createUser(SignupRequest req) throws Exception {

        // ✅ Get the latest verification code for that email
        List<VerificationCode> codes = verificationCodeRepository.findAllByEmail(req.getEmail());
        if (codes.isEmpty()) {
            throw new Exception("No OTP found for this email.");
        }

        // ✅ Use the last one (in case multiple exist)
        VerificationCode verificationCode = codes.get(codes.size() - 1);

        if (!verificationCode.getOtp().equals(req.getOtp())) {
            throw new Exception("Wrong OTP");
        }

        User user = userRepository.findByEmail(req.getEmail());
        if (user == null) {
            User createdUser = new User();
            createdUser.setEmail(req.getEmail());
            createdUser.setFullName(req.getFullName());
            createdUser.setRole(USER_ROLE.ROLE_CUSTOMER);
            createdUser.setMobile(req.getMobile());
            createdUser.setPassword(passwordEncoder.encode(req.getOtp()));

            user = userRepository.save(createdUser);

            Cart cart = new Cart();
            cart.setUser(user);
            cartRepository.save(cart);
        }

        List<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority(USER_ROLE.ROLE_CUSTOMER.toString()));

        Authentication authentication = new UsernamePasswordAuthenticationToken(req.getEmail(), null, authorities);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        return jwtProvider.generateToken(authentication);
    }

    // ========================
    // Sign in (Verify OTP + JWT)
    // ========================
    @Override
    public AuthResponse signing(LoginRequest req) throws Exception {
        String username = req.getEmail();
        String otp = req.getOtp();

        Authentication authentication = authentication(username, otp);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = jwtProvider.generateToken(authentication);

        AuthResponse authResponse = new AuthResponse();
        authResponse.setJwt(token);
        authResponse.setMessage("Login success");

        Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
        String roleName = authorities.isEmpty() ? null : authorities.iterator().next().getAuthority();
        authResponse.setRole(USER_ROLE.valueOf(roleName));
        return authResponse;
    }

//    @Override
//    public AuthResponse signing1(LoginRequest req) throws Exception {
//        String username = req.getEmail();
//        String otp = req.getOtp();
//
//        Authentication authentication = authentication(username, otp);
//        SecurityContextHolder.getContext().setAuthentication(authentication);
//
//        String token = jwtProvider.generateToken(authentication);
//
//        AuthResponse authResponse = new AuthResponse();
//        authResponse.setJwt(token);
//        authResponse.setMessage("Login success");
//
//        Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
//        String roleName = authorities.isEmpty() ? null : authorities.iterator().next().getAuthority();
//        authResponse.setRole(USER_ROLE.valueOf(roleName));
//        return authResponse;
//    }
@Override
public AuthResponse signing1(LoginRequest req) throws Exception {
    String username = req.getEmail();
    String otp = req.getOtp();

    Authentication authentication = authentication(username, otp);
    SecurityContextHolder.getContext().setAuthentication(authentication);

    // ✅ Get user details from Spring Security
    UserDetails userDetails = (UserDetails) authentication.getPrincipal();

    // ✅ Fetch seller from DB
    Seller seller = sellerRepository.findByEmail(userDetails.getUsername());
    if (seller == null) {
        throw new Exception("Seller not found");
    }


    // ✅ Allow login only after verification
    if (!seller.isEmailVerified() || seller.getAccountStatus() != AccountStatus.ACTIVE) {
        throw new Exception("Seller not verified! Please verify your email.");
    }

    // ✅ Generate token only after passing checks
    String token = jwtProvider.generateToken(authentication);

    AuthResponse authResponse = new AuthResponse();
    authResponse.setJwt(token);
    authResponse.setMessage("Login success");

    Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
    String roleName = authorities.isEmpty() ? null : authorities.iterator().next().getAuthority();
    authResponse.setRole(USER_ROLE.valueOf(roleName));

    return authResponse;
}



    // ========================
    // Helper Authentication (Used in Login)
    // ========================
    private Authentication authentication(String username, String otp) throws Exception {
        UserDetails userDetails = customUserService.loadUserByUsername(username);

        String SELLER_PREFIX = "seller_";
        if (username.startsWith(SELLER_PREFIX)) {
            username = username.substring(SELLER_PREFIX.length());
        }

        if (userDetails == null) {
            throw new BadCredentialsException("Invalid username or password");
        }

        // ✅ Use findAllByEmail() to prevent duplicate query errors
        List<VerificationCode> codes = verificationCodeRepository.findAllByEmail(username);
        if (codes.isEmpty()) {
            throw new Exception("No OTP found for this email.");
        }

        VerificationCode verificationCode = codes.get(codes.size() - 1);
        if (!verificationCode.getOtp().equals(otp)) {
            throw new Exception("Wrong OTP");
        }

        return new UsernamePasswordAuthenticationToken(
                userDetails,
                null,
                userDetails.getAuthorities()
        );
    }
}

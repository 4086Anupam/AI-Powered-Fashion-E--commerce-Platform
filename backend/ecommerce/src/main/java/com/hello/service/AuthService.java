package com.hello.service;

import com.hello.domain.USER_ROLE;
import com.hello.request.LoginRequest;
import com.hello.response.AuthResponse;
import com.hello.response.SignupRequest;
import lombok.Data;


public interface AuthService {

    void sentLoginOtp(String email, USER_ROLE role) throws Exception;
    String createUser(SignupRequest req) throws Exception;
    AuthResponse signing(LoginRequest req) throws Exception;
    AuthResponse signing1(LoginRequest req) throws Exception;



}

package com.hello.service.impl;

import com.hello.Repository.UserRepository;
import com.hello.config.JwtProvider;
import com.hello.model.User;
import com.hello.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class UserServiceImpl implements UserService {

    private  final UserRepository userRepository;
    private final JwtProvider jwtProvider;
    @Override
    public User findUserByJwtToken(String jwt) throws Exception {
        String email = jwtProvider.getEmailFromJwtToken(jwt);
//        String email = jwtProvider.getEmailFromJwtToken(jwt);
        System.out.println("Extracted email: " + email);

        return this.findUserByEmail(email);
    }

    @Override
    public User findUserByEmail(String email) throws Exception {
        User user = userRepository.findByEmail(email);
        System.out.println(email);
        if(user==null){
            throw new Exception("User not found with this email - "+email);
        }
        return user;
    }
}

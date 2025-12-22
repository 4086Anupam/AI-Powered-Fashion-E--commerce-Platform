package com.hello.service.impl;


import com.hello.Repository.UserRepository;
import com.hello.domain.USER_ROLE;
import com.hello.model.User;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DataInitializationComponent implements CommandLineRunner {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) {
        initializeAdminUser();
    }

    private void initializeAdminUser() {
        String adminUsername = "stylencebazzar@gmail.com";

        // Check if admin already exists
        if (userRepository.findByEmail(adminUsername) == null) {
            User adminUser = new User();
            adminUser.setFullName("Mr.stylence");
            adminUser.setEmail(adminUsername);
            adminUser.setPassword(passwordEncoder.encode("stylence@2025")); // ✅ fixed encoding
            adminUser.setRole(USER_ROLE.ROLE_ADMIN);

            userRepository.save(adminUser);
            System.out.println("✅ Admin user created successfully!");
        } else {
            System.out.println("ℹ️ Admin user already exists.");
        }
    }
}
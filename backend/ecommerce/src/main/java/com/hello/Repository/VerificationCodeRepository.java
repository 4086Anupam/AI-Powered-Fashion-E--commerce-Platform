//package com.hello.Repository;
//
//import com.hello.modal.VerificationCode;
//import org.springframework.data.jpa.repository.JpaRepository;
//
//public interface VerificationCodeRepository extends JpaRepository<VerificationCode,Long> {
//    VerificationCode findByEmail(String email);
//    VerificationCode findByOtp(String otp);
//
//}


package com.hello.Repository;

import com.hello.model.VerificationCode;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface VerificationCodeRepository extends JpaRepository<VerificationCode, Long> {
    List<VerificationCode> findAllByEmail(String email);
    VerificationCode findByOtp(String otp);
}


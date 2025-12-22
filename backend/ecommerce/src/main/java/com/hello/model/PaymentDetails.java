//package com.hello.modal;
//
//
//import com.hello.domain.PaymentStatus;
//import lombok.Data;
//
//@Data
//public class PaymentDetails {
//    private String paymentId;
//    private String razorpayPaymentLinkId;
//    private String razorpayPaymentLinkReferenceId;
//    private String razorpayPaymentLinkStatus;
//    private String razorpayPaymentId;
//    private PaymentStatus status;
//}



//package com.hello.modal;
//
//import com.hello.domain.PaymentStatus;
//import jakarta.persistence.Embeddable;
//import lombok.Data;
//
//@Data
//@Embeddable
//public class PaymentDetails {
//    private String paymentId;
//    private String razorpayPaymentLinkId;
//    private String razorpayPaymentLinkReferenceId;
//    private String razorpayPaymentLinkStatus;
//    private String razorpayPaymentId;
//    private PaymentStatus status;
//}


package com.hello.model;

import com.hello.domain.PaymentStatus;
import jakarta.persistence.Embeddable;
import lombok.Data;

@Data
@Embeddable
public class PaymentDetails {
    private String paymentId;
    private String razorpayPaymentLinkId;
    private String razorpayPaymentLinkReferenceId;
    private String razorpayPaymentLinkStatus;
    private String razorpayPaymentId;
    private PaymentStatus status;
}

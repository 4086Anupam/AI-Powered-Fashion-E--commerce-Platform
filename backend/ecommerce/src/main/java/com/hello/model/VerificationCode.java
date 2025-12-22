package com.hello.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class VerificationCode {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String otp;
    @Column(unique = true)
    private String email;

    // These fields are not needed in the request body, so ignore them for JSON mapping
    @OneToOne
    @JsonIgnore
    private User user;

    @OneToOne
    @JsonIgnore
    private Seller seller;
}

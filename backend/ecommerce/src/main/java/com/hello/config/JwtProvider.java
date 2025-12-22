package com.hello.config;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.web.webauthn.api.AuthenticatorResponse;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.awt.geom.GeneralPath;
import java.util.Collection;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;
@Service
public class JwtProvider {

    SecretKey key = Keys.hmacShaKeyFor(JWT_CONSTANT.SECRET_KEY.getBytes());
    public String generateToken(Authentication auth){

        Collection<? extends GrantedAuthority> authorities =auth.getAuthorities();
        String roles = populateAuthorities(authorities);

        return Jwts.builder()
                .setIssuedAt(new Date())
                .setExpiration(new Date(new Date().getTime()+86400000))
                .claim("claim",auth.getName())
                .claim("authorities",roles)
//                .claim("email", auth.getName())
//                .claim("role", roles)
                .signWith(key)
                .compact();

    }
//    public String getEmailFromJwtToken(String jwt){
//
//        jwt = jwt.substring(7);
//
//        Claims claims = Jwts.parserBuilder()
//                .setSigningKey(key)
//                .build()
//                .parseClaimsJws(jwt)
//                .getBody();
//        return String.valueOf(claims.get("email"));
//    }
public String getEmailFromJwtToken(String jwt) {
    if (jwt.startsWith("Bearer ")) {
        jwt = jwt.substring(7);
    }

    Claims claims = Jwts.parserBuilder()
            .setSigningKey(key)
            .build()
            .parseClaimsJws(jwt)
            .getBody();

    // You stored the email in "claim"
    return String.valueOf(claims.get("claim"));
//    return String.valueOf(claims.get("email"));

}


    private String populateAuthorities(Collection<? extends GrantedAuthority> authorities) {
        Set<String> auths = new HashSet<>();

        for (GrantedAuthority authority:authorities){
            auths.add(authority.getAuthority());
        }
        return String.join(",",auths);
    }

}

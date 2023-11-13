package com.unibuddy.be.config;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Service;

import javax.crypto.spec.SecretKeySpec;
import java.sql.Timestamp;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.Date;

@PropertySource("classpath:jwt.yaml")
@Service
public class TokenProvider {
    private final String secretKey;
    private final long expirationHours;
    private final String issuer;

    public TokenProvider(
            @Value("${secret-key}") String secretKey,               // JWT 서명에 사용될 비밀 키
            @Value("${expiration-hours}") long expirationHours,     // 토큰 만료 시간 (시간 단위)
            @Value("${issuer}") String issuer                       // 토큰 발급자
    ) {
        this.secretKey = secretKey;
        this.expirationHours = expirationHours;
        this.issuer = issuer;
    }
    // 주어진 사용자 세부 정보를 이용하여 JWT 토큰을 생성하는 메서드
    public String createToken(String userSpecification) {
        return Jwts.builder()
                .signWith(new SecretKeySpec(secretKey.getBytes(), SignatureAlgorithm.HS512.getJcaName())) // 비밀 키로 서명
                .setSubject(userSpecification)                                  // 토큰의 주제 설정 (사용자 세부 정보)
                .setIssuer(issuer)                                               // 토큰 발급자 설정
                .setIssuedAt(Timestamp.valueOf(LocalDateTime.now()))            // 토큰 발급 시간 설정
                .setExpiration(Date.from(Instant.now().plus(expirationHours, ChronoUnit.HOURS)))    // 토큰 만료 시간 설정
                .compact();
    }
     // 주어진 토큰을 검증하고 토큰의 주제(사용자 세부 정보)를 반환하는 메서드
    public String validateTokenAndGetSubject(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(secretKey.getBytes())    // 비밀 키로 서명을 검증하는 설정
                .build()
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }
}

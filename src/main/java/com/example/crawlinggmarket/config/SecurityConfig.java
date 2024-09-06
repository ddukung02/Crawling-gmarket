package com.example.crawlinggmarket.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.web.server.SecurityWebFilterChain;
import org.springframework.security.config.web.server.ServerHttpSecurity;

@Configuration
@EnableWebFluxSecurity
public class SecurityConfig {

    @Bean
    public SecurityWebFilterChain securityWebFilterChain(ServerHttpSecurity http) {
        http
                .authorizeExchange(exchanges -> exchanges
                        .anyExchange().permitAll()  // 모든 요청에 대해 인증 요구하지 않음
                )
                .csrf(ServerHttpSecurity.CsrfSpec::disable);  // CSRF 보호 비활성화 (필요한 경우)

        return http.build();
    }
}

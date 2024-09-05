package com.example.crawlinggmarket.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import reactor.core.publisher.Mono;

@Controller
public class HomeController {

    @GetMapping("/")
    public Mono<String> home(Model model) {
        // 데이터 설정
        model.addAttribute("message", "Hello, Reactive Thymeleaf!");
        return Mono.just("home");  // home.html 템플릿을 렌더링
    }
}

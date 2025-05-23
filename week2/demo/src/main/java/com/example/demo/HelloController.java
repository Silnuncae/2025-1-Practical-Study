package com.example.demo;
// 패키지 선언

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

// 이 클래스는 'REST API를 처리하는 컨트롤러'라는 뜻
@RestController
public class HelloController {

    // 모든 포트/도메인에서의 요청 허용
    @CrossOrigin(origins = "*")
    // 클라이언트가 GET 방식으로 "/hello" 주소에 요청을 보내면
    @GetMapping("/hello")
    public String hello() {
        // 문자열 응답을 돌려줌 → 프론트엔드에서 fetch로 이 값을 받게 됨
        return "Hello from Spring!";
    }
}

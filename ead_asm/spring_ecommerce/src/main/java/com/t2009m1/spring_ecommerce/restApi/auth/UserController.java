package com.t2009m1.spring_ecommerce.restApi.auth;

import com.t2009m1.spring_ecommerce.entity.dto.UserRegisterDto;
import com.t2009m1.spring_ecommerce.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.function.EntityResponse;

import javax.validation.Valid;

@RestController
@RequestMapping(path = "/api/v1/users")
@RequiredArgsConstructor
@CrossOrigin("*")
public class UserController {
    final UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody UserRegisterDto userRegisterDto) {
        return ResponseEntity.ok(userService.register(userRegisterDto));
    }
}

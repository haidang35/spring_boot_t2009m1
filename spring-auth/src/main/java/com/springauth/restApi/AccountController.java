package com.springauth.restApi;

import com.springauth.entity.Credential;
import com.springauth.entity.dto.AccountLoginDto;
import com.springauth.entity.dto.AccountRegisterDto;
import com.springauth.service.AccountService;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/v1/accounts")
@RequiredArgsConstructor
public class AccountController {
    final AccountService accountService;

    @PostMapping("/register")
    public AccountRegisterDto register( @RequestBody AccountRegisterDto accountRegisterDto) {
        return accountService.register(accountRegisterDto);
    }

//    @PostMapping("/login")
//    public Credential login(@RequestBody AccountLoginDto accountLoginDto) {
//        return accountService.login(accountLoginDto);
//    }
}

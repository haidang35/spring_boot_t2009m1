package com.springauth.service;

import com.springauth.SpringAuthApplication;
import com.springauth.entity.Account;
import com.springauth.entity.Credential;
import com.springauth.entity.dto.AccountLoginDto;
import com.springauth.entity.dto.AccountRegisterDto;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(classes = SpringAuthApplication.class)
@RunWith(SpringRunner.class)
class AccountServiceTest {
    @Autowired
    AccountService accountService;

    @Test
    void register() {
        AccountRegisterDto accountRegisterDto = AccountRegisterDto.builder()
                .username("dangjinneryq12377")
                .password("123456")
                .role(1)
                .build();
        AccountRegisterDto accountDto = accountService.register(accountRegisterDto);
        System.out.println(accountDto.toString());
        assertNotNull(accountDto);
    }

    @Test
    void login() {
        AccountLoginDto accountLoginDto = AccountLoginDto.builder()
                .username("dangjinneryq")
                .password("123456")
                .build();
        Credential credential = accountService.login(accountLoginDto);
        System.out.println(credential.toString());
        assertNotNull(credential);
    }
}

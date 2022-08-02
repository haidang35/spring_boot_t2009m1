package com.t2009m1.spring_ecommerce.seeder;

import com.t2009m1.spring_ecommerce.entity.dto.UserRegisterDto;
import com.t2009m1.spring_ecommerce.entity.entityEnum.UserRole;
import com.t2009m1.spring_ecommerce.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class UserSeeder {
    final UserService userService;

    public void generate() {
        UserRegisterDto userRegisterDto = UserRegisterDto.builder()
                .fullName("Dang Jinner")
                .email("dangjinneryq@gmail.com")
                .phone("0357444666")
                .username("dangjinneryq")
                .address("Hanoi")
                .role(UserRole.ADMIN)
                .password("123456")
                .build();
        userService.register(userRegisterDto);
    }
}

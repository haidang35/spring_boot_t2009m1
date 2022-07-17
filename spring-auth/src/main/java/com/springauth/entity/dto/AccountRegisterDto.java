package com.springauth.entity.dto;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AccountRegisterDto {
    private long id;
    private String fullName;
    private String username;
    private String password;
    private int role; //
}

package com.springauth.entity.dto;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class CredentialDto {
    private String accessToken;
    private String refreshToken;
    private long expiredAt;
    private String scope;
}

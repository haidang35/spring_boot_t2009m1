package com.t2009m1.spring_ecommerce.entity.dto;

import lombok.*;

import javax.validation.constraints.NotEmpty;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CartItemDto {
    private long productId;
    private int quantity;
}

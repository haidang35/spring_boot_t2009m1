package com.t2009m1.spring_ecommerce.entity;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Getter
@Setter
@Builder
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Embeddable
public class CartItemId implements Serializable {
    @Column(name = "shopping_cart_id")
    private long shoppingCartId;
    @Column(name = "product_id")
    private long productId;
}

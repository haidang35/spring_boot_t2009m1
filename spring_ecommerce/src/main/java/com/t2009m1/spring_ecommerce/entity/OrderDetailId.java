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
public class OrderDetailId implements Serializable {
    @Column(name = "order_id")
    private long orderId;
    @Column(name = "product_id")
    private long productId;
}

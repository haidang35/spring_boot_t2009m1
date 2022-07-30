package com.t2009m1.spring_ecommerce.entity;

import com.t2009m1.spring_ecommerce.entity.entityEnum.OrderSeedByType;
import com.t2009m1.spring_ecommerce.entity.entityEnum.OrderStatus;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class OrderSeedByTime {
    private OrderSeedByType seedByType;
    private int year;
    private int month;
    private int day;
    private int countOrder;
    private OrderStatus orderStatus;
}

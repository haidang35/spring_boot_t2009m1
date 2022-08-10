package com.t2009m1.entity;

import com.t2009m1.entity.entityEnum.OrderSeedByType;
import com.t2009m1.entity.entityEnum.OrderSimpleStatus;
import lombok.*;

import javax.persistence.Entity;

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
    private OrderSimpleStatus orderStatus;
}

package com.t2009m1.seeder;

import com.t2009m1.entity.*;
import com.t2009m1.entity.entityEnum.OrderSeedByType;
import com.t2009m1.entity.entityEnum.OrderSimpleStatus;
import com.t2009m1.repository.OrderRepository;
import com.t2009m1.util.DateTimeHelper;
import com.t2009m1.util.NumberRandom;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.*;

@Component
public class OrderSeeder {
    private static final int NUMBER_OF_ORDERS = 10000;
    private static List<Order> orders;
    private List<OrderSeedByTime> seeder;

    @Autowired
    OrderRepository orderRepository;

    public void generate() {
        List<Order> orderList = new ArrayList<>();
        for (int i = 0; i < NUMBER_OF_ORDERS; i++
             ) {
            Order order = Order.builder()
                    .id(System.currentTimeMillis() + i + 2)
                    .build();
            Set<OrderDetail> orderDetails = new HashSet<>();
            HashSet<Long> productIds = new HashSet<>();
            for (int j = 0; j < NumberRandom.generate(1, 5); j++
                 ) {
                int productRandomIndex = NumberRandom.generate(0, ProductSeeder.productList.size() - 1);
                Product product = ProductSeeder.productList.get(productRandomIndex);
                if(productIds.contains(product.getId())) {
                    continue;
                }
                OrderDetail orderDetail = OrderDetail.builder()
                        .orderDetailId(OrderDetailId.builder()
                                .orderId(order.getId())
                                .productId(product.getId())
                                .build())
                        .quantity(NumberRandom.generate(1, 10))
                        .unitPrice(NumberRandom.generate(1000, 50000))
                        .build();
                orderDetails.add(orderDetail);
                productIds.add(product.getId());
            }
            order.setOrderDetails(orderDetails);
            orderList.add(order);
        }
        orderRepository.saveAll(orderList);
    }

    public void configData() {
        seeder = new ArrayList<>();
        orders = new ArrayList<>();
        seeder.add(OrderSeedByTime.builder()
                        .orderStatus(OrderSimpleStatus.DONE)
                        .seedByType(OrderSeedByType.YEAR)
                        .year(2021)
                        .countOrder(100)
                        .build());
    }

    public void superGenerate() {
        configData();
        for (OrderSeedByTime seedByTime : seeder) {
            int numberOfOrders = seedByTime.getCountOrder();
            for(int i = 0; i < numberOfOrders; i++) {
                LocalDateTime orderCreated = calculateOrderCreatedTime(seedByTime);
                Order order = Order.builder()
                        .id(System.currentTimeMillis() + i + 2)
                        .createdAt(orderCreated)
                        .build();
                Set<OrderDetail> orderDetails = new HashSet<>();
                HashSet<Long> productIds = new HashSet<>();
                for (int j = 0; j < NumberRandom.generate(1, 5); j++) {
                    int productRandomIndex = NumberRandom.generate(0, ProductSeeder.productList.size() - 1);
                    Product product = ProductSeeder.productList.get(productRandomIndex);
                    if(productIds.contains(product.getId())) {
                        continue;
                    }
                    OrderDetail orderDetail = OrderDetail.builder()
                            .orderDetailId(OrderDetailId.builder()
                                    .orderId(order.getId())
                                    .productId(product.getId())
                                    .build())
                                    .quantity(NumberRandom.generate(1, 10))
                                    .unitPrice(NumberRandom.generate(1000, 50000))
                                    .build();
                    orderDetails.add(orderDetail);
                    productIds.add(product.getId());
                }
                order.setOrderDetails(orderDetails);
                orders.add(order);
            }
        }
        orderRepository.saveAll(orders);
    }

    private LocalDateTime calculateOrderCreatedTime(OrderSeedByTime orderSeedByTime) {
        LocalDateTime result = null;
        LocalDateTime tempLocalDatetime = null;
        int tempMonth = 1;
        int tempYear = 2022;
        switch (orderSeedByTime.getSeedByType()) {
            case YEAR:
                tempMonth = DateTimeHelper.getRandomMonth().getValue();
                tempYear = orderSeedByTime.getYear();
                tempLocalDatetime = LocalDateTime.of(tempYear, tempMonth, 1, 0, 0, 0);
                LocalDateTime lastDayOfMonth = tempLocalDatetime.plusMonths(1).minusDays(1);
                int randomDay = NumberRandom.generate(1, lastDayOfMonth.getDayOfMonth());
                result = LocalDateTime.of(tempYear, tempMonth, randomDay, 0, 0, 0);
                return result;
            case MONTH:
                break;
            case DAY:
                break;
        }
        return null;
    }
}

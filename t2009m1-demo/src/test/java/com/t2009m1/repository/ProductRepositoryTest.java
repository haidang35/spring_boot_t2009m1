package com.t2009m1.repository;

import com.t2009m1.T2009m1DemoApplication;
import com.t2009m1.entity.Order;
import com.t2009m1.entity.OrderDetail;
import com.t2009m1.entity.OrderDetailId;
import com.t2009m1.entity.Product;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = T2009m1DemoApplication.class)
class ProductRepositoryTest {
    @Autowired
    ProductRepository productRepository;
    @Autowired
    OrderRepository orderRepository;

    @Test
    public void test() {
//        Product product1 = Product.builder()
//                .name("Prod 1")
//                .price(456)
//                .quantity(12)
//                .build();
//        Product product2 = Product.builder()
//                .name("Prod 1")
//                .price(456)
//                .quantity(12)
//                .build();
//        productRepository.save(product1);
//        productRepository.save(product2);
        Order order = Order.builder()
                .id(System.currentTimeMillis())
                .createdAt(LocalDateTime.now())
                .status(1)
                .build();
        HashSet<OrderDetail> orderDetails = new HashSet<>();
        List<Product> productList = productRepository.findAll();
        for (Product prod : productList
        ) {
            OrderDetail orderDetail = OrderDetail.builder()
                    .orderDetailId(OrderDetailId.builder()
                            .orderId(order.getId())
                            .productId(prod.getId())
                            .build())
                    .order(order)
                    .product(prod)
                    .unitPrice(prod.getPrice())
                    .quantity(2)
                    .build();
            orderDetails.add(orderDetail);
        }
        order.setOrderDetails(orderDetails);
        orderRepository.save(order);
    }
}

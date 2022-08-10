package com.t2009m1.repository;

import com.t2009m1.T2009m1DemoApplication;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.jupiter.api.Assertions.*;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = T2009m1DemoApplication.class)
class OrderRepositoryTest {
    @Autowired
    OrderRepository orderRepository;

    @Test
    public void testGetAllOrder() {
        orderRepository.findAll();
    }
}

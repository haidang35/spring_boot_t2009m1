package com.t2009m1.search;

import com.t2009m1.T2009m1DemoApplication;
import com.t2009m1.entity.Order;
import com.t2009m1.repository.OrderRepository;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.data.jpa.domain.Specification;
import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = T2009m1DemoApplication.class)
class OrderSpecificationTest {
    @Autowired
    OrderRepository orderRepository;

 /*   @Test
    public void testing()
    {
        OrderSpecification spec = new OrderSpecification(new SearchCriteria("id", "=", 50));
        List<Order> orderList = orderRepository.findAll(spec);;
        System.out.println(orderList.size());
    }*/
}

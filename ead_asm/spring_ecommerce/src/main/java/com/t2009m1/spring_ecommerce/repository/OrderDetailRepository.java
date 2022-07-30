package com.t2009m1.spring_ecommerce.repository;

import com.t2009m1.spring_ecommerce.entity.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderDetailRepository extends JpaRepository<OrderDetail, Long> {
}

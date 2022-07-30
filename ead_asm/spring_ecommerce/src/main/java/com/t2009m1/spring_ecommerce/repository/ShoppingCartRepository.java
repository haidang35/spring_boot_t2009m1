package com.t2009m1.spring_ecommerce.repository;

import com.t2009m1.spring_ecommerce.entity.ShoppingCart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ShoppingCartRepository extends JpaRepository<ShoppingCart, Long> {
}

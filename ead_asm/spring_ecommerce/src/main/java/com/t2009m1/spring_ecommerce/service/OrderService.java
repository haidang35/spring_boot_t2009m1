package com.t2009m1.spring_ecommerce.service;

import com.t2009m1.spring_ecommerce.entity.Order;
import com.t2009m1.spring_ecommerce.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class OrderService {
    final OrderRepository orderRepository;

    public Page<?> findAll(int page, int limit, String sortBy, Specification<Order> specification) {
        return orderRepository.findAll(specification, PageRequest.of(page - 1, limit, Sort.by(sortBy).descending()));
    }

    public Optional<Order> findById(long id) {
        return orderRepository.findById(id);
    }

    public Order save(Order order) {
        return orderRepository.save(order);
    }

    public void delete(long id) {
        orderRepository.deleteById(id);
    }

    public boolean update(long id, Order orderUpdate) {
        Optional<Order> order = orderRepository.findById(id);
        if(order.isPresent()) {
            orderRepository.save(orderUpdate);
            return true;
        }
        return false;
    }
}
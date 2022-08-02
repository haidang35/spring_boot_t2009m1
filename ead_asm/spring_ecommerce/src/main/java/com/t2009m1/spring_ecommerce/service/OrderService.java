package com.t2009m1.spring_ecommerce.service;

import com.t2009m1.spring_ecommerce.entity.Order;
import com.t2009m1.spring_ecommerce.entity.OrderDetail;
import com.t2009m1.spring_ecommerce.entity.OrderDetailId;
import com.t2009m1.spring_ecommerce.entity.Product;
import com.t2009m1.spring_ecommerce.entity.dto.OrderDetailDto;
import com.t2009m1.spring_ecommerce.entity.dto.OrderDto;
import com.t2009m1.spring_ecommerce.entity.entityEnum.OrderStatus;
import com.t2009m1.spring_ecommerce.entity.entityEnum.PaymentStatus;
import com.t2009m1.spring_ecommerce.repository.OrderRepository;
import com.t2009m1.spring_ecommerce.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
public class OrderService {
    final OrderRepository orderRepository;
    final ProductRepository productRepository;

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

    public Order saveClientOrder(OrderDto orderDto) {
        Order order = Order.builder()
                .id(System.nanoTime())
                .customerName(orderDto.getCustomerName())
                .customerPhone(orderDto.getCustomerPhone())
                .customerEmail(orderDto.getCustomerEmail())
                .customerAddress(orderDto.getCustomerAddress())
                .paymentMethod(orderDto.getPaymentMethod())
                .note(orderDto.getNote())
                .userId(orderDto.getUserId())
                .status(OrderStatus.PENDING)
                .paymentStatus(PaymentStatus.UNPAID)
                .build();
        Set<OrderDetail> orderDetails = new HashSet<>();
        for(OrderDetailDto orderDetailDto : orderDto.getOrderDetails()) {
            Optional<Product> productOptional = productRepository.findById(orderDetailDto.getProductId());
            if(!productOptional.isPresent()) {
                continue;
            }
            Product product = productOptional.get();
            OrderDetail orderDetail = OrderDetail.builder()
                    .id(OrderDetailId.builder()
                            .orderId(order.getId())
                            .productId(product.getId())
                            .build())
                    .productName(product.getName())
                    .thumbnail(product.getThumbnail())
                    .unitPrice(product.getUnitPrice())
                    .quantity(orderDetailDto.getQuantity())
                    .build();
            orderDetails.add(orderDetail);
        }
        order.setOrderDetails(orderDetails);
        return orderRepository.save(order);
    }

    public List<Order> getListOrderByUser(long userId) {
        return orderRepository.findOrderByUserId(userId);
    }
}

package com.t2009m1.spring_ecommerce.restApi.admin;

import com.t2009m1.spring_ecommerce.entity.Order;
import com.t2009m1.spring_ecommerce.entity.entityEnum.OrderStatus;
import com.t2009m1.spring_ecommerce.entity.search.OrderSpecification;
import com.t2009m1.spring_ecommerce.entity.search.SearchCriteria;
import com.t2009m1.spring_ecommerce.entity.search.SearchCriteriaOperator;
import com.t2009m1.spring_ecommerce.service.OrderService;
import jdk.nashorn.internal.runtime.regexp.joni.constants.EncloseType;
import lombok.RequiredArgsConstructor;
import org.aspectj.weaver.ast.Or;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.function.EntityResponse;

import java.sql.SQLOutput;

@RestController
@RequestMapping(path = "/api/v1/admin/orders")
@CrossOrigin("*")
@RequiredArgsConstructor
public class OrderController {
    final OrderService orderService;

    @GetMapping
    public ResponseEntity<?> findAll(
            @RequestParam(defaultValue = "1") Integer page,
            @RequestParam(defaultValue = "10") Integer limit,
            @RequestParam(defaultValue = "createdAt") String sortBy,
            @RequestParam(defaultValue = "0") Integer status,
            @RequestParam(defaultValue = "") String keyword,
            @RequestParam(defaultValue = "0") Integer paymentMethod
    ) {
        Specification<Order> specification = Specification.where(null);
        if(keyword.length() > 0 && keyword != null) {
            SearchCriteria criteria = SearchCriteria.builder()
                    .key("customerName")
                    .operator(SearchCriteriaOperator.LIKE)
                    .value(keyword)
                    .build();
            OrderSpecification spec = new OrderSpecification(criteria);
            specification = specification.and(spec);
        }
        if(paymentMethod > 0) {
            SearchCriteria criteria = SearchCriteria.builder()
                    .key("paymentMethod")
                    .operator(SearchCriteriaOperator.EQUALS)
                    .value(keyword)
                    .build();
            OrderSpecification spec = new OrderSpecification(criteria);
            specification = specification.and(spec);
        }
        if(status != 0) {
            SearchCriteria criteria = SearchCriteria.builder()
                    .key("status")
                    .operator(SearchCriteriaOperator.EQUALS)
                    .value(OrderStatus.of(status))
                    .build();
            OrderSpecification spec = new OrderSpecification(criteria);
            specification = specification.and(spec);
        }
        return ResponseEntity.ok(orderService.findAll(page, limit, sortBy, specification));
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getOrderDetails(@PathVariable String id) {
        return ResponseEntity.ok(orderService.findById(Long.parseLong(id)));
    }
}

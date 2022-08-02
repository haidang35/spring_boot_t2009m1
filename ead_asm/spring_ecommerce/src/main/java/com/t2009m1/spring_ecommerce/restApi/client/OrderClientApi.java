package com.t2009m1.spring_ecommerce.restApi.client;

import com.t2009m1.spring_ecommerce.entity.dto.OrderDto;
import com.t2009m1.spring_ecommerce.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping(path = "/api/v1/orders")
@RequiredArgsConstructor
public class OrderClientApi {
    final OrderService orderService;

    @PostMapping
    public ResponseEntity<?> saveOrder(
            @Valid @RequestBody OrderDto orderDto
    ) {
        return ResponseEntity.ok(orderService.saveClientOrder(orderDto));
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<?> getListOrderByUser(@PathVariable long id) {
        return ResponseEntity.ok(orderService.getListOrderByUser(id));
    }
}

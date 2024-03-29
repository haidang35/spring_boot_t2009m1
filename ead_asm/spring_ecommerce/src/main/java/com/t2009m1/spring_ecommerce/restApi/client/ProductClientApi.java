package com.t2009m1.spring_ecommerce.restApi.client;

import com.t2009m1.spring_ecommerce.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/api/v1/products")
@RequiredArgsConstructor
public class ProductClientApi {
    final ProductService productService;

    @GetMapping
    public ResponseEntity<?> findAll(@RequestParam(defaultValue = "1") Integer page,
                                     @RequestParam(defaultValue = "21") Integer limit,
                                     @RequestParam(defaultValue = "createdAt") String sortBy) {
        return ResponseEntity.ok(productService.findAll(page, limit, sortBy));
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findById(@PathVariable long id) {
        return ResponseEntity.ok(productService.findById(id));
    }
}

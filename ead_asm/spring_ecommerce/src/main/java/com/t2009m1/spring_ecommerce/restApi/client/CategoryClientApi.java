package com.t2009m1.spring_ecommerce.restApi.client;

import com.t2009m1.spring_ecommerce.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/v1/categories")
@RequiredArgsConstructor
public class CategoryClientApi {
    final CategoryService categoryService;

    @GetMapping
    public ResponseEntity<?> getList(
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "15") int limit,
            @RequestParam(defaultValue = "createdAt") String orderBy
    ) {
        return ResponseEntity.ok(categoryService.findAll(page, limit, orderBy));
    }
}

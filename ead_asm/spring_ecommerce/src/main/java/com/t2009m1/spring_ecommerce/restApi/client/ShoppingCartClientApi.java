package com.t2009m1.spring_ecommerce.restApi.client;

import com.t2009m1.spring_ecommerce.entity.dto.ShoppingCartDto;
import com.t2009m1.spring_ecommerce.service.ShoppingCartService;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping(path = "/api/v1/shopping-carts")
@RequiredArgsConstructor
public class ShoppingCartClientApi {
    final ShoppingCartService shoppingCartService;

    @PostMapping
    public ResponseEntity<?> saveCart(
        @Valid @RequestBody ShoppingCartDto shoppingCartDto
    ) {
        return ResponseEntity.ok(shoppingCartService.save(shoppingCartDto));
    }

    @GetMapping("/{userId}")
    public ResponseEntity<?> getCartDetails(
            @PathVariable long userId
    ) {
        return ResponseEntity.ok(1);
    }
}

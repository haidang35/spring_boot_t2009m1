package com.t2009m1.spring_ecommerce.service;

import com.t2009m1.spring_ecommerce.entity.CartItem;
import com.t2009m1.spring_ecommerce.entity.Product;
import com.t2009m1.spring_ecommerce.entity.ShoppingCart;
import com.t2009m1.spring_ecommerce.entity.dto.CartItemDto;
import com.t2009m1.spring_ecommerce.entity.dto.ShoppingCartDto;
import com.t2009m1.spring_ecommerce.repository.ProductRepository;
import com.t2009m1.spring_ecommerce.repository.ShoppingCartRepository;
import lombok.*;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;
import java.util.UUID;


@Service
@RequiredArgsConstructor
public class ShoppingCartService {
    final ShoppingCartRepository shoppingCartRepository;
    final ProductRepository productRepository;

    public ShoppingCart save(ShoppingCartDto shoppingCartDto) {
        boolean hasException = false;
        ShoppingCart shoppingCart = ShoppingCart.builder()
                .id(UUID.randomUUID().toString())
                .shippingName(shoppingCartDto.getShippingName())
                .shippingPhone(shoppingCartDto.getShippingPhone())
                .shippingEmail(shoppingCartDto.getShippingEmail())
                .shippingAddress(shoppingCartDto.getShippingAddress())
                .shippingNote(shoppingCartDto.getShippingNote())
                .build();
        Set<CartItem> cartItems = new HashSet<>();
        for(CartItemDto cartItemDto : shoppingCartDto.getCartItems()) {
            Optional<Product> optionalProduct = productRepository.findById(cartItemDto.getProductId());
            if(optionalProduct.isPresent()) {
                hasException = true;
                break;
            }
            Product product = optionalProduct.get();
            CartItem cartItem = CartItem.builder()
                    .productName(product.getName())
                    .productThumbnail(product.getThumbnail())
                    .unitPrice(new BigDecimal(product.getUnitPrice()))
                    .quantity(cartItemDto.getQuantity())
                    .build();
            shoppingCart.addTotalPrice(cartItem);
            cartItems.add(cartItem);
        }
        shoppingCart.setCartItems(cartItems);
        return shoppingCartRepository.save(shoppingCart);
    }
}

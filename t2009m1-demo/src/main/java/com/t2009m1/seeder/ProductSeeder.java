package com.t2009m1.seeder;

import com.github.javafaker.Faker;
import com.t2009m1.entity.Product;
import com.t2009m1.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Component
public class ProductSeeder {
    private static final int NUMBER_OF_PRODUCTS = 100;
    public static List<Product> productList = new ArrayList<>();

    @Autowired
    ProductRepository productRepository;

    public void generate() {
        Faker faker = new Faker();
        Random random = new Random();
        int maxIndexOfCategories = CategorySeeder.categoryList.size() - 1;
        int minIndexOfCategories = 0;
        for (int i = 0; i < NUMBER_OF_PRODUCTS; i++
             ) {
            Product product = Product.builder()
                    .name(faker.name().name())
                    .quantity(random.nextInt(100 - 10) + 10)
                    .price(random.nextInt(50000 - 1000) + 1000)
                    .category(CategorySeeder.categoryList.get(random.nextInt(maxIndexOfCategories - minIndexOfCategories) + minIndexOfCategories))
                    .build();
            productList.add(product);
        }
        productRepository.saveAll(productList);
    }
}

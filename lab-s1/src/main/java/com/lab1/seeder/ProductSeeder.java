package com.lab1.seeder;

import com.lab1.entity.Product;
import com.lab1.repository.ProductRepository;
import com.lab1.util.NumberRandom;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.github.javafaker.Faker;

import java.time.LocalDateTime;
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
        String[] colors = {"Red", "Green", "Blue", "Yello", "Purple"};
        Integer[] sizes = {30, 31, 32, 33, 34, 35};
        String[] genders = {"Male", "Female", "Other"};
        Integer[] status = {0, 1};
        for (int i = 0; i < NUMBER_OF_PRODUCTS; i++
             ) {
            Product product = Product.builder()
                    .name(faker.name().name())
                    .color(colors[NumberRandom.generate(0, colors.length)])
                    .size(sizes[NumberRandom.generate(0, sizes.length)])
                    .price(random.nextInt(50000 - 1000) + 1000)
                    .gender(genders[NumberRandom.generate(0, genders.length)])
                    .createdAt(LocalDateTime.now().minusDays(NumberRandom.generate(1, 20)))
                    .description(faker.animal().name())
                    .status(NumberRandom.generate(0, status.length))
                    .build();
            productList.add(product);
        }
        productRepository.saveAll(productList);
    }
}

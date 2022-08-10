package com.t2009m1.seeder;

import com.github.javafaker.Faker;
import com.t2009m1.entity.Category;
import com.t2009m1.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Component
public class CategorySeeder {
    private static final int NUMBER_OF_CATEGORIES = 20;
    public static List<Category> categoryList = new ArrayList<>();

    @Autowired
    CategoryRepository categoryRepository;

    public void generate() {
        Faker faker = new Faker();
        for (int i = 0; i < NUMBER_OF_CATEGORIES; i++
        ) {
            Category category = Category.builder()
                    .name(faker.name().name())
                    .build();
            categoryList.add(category);
        }
        categoryRepository.saveAll(categoryList);
    }
}

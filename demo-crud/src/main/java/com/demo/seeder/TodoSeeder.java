package com.demo.seeder;

import com.demo.entity.Todo;
import com.demo.entity.entityEnum.TodoStatus;
import com.demo.repository.TodoRepository;
import com.github.javafaker.Faker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.LinkedList;
import java.util.List;

@Component
public class TodoSeeder implements CommandLineRunner {
    @Autowired
    TodoRepository todoRepository;

    @Override
    public void run(String... args) throws Exception {
        Faker faker = new Faker();
        int numberOfTodos = 0;
        List<Todo> todoList = new LinkedList<>();
        for (int i = 0; i < numberOfTodos; i++) {
            todoList.add(Todo.builder().title(faker.funnyName().toString())
                                        .description(faker.superhero().descriptor())
                                        .status(TodoStatus.of(faker.number().numberBetween(1, 3))).build());
        }
        todoRepository.saveAll(todoList);
    }
}

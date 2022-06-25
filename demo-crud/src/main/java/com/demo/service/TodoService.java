package com.demo.service;

import com.demo.entity.Todo;

import java.util.List;

public interface TodoService {
    List<Todo> findAll();
    Todo findById(int id);
    Todo create(Todo todo);
    Todo update(int id, Todo todo);
    void delete(int id);
}

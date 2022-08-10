package com.demo.service;

import com.demo.entity.Todo;
import com.demo.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TodoServiceImpl implements TodoService{
    @Autowired
    private TodoRepository todoRepository;

    @Override
    public List<Todo> findAll() {
        List<Todo> todos = new ArrayList<>();
        todoRepository.findAll().forEach(todos::add);
        return todos;
    }

    @Override
    public Todo findById(int id) {
        return todoRepository.findById(id).get();
    }

    @Override
    public Todo create(Todo todo) {
        return todoRepository.save(todo);
    }

    @Override
    public Todo update(int id, Todo todo) {
        Todo todoFromDb = todoRepository.findById(id).get();
        todoFromDb.setTitle(todo.getTitle());
        todoFromDb.setDescription(todo.getDescription());
        todoFromDb.setStatus(todo.getStatus());
        return todoRepository.save(todoFromDb);
    }

    @Override
    public void delete(int id) {
        todoRepository.deleteById(id);
    }
}

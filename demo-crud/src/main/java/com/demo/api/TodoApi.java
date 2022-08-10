package com.demo.api;

import com.demo.entity.Todo;
import com.demo.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping(path = "/api/v1/todos")
public class TodoApi {
    @Autowired
    private TodoService todoService;

//    public TodoApi(TodoService todoService) {
//        this.todoService = todoService;
//    }

    @GetMapping
    public ResponseEntity<List<Todo>> getTodoList() {
        List<Todo> todos = todoService.findAll();
        return new ResponseEntity<>(todos, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Todo> findById(@PathVariable int id) {
        Todo todo = todoService.findById(id);
        return new ResponseEntity<>(todo, HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<Todo> addNewTodo(@Valid @RequestBody Todo todo) {
        Todo todoSaved = todoService.create(todo);
        if(todoSaved == null) {
            return new ResponseEntity<>(todoSaved, HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(todoSaved, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable int id, @RequestBody Todo todo) {
       Todo todoUpdated =  todoService.update(id, todo);
       return new ResponseEntity<>(todoUpdated, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteTodo(@PathVariable int id) {
        todoService.delete(id);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
}

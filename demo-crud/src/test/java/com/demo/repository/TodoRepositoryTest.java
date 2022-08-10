package com.demo.repository;

import com.demo.entity.Todo;
import com.demo.entity.entityEnum.TodoStatus;
import com.fasterxml.jackson.databind.ObjectMapper;
import javafx.application.Application;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MockMvcBuilder;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import javax.annotation.security.RunAs;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@AutoConfigureMockMvc
class TodoRepositoryTest {
    @Autowired
    TodoRepository todoRepository;
    MockMvc mockMvc;
    @Autowired
    WebApplicationContext webApplicationContext;

    @BeforeEach
    void setUp() {
        mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
    }

    @Test
    void findAllByDescriptionContains() {
        List<Todo> todoList = todoRepository.findAllByDescriptionContains("Hell");
        for (Todo todo: todoList
             ) {
            todo.toString();
        }
    }

    @Test
    void testPaging() {
        int page = 1;
        int limit = 20;
        Page<Todo> todoPage = todoRepository.findAll(PageRequest.of(page - 1, limit, Sort.by(Sort.Direction.DESC, "title")));
        System.out.println("Total Element " + todoPage.getTotalElements());
    }

    @Test
    void testGetList() throws Exception{
        String uri = "/api/v1/todos";
        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.get(uri).accept(MediaType.APPLICATION_JSON_VALUE)).andReturn();
        int status = mvcResult.getResponse().getStatus();
        assertEquals(200, status);
        String content = mvcResult.getResponse().getContentAsString();
        ObjectMapper objectMapper = new ObjectMapper();
        Todo[] todoList = objectMapper.readValue(content, Todo[].class);
        assertTrue(todoList.length > 0);
    }

    @Test
    void testCreateTodo() throws Exception{
        String uri = "/api/v1/todos";
        Todo todo = Todo.builder()
                .title("Todo")
                .description("desc")
                .status(TodoStatus.DONE)
                .build();
        ObjectMapper objectMapper = new ObjectMapper();
        String inputJson = objectMapper.writeValueAsString(todo);
        MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.post(uri).accept(MediaType.APPLICATION_JSON_VALUE).content(inputJson)).andReturn();
        int status = mvcResult.getResponse().getStatus();
        assertEquals(201, status);
    }
}

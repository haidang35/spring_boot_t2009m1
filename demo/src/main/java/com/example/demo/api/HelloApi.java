package com.example.demo.api;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/hello")
public class HelloApi {
    @RequestMapping(method = RequestMethod.GET)
    public String say() {
        return "Hello world";
    }

    @RequestMapping(method = RequestMethod.GET, path = "{id}")
    public String find(@PathVariable int id) {
        return "Hello " + id;
    }

    @RequestMapping(method = RequestMethod.POST)
    public String save(@RequestBody String message) {
        return message;
    }
}

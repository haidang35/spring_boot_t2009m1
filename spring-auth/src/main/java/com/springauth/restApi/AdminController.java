package com.springauth.restApi;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/v1/admin")
public class AdminController {
    @GetMapping
    public String index() {
        return "Here is admin area";
    }
}

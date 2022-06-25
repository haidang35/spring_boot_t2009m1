package com.lab2.api;

import com.lab2.entity.Product;
import com.lab2.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api/v1/products")
@CrossOrigin("*")
public class ProductApi{

    @Autowired
    ProductService productService;

    @GetMapping
    public List<Product> getList() {
        return productService.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Product> getById(@PathVariable int id) {
        return productService.findById(id);
    }

    @PutMapping("/{id}")
    public Product update(@PathVariable int id, @RequestBody Product product) {
        return productService.update(id, product);
    }

    @PostMapping
    public Product save(@RequestBody Product product) {
        return productService.save(product);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id) {
        productService.deleteById(id);
    }
}

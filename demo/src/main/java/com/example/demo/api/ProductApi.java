package com.example.demo.api;

import com.example.demo.entity.Product;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(path = "/api/v1/products")
public class ProductApi {
    private static List<Product> productList = new ArrayList<>();

    @RequestMapping(method = RequestMethod.GET)
    public List<Product> getList() {
        return productList;
    }

    @RequestMapping(method = RequestMethod.POST)
    public Product getList(@RequestBody Product product) {
        productList.add(product);
        return product;
    }

    @RequestMapping(method = RequestMethod.GET, path = "{id}")
    public Product getById(@PathVariable int id) {
        for (Product product: productList) {
            if(product.getId() == id) {
                return product;
            }
        }
        return null;
    }

    @RequestMapping(method = RequestMethod.PUT, path = "{id}")
    public Product update(@PathVariable int id, @RequestBody Product productUpdated) {
        for (Product product: productList) {
            if(product.getId() == id) {
                product.setId(productUpdated.getId());
                product.setName(productUpdated.getName());
                product.setPrice(productUpdated.getPrice());
                return product;
            }
        }
        return null;
    }

    @RequestMapping(method = RequestMethod.DELETE, path = "{id}")
    public Product delete(@PathVariable int id) {
        for (Product product: productList) {
            if(product.getId() == id) {
                productList.remove(product);
                return product;
            }
        }
        return null;
    }
}

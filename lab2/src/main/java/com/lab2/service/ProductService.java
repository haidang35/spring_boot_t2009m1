package com.lab2.service;

import com.lab2.entity.Product;
import com.lab2.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public List<Product> findAll() {
        return productRepository.findAll();
    }

    public Optional<Product> findById(int id) {
        return productRepository.findById(id);
    }

    public Product save(Product product) {
        return productRepository.save(product);
    }

    public Product update(int id, Product product) {
        Product productFromDb = productRepository.findById(id).get();
        productFromDb.setName(product.getName());
        productFromDb.setPrice(product.getPrice());
        productFromDb.setQuantity(product.getQuantity());
        productFromDb.setThumbnail(product.getThumbnail());
        productFromDb.setStatus(product.getStatus());
        productFromDb.setDescription(product.getDescription());
        return productRepository.save(productFromDb);
    }

    public void deleteById(int id) {
        productRepository.deleteById(id);
    }
}

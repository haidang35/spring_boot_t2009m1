package com.t2009m1.spring_ecommerce.service;

import com.t2009m1.spring_ecommerce.entity.Product;
import com.t2009m1.spring_ecommerce.repository.CategoryRepository;
import com.t2009m1.spring_ecommerce.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProductService {
    final ProductRepository productRepository;

    public Page<Product> findAll(int page, int limit, String sortBy) {
        return productRepository.findAll(PageRequest.of(page - 1, limit, Sort.by(sortBy).descending()));
    }

    public Optional<Product> findById(long id) {
        return productRepository.findById(id);
    }

    public Product save(Product product) {
        return productRepository.save(product);
    }

    public void delete(long id) {
        productRepository.deleteById(id);
    }

    public boolean update(long id, Product productUpdate) {
        Optional<Product> product = productRepository.findById(id);
        if(product.isPresent()) {
            productRepository.save(productUpdate);
            return true;
        }
        return false;
    }
}

package com.t2009m1.backend.service;

import com.t2009m1.backend.entity.Product;
import com.t2009m1.backend.repository.ProductRepository;
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
        return productRepository.findAll(PageRequest.of(page - 1, limit));
    }

    public Optional<Product> findById(long id) {
        return productRepository.findById(id);
    }
}

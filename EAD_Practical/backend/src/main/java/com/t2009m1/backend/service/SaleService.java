package com.t2009m1.backend.service;

import com.t2009m1.backend.entity.Product;
import com.t2009m1.backend.entity.Sale;
import com.t2009m1.backend.repository.ProductRepository;
import com.t2009m1.backend.repository.SaleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class SaleService {
    final SaleRepository saleRepository;

    public Page<Sale> findAll(int page, int limit, String sortBy) {
        return saleRepository.findAll(PageRequest.of(page - 1, limit));
    }

    public Optional<Sale> findById(long id) {
        return saleRepository.findById(id);
    }
}

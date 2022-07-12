package com.lab1.search;

import com.lab1.LabS1Application;
import com.lab1.entity.Product;
import com.lab1.repository.ProductRepository;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.test.context.junit4.SpringRunner;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(classes = LabS1Application.class)
@RunWith(SpringRunner.class)
class ProductSpecificationTest {
    @Autowired
    ProductRepository productRepository;

    @Test
    public void testProductSearch() {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        ProductSpecification spec1 = new ProductSpecification(new SearchCriteria("id", ":", 1));
        List<Product> productList = productRepository.findAll(spec1);
        assertTrue(productList.size() == 1);
        ProductSpecification spec2 = new ProductSpecification(new SearchCriteria("name", ":", "Kallie Huel"));
        ProductSpecification spec3 = new ProductSpecification(new SearchCriteria("gender", ":", "Other"));
        ProductSpecification spec4 = new ProductSpecification(new SearchCriteria("color", ":", "Blue"));
        ProductSpecification spec5 = new ProductSpecification(new SearchCriteria("size", ":", 32));
        ProductSpecification spec6 = new ProductSpecification(new SearchCriteria("price", ":", 22196));
        ProductSpecification spec7 = new ProductSpecification(new SearchCriteria("createdAt", ":", LocalDateTime.parse("2022-06-25 11:03:16", formatter)));
        List<Product> productList1 = productRepository.findAll(Specification.where(spec2).and(spec2).and(spec3).and(spec3).and(spec4).and(spec5).and(spec6).and(spec7));
        assertTrue(productList1.size() == 1);
    }
}

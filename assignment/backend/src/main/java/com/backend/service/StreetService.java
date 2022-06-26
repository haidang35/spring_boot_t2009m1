package com.backend.service;

import com.backend.entity.Street;
import com.backend.repository.StreetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;
import java.util.Optional;

@Service
public class StreetService {
    @Autowired
    private StreetRepository streetRepository;
    @PersistenceContext
    EntityManager entityManager;

    public List<Street> findAll(Specification specification) {
        return streetRepository.findAll(specification);
    }

    public List<Street> findAll() {
        return streetRepository.findAll();
    }

    public Street save(Street street) {
        return streetRepository.save(street);
    }

    public Optional<Street> findById(int id) {
        return streetRepository.findById(id);
    }

    public List<Street> findByNameContaining(String name) {
        return streetRepository.findByNameContaining(name);
    }

    public List<Street> findByDistrictId(int districtId) {
        return streetRepository.findByDistrictIdEquals(districtId);
    }

    public void truncateTable() {
        entityManager.createNativeQuery("TRUNCATE TABLE streets").executeUpdate();
    }
}

package com.backend.repository;

import com.backend.entity.Street;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StreetRepository extends JpaRepository<Street, Integer>, JpaSpecificationExecutor<Street> {
    List<Street> findByNameContaining(String name);
    List<Street> findByDistrictIdEquals(int districtId);
}

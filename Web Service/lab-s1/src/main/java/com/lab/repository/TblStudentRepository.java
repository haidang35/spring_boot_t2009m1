package com.lab.repository;

import com.lab.entity.TblStudent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TblStudentRepository extends JpaRepository<TblStudent, Long> {
}

package com.t2009m1.spring_csw.service;

import com.t2009m1.spring_csw.entity.Employee;
import com.t2009m1.spring_csw.repository.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface EmployeeService {
     List<Employee> findAll();
     Employee findById(long id);
     Employee save(Employee employee);
     Employee update(long id, Employee employee);
     boolean delete(long id);
}

package com.t2009m1.spring_csw.service;

import com.t2009m1.spring_csw.entity.Employee;
import com.t2009m1.spring_csw.repository.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Component
@RequiredArgsConstructor
public class EmployeeServiceIplm implements EmployeeService{
    final EmployeeRepository employeeRepository;

    @Override
    public List<Employee> findAll() {
        return employeeRepository.findAll();
    }

    @Override
    public Employee findById(long id) {
        Optional<Employee> employeeOptional = employeeRepository.findById(id);
        if(employeeOptional.isPresent()) {
            return employeeOptional.get();
        }
        return null;
    }

    @Override
    public Employee save(Employee employee) {
        return employeeRepository.save(employee);
    }

    @Override
    public Employee update(long id, Employee employeeUpdate) {
        Optional<Employee> employeeOptional = employeeRepository.findById(id);
        if(employeeOptional.isPresent()) {
            Employee employee = employeeOptional.get();
            employee.setName(employeeUpdate.getName());
            employee.setSalary(employeeUpdate.getSalary());
            return employeeRepository.save(employee);
        }
        return null;
    }

    @Override
    public boolean delete(long id) {
        Optional<Employee> employeeOptional = employeeRepository.findById(id);
        if(employeeOptional.isPresent()) {
            employeeRepository.delete(employeeOptional.get());
            return true;
        }
        return false;
    }
}

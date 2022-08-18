package com.t2009m1.spring_csw.restApi;

import com.t2009m1.spring_csw.entity.Employee;
import com.t2009m1.spring_csw.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/api/v1/employees")
public class EmployeeRestApi {
    final EmployeeService employeeService;

    @GetMapping
    public ResponseEntity<?> findAll() {
        return ResponseEntity.ok(employeeService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findById(@PathVariable long id) {
        Employee employee = employeeService.findById(id);
        if(employee != null) {
            return ResponseEntity.ok(employee);
        }
        return ResponseEntity.badRequest().body("Employee not found !");
    }

    @PostMapping
    public ResponseEntity<?> save(@Valid @RequestBody Employee employeeSave) {
        return ResponseEntity.ok(employeeService.save(employeeSave));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable long id, @Valid @RequestBody Employee employeeUpdate) {
        Employee employee = employeeService.update(id, employeeUpdate);
        if(employee != null) {
            return ResponseEntity.ok(employee);
        }
        return ResponseEntity.badRequest().body("Employee not found !");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable  long id) {
        boolean result = employeeService.delete(id);
        if(result) {
            return ResponseEntity.ok().body("Delete successfully");
        }
        return ResponseEntity.badRequest().body("Employee not found !");
    }
}

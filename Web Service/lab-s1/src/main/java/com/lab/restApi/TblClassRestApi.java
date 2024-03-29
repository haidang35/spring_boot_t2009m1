package com.lab.restApi;

import com.lab.entity.TblClass;
import com.lab.service.TblClassService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.WebRequest;

import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;
import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api/v1/classes")
@RequiredArgsConstructor
public class TblClassRestApi {
    final TblClassService tblClassService;

    @GetMapping
    public ResponseEntity<?> findAll() {
        return ResponseEntity.ok(tblClassService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findById(@PathVariable long id) {
        Optional<TblClass> tblClassOptional = tblClassService.findById(id);
        if(!tblClassOptional.isPresent()) {
            return ResponseEntity.badRequest().body("Class doesn't not exist");
        }
        return ResponseEntity.ok(tblClassOptional.get());
    }

    @PostMapping
    public ResponseEntity<?> save(@Valid @RequestBody TblClass tblClass) {
        return ResponseEntity.ok(tblClassService.save(tblClass));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable long id, @Valid @RequestBody TblClass tblClass) {
        TblClass tblClass1 = tblClassService.update(id, tblClass);
        if(tblClass == null) {
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(tblClassService);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable long id) {
        if(tblClassService.delete(id)) {
            return ResponseEntity.ok().body("Delete successfully !");
        }
        return ResponseEntity.badRequest().body("Delete failed !");
    }

    @ExceptionHandler({ ConstraintViolationException.class })
    public ResponseEntity<Object> handleConstraintViolation(
            ConstraintViolationException ex, WebRequest request) {
        List<String> errors = new ArrayList<>();
        for (ConstraintViolation<?> violation : ex.getConstraintViolations()) {
            errors.add(violation.getRootBeanClass().getName()  + " "
                    + violation.getPropertyPath() + ": "
                    + violation.getMessage());
        }
        return new ResponseEntity<Object>(errors, HttpStatus.BAD_REQUEST);
    }
}

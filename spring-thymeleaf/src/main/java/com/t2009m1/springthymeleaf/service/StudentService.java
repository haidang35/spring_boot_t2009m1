package com.t2009m1.springthymeleaf.service;

import com.t2009m1.springthymeleaf.entity.Student;
import com.t2009m1.springthymeleaf.repository.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class StudentService {
    final StudentRepository studentRepository;

    public List<Student> findAll() {
        return studentRepository.findAll();
    }

    public void save (Student student) {
        studentRepository.save(student);
    }
}

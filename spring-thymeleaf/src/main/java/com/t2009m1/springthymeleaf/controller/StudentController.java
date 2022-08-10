package com.t2009m1.springthymeleaf.controller;

import com.t2009m1.springthymeleaf.entity.Student;
import com.t2009m1.springthymeleaf.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping(path = "/admin/students")
@RequiredArgsConstructor
public class StudentController {
    final StudentService studentService;

    @GetMapping(path = "/create")
    public String createStudent(Model model) {
        Student student = new Student();
        model.addAttribute("student", student);
        return "students/create";
    }

    @GetMapping(path = "")
    public String getListStudent(Model model) {
        model.addAttribute("studentList", studentService.findAll());
        return "students/index";
    }

    @PostMapping("/save")
    public String saveStudent(@Valid @ModelAttribute("student") Student student, BindingResult result, Model model) {
        if(result.hasErrors()) {
            model.addAttribute("student", student);
            return "students/create";
        }
        studentService.save(student);
        return "redirect:/admin/students";
    }
}

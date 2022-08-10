package com.t2009m1.springthymeleaf.entity;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(name = "students")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @NotEmpty(message = "Role Number cannot be empty")
    private String roleNumber;
    @NotEmpty
    @NotEmpty(message = "Fullname cannot be empty")
    private String fullName;
    @NotEmpty
    private String email;
    @NotEmpty
    private String phone;
    private int status;
}

package com.springauth.entity;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "accounts")
@ToString
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String fullName;
    private String username;
    private String password;
    private int role; // 1. Admin, 2.User
}

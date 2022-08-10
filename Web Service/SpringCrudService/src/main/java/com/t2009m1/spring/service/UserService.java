package com.t2009m1.spring.service;

import com.t2009m1.spring.entity.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    User save(User user);
    List<User> finndAll();
    Optional<User> findById(long id);
    void delete(User user);
    User update(long id, User user);
}

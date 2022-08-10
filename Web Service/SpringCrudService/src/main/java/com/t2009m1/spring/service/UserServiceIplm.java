package com.t2009m1.spring.service;

import com.t2009m1.spring.entity.User;
import com.t2009m1.spring.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceIplm implements UserService{
    final UserRepository userRepository;

    @Override
    public User save(User user) {
        return userRepository.save(user);
    }

    @Override
    public List<User> finndAll() {
        return userRepository.findAll();
    }

    @Override
    public Optional<User> findById(long id) {
        return userRepository.findById(id);
    }

    @Override
    public void delete(User user) {
        userRepository.delete(user);
    }

    @Override
    public User update(long id, User user) {
        Optional<User> userCheck = userRepository.findById(id);
        if(userCheck.isPresent()) {
            User user1 = userCheck.get();
            user1.setFullName(user.getFullName());
            user1.setEmail(user1.getEmail());
            return userRepository.save(user);
        }
        return null;
    }
}

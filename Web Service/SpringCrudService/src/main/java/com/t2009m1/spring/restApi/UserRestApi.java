package com.t2009m1.spring.restApi;

import com.t2009m1.spring.entity.User;
import com.t2009m1.spring.service.UserServiceIplm;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(path = "/api/v1/users")
@RequiredArgsConstructor
public class UserRestApi {
    final UserServiceIplm userServiceIplm;

    @GetMapping
    public ResponseEntity<?> findAll() {
        return ResponseEntity.ok(userServiceIplm.finndAll());
    }

    @PostMapping
    public ResponseEntity<?> createNew(@RequestBody User requestUser) {
        return ResponseEntity.ok(userServiceIplm.save(requestUser));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateUser(@PathVariable long id, @RequestBody User user) {
        User userUpdate = userServiceIplm.update(id, user);
        if(userUpdate != null) {
            return ResponseEntity.ok(userUpdate);
        }
        return ResponseEntity.badRequest().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findById(@PathVariable Long id) {
        return ResponseEntity.ok(userServiceIplm.findById(id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        Optional<User> optionalUser = userServiceIplm.findById(id);
        if(!optionalUser.isPresent()) {
            return ResponseEntity.badRequest().build();
        }
        userServiceIplm.delete(optionalUser.get());
        return ResponseEntity.ok()
                .build();
    }
}

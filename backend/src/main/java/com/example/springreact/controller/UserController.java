package com.example.springreact.controller;

import com.example.springreact.model.User;
import com.example.springreact.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class UserController {

    private UserRepository userRepository;

    @Autowired
    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers(){
        return ResponseEntity.ok().body(userRepository.findAll());
    }

    @PostMapping("/users")
    public ResponseEntity<User> postUser(@RequestBody User u){
        return ResponseEntity.ok().body(userRepository.save(u));
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id){
        return userRepository.findById(id).map(user -> ResponseEntity.ok().body(user)).orElseGet(() -> ResponseEntity.notFound().build());
    }
}

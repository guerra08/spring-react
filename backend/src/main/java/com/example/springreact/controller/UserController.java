package com.example.springreact.controller;

import com.example.springreact.dto.UserDTO;
import com.example.springreact.exception.UserNotFoundException;
import com.example.springreact.model.User;
import com.example.springreact.repository.UserRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class UserController {

    private UserRepository userRepository;
    private ObjectMapper objectMapper = new ObjectMapper();

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

    @DeleteMapping("users/{id}")
    public ResponseEntity<User> deleteUserById(@PathVariable Long id)
    {
       return userRepository.findById(id).map(user -> {
           userRepository.delete(user);
           return ResponseEntity.ok().body(user);
       }).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PatchMapping("/users/{id}")
    public ResponseEntity<User> patchUserById(@RequestBody UserDTO userPatch, @PathVariable Long id){
        try{
            User currentUser = userRepository.findById(id).orElseThrow(UserNotFoundException::new);
            userPatch.patchUser(currentUser);
            userRepository.save(currentUser);
            return ResponseEntity.ok(currentUser);
        }catch (UserNotFoundException e){
            return ResponseEntity.notFound().build();
        }
    }
}

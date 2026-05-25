package com.symbiproject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.symbiproject.model.User;
import com.symbiproject.service.UserService;
import com.symbiproject.dto.LoginRequest;
@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    @Autowired
    private UserService service;

    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return service.saveUser(user);
    }
    
    @GetMapping("/check")
    public String check() {
        return "API working";
    }
    
    @PostMapping("/login")
    public String login(@RequestBody LoginRequest request) {

        return service.loginUser(
                request.getEmail(),
                request.getPassword()
        );
    }
    
    @PutMapping("/profile/{id}")
    public User updateProfile(
            @PathVariable Integer id,
            @RequestBody User user) {

        return service.updateProfile(id, user);
    }
    
    @GetMapping("/{id}")
    public User getUserById(@PathVariable Integer id) {
        return service.getUserById(id);
    }
}
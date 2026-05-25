package com.symbiproject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.symbiproject.model.Internship;
import com.symbiproject.service.InternshipService;
import com.symbiproject.dto.RecommendationResponse;

@RestController
@RequestMapping("/internship")
@CrossOrigin(origins = "http://localhost:4200")
public class InternshipController {

    @Autowired
    private InternshipService service;

    @PostMapping("/add")
    public Internship addInternship(@RequestBody Internship internship) {
        return service.saveInternship(internship);
    }

    @GetMapping("/all")
    public List<Internship> getAllInternships() {
        return service.getAllInternships();
    }
    
    @GetMapping("/recommend/{userId}")
    public List<RecommendationResponse>
    recommendInternships(@PathVariable Integer userId) {

        return service.recommendInternships(userId);
    }
    
    @GetMapping("/{id}")
    public Internship getInternshipById(
            @PathVariable Integer id) {

        return service.getInternshipById(id);
    }
}

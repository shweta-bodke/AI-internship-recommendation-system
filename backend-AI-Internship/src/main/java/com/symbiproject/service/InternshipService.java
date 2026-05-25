package com.symbiproject.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.symbiproject.model.Internship;
import com.symbiproject.repository.InternshipRepository;
import com.symbiproject.repository.UserRepository;

import java.util.ArrayList;
import java.util.Optional;

import com.symbiproject.dto.RecommendationResponse;
import com.symbiproject.model.User;

@Service
public class InternshipService {

    @Autowired
    private InternshipRepository repo;

    public Internship saveInternship(Internship internship) {
        return repo.save(internship);
    }

    public List<Internship> getAllInternships() {
        return repo.findAll();
    }
    
    @Autowired
    private UserRepository userRepo;
    
    public List<RecommendationResponse> recommendInternships(Integer userId) {

        Optional<User> optionalUser = userRepo.findById(userId);

        User user = optionalUser.get();

        List<Internship> internships = repo.findAll();

        List<RecommendationResponse> recommendations = new ArrayList<>();

        String userSkills = user.getTechnicalSkills().toLowerCase();

        for (Internship internship : internships) {

            String internshipSkills =
                    internship.getRequiredSkills().toLowerCase();

            String[] requiredSkills =
                    internshipSkills.split(",");

            int matchedSkills = 0;

            for (String skill : requiredSkills) {

                if (userSkills.contains(skill.trim())) {
                    matchedSkills++;
                }
            }

            int percentage =
                    (matchedSkills * 100) / requiredSkills.length;

            // CGPA check
            if (user.getCgpa() >= internship.getMinimumCgpa()) {

                RecommendationResponse response =
                        new RecommendationResponse();

                response.setCompanyName(
                        internship.getCompanyName());

                response.setRole(
                        internship.getRole());

                response.setLocation(
                        internship.getLocation());

                response.setStipend(
                        internship.getStipend());

                response.setMatchPercentage(
                        percentage);

                if(percentage >= 65) {
                    recommendations.add(response);
                }
            }
        }

        return recommendations;
    }
    
    public Internship getInternshipById(Integer id) {
        return repo.findById(id).orElse(null);
    }
}

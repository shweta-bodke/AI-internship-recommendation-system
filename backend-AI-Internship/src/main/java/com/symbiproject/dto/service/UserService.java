package com.symbiproject.service;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.Optional;
import com.symbiproject.model.User;
import com.symbiproject.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository repo;

    @Autowired
    private BCryptPasswordEncoder encoder;

    public User saveUser(User user) {

        String hashedPassword = encoder.encode(user.getPassword());

        user.setPassword(hashedPassword);

        return repo.save(user);
    }
    
    public String loginUser(String email, String password) {

        Optional<User> optionalUser = repo.findByEmail(email);

        if (optionalUser.isPresent()) {

            User dbUser = optionalUser.get();

            boolean isMatch = encoder.matches(password, dbUser.getPassword());

            if (isMatch) {
                return "Login Successful";
            } else {
                return "Invalid Password";
            }

        } else {
            return "Email not found";
        }
    }
    
    //update profile.
    public User updateProfile(Integer id, User updatedUser) {

        Optional<User> optionalUser = repo.findById(id);

        if(optionalUser.isPresent()) {

            User existingUser = optionalUser.get();
            
            existingUser.setGender(updatedUser.getGender());
            existingUser.setDateOfBirth(updatedUser.getDateOfBirth());
            existingUser.setTechnicalSkills(updatedUser.getTechnicalSkills());
            existingUser.setCgpa(updatedUser.getCgpa());
            existingUser.setCurrentDegree(updatedUser.getCurrentDegree());
            existingUser.setSpecialization(updatedUser.getSpecialization());
            existingUser.setCollegeName(updatedUser.getCollegeName());
            existingUser.setPassingYear(updatedUser.getPassingYear());
            existingUser.setPreferredLocation(updatedUser.getPreferredLocation());
            existingUser.setPreferredInternshipRole(updatedUser.getPreferredInternshipRole());
            existingUser.setTenthPercentage(updatedUser.getTenthPercentage());
            existingUser.setTwelfthPercentage(updatedUser.getTwelfthPercentage());
            existingUser.setProjectSummary(updatedUser.getProjectSummary());
            existingUser.setGithubLink(updatedUser.getGithubLink());
            existingUser.setLinkedinLink(updatedUser.getLinkedinLink());
            existingUser.setCertifications(updatedUser.getCertifications());
            existingUser.setAddress(updatedUser.getAddress());
            existingUser.setLocation(updatedUser.getLocation());
            existingUser.setResumePath(updatedUser.getResumePath());
            return repo.save(existingUser);
        }

        return null;
    }
    
    public User getUserById(Integer id) {
        return repo.findById(id).orElse(null);
    }
}
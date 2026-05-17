package com.symbiproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
import org.springframework.stereotype.Repository;

import com.symbiproject.model.User;
@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	 Optional<User> findByEmail(String email);
}

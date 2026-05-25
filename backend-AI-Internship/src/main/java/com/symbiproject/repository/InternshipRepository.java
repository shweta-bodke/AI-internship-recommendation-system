package com.symbiproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.symbiproject.model.Internship;

@Repository
public interface InternshipRepository extends JpaRepository<Internship, Integer> {

}

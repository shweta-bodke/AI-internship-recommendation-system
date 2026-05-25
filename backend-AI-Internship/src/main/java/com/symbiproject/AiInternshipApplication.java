package com.symbiproject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "com.symbiproject")
public class AiInternshipApplication {

    public static void main(String[] args) {
        SpringApplication.run(AiInternshipApplication.class, args);
    }
}
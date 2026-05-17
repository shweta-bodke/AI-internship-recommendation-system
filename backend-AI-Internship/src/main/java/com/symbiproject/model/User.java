package com.symbiproject.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    
    private int id;
    //Authentication details 
    private String name;
    private String email;
    private String password;
    private String phone;
    
    //Personal Details
    private String address;
    private String gender;
    private String dateOfBirth;
    private String location;
    
    //Education
    private String collegeName;
    private String currentDegree;
    private String specialization;
    private Double cgpa;
    private Integer passingYear;
    private Double twelfthPercentage;
    private Double tenthPercentage;
    
    //Skills & Projects
    private String technicalSkills;
    private String projectSummary;
    private String githubLink;
    private String linkedinLink;
    
    //Resume & Certifications
    private String certifications;
    private String resumePath;
    
    //Preferences
    private String preferredInternshipRole;
    private String preferredLocation;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getDateOfBirth() {
		return dateOfBirth;
	}
	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getCollegeName() {
		return collegeName;
	}
	public void setCollegeName(String collegeName) {
		this.collegeName = collegeName;
	}
	public String getCurrentDegree() {
		return currentDegree;
	}
	public void setCurrentDegree(String currentDegree) {
		this.currentDegree = currentDegree;
	}
	public String getSpecialization() {
		return specialization;
	}
	public void setSpecialization(String specialization) {
		this.specialization = specialization;
	}
	public Double getCgpa() {
		return cgpa;
	}
	public void setCgpa(Double cgpa) {
		this.cgpa = cgpa;
	}
	public Integer getPassingYear() {
		return passingYear;
	}
	public void setPassingYear(Integer passingYear) {
		this.passingYear = passingYear;
	}
	public Double getTwelfthPercentage() {
		return twelfthPercentage;
	}
	public void setTwelfthPercentage(Double twelfthPercentage) {
		this.twelfthPercentage = twelfthPercentage;
	}
	public Double getTenthPercentage() {
		return tenthPercentage;
	}
	public void setTenthPercentage(Double tenthPercentage) {
		this.tenthPercentage = tenthPercentage;
	}
	public String getTechnicalSkills() {
		return technicalSkills;
	}
	public void setTechnicalSkills(String technicalSkills) {
		this.technicalSkills = technicalSkills;
	}
	public String getProjectSummary() {
		return projectSummary;
	}
	public void setProjectSummary(String projectSummary) {
		this.projectSummary = projectSummary;
	}
	public String getGithubLink() {
		return githubLink;
	}
	public void setGithubLink(String githubLink) {
		this.githubLink = githubLink;
	}
	public String getLinkedinLink() {
		return linkedinLink;
	}
	public void setLinkedinLink(String linkedinLink) {
		this.linkedinLink = linkedinLink;
	}
	public String getCertifications() {
		return certifications;
	}
	public void setCertifications(String certifications) {
		this.certifications = certifications;
	}
	public String getResumePath() {
		return resumePath;
	}
	public void setResumePath(String resumePath) {
		this.resumePath = resumePath;
	}
	public String getPreferredInternshipRole() {
		return preferredInternshipRole;
	}
	public void setPreferredInternshipRole(String preferredInternshipRole) {
		this.preferredInternshipRole = preferredInternshipRole;
	}
	public String getPreferredLocation() {
		return preferredLocation;
	}
	public void setPreferredLocation(String preferredLocation) {
		this.preferredLocation = preferredLocation;
	}
	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", email=" + email + ", password=" + password + ", phone=" + phone
				+ ", address=" + address + ", gender=" + gender + ", dateOfBirth=" + dateOfBirth + ", location="
				+ location + ", collegeName=" + collegeName + ", currentDegree=" + currentDegree + ", specialization="
				+ specialization + ", cgpa=" + cgpa + ", passingYear=" + passingYear + ", twelfthPercentage="
				+ twelfthPercentage + ", tenthPercentage=" + tenthPercentage + ", technicalSkills=" + technicalSkills
				+ ", projectSummary=" + projectSummary + ", githubLink=" + githubLink + ", linkedinLink=" + linkedinLink
				+ ", certifications=" + certifications + ", resumePath=" + resumePath + ", preferredInternshipRole="
				+ preferredInternshipRole + ", preferredLocation=" + preferredLocation + "]";
	}
    
    
    
    }
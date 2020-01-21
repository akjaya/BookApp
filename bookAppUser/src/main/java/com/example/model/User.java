package com.example.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name = "user")
public class User {
 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 private int id;
 @Column(name = "username")
 private String username;
 @Column(name = "password")
 private String password;
 @Column(name="name")
 private String name;
 @Column(name="image", length=1000000,columnDefinition = "mediumtext")
 private String image;
// Default constructor
public User() {
	super();
}
public User(String username, String password, String name, String image) {
	super();
	this.username = username;
	this.password = password;
	this.name = name;
	this.image = image;
}

public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getUsername() {
	return username;
}
public void setUsername(String username) {
	this.username = username;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getImage() {
	return image;
}
public void setImage(String image) {
	this.image = image;
}
}

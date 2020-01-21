package com.example.service;
import java.util.List;

import com.example.model.User;
public interface UserService {
	public List<User> login(String username, String password);
	public User registeruser(User re);
	
	
	public User getUserByUsername(String username);

}
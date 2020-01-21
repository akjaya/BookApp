package com.example.service;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



import com.example.model.User;
import com.example.repo.UserRepository;
@Service
public class UserServiceImpl implements UserService {
	private static Logger logger=LoggerFactory.getLogger(UserServiceImpl.class);
	@Autowired
	private UserRepository repo;
	@Override
	public User registeruser(User re) {
		
		return repo.save(re);
	}
	@Override
	public List<User> login(String username, String password) {
			List<User> list = null;
			try {
			list =repo.findByUsernameAndPassword(username, password);
			}
			catch(Exception e) {logger.error("error while login");}
			return list;
	}
	@Override
	public User getUserByUsername(String username)  {
		
		return repo.findByUsername(username);
	}

	
}

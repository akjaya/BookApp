package com.example.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.mail.MailMethod;
import com.example.model.User;
import com.example.service.UserService;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import springfox.documentation.swagger2.annotations.EnableSwagger2;
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api")
@EnableSwagger2
public class UserController {

	
	String username;
	String content="Thank you for registering with BookSpot. Now you can get all information about your favourite books and also give your reviews . ";
	String subject="Thank You";
	String s1="Book Spot";
	@Autowired
	UserService ls;
	

	@PostMapping("/users")
	public ResponseEntity<?> logIn(@RequestBody User user)
	{
		User user1 = ls.getUserByUsername(user.getUsername());
		Boolean b = BCrypt.checkpw(user.getPassword(), user1.getPassword());
		if(b==true) {
			
			
			String token = Jwts.builder().setId(user1.getUsername()).setIssuedAt(new Date())
					.signWith(SignatureAlgorithm.HS256, "usersecretkey").compact();
			
			Map<String, String> tokenMap = new HashMap<String, String>();
			tokenMap.put("token", token);
			tokenMap.put("message", "User Successfully logged in");
			tokenMap.put("image", user1.getImage());
			ResponseEntity<Map<String, String>> response = new ResponseEntity<Map<String, String>>(tokenMap, HttpStatus.OK);
			
			return response;
		}
		else {
			
			return new ResponseEntity<User>( HttpStatus.NOT_FOUND);
		}
	}
  

	@PostMapping(value = "/users/create")
	public ResponseEntity<User> registeruser(@RequestBody  User user)
	{
		BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
		String userHashedPassword = bCryptPasswordEncoder.encode(user.getPassword());
		User resm = new User(user.getUsername(),userHashedPassword,user.getName(), user.getImage());
				User userResp = ls.registeruser(resm);
				MailMethod.sendMail(user.getUsername(), s1, subject, content);
		return new ResponseEntity<User>(userResp,HttpStatus.OK);

	}
		

	@GetMapping("/users/{id}")
	public ResponseEntity<User> getUser(@PathVariable("id") String id){
		ResponseEntity<User> rs = null;
		try {
			
			User user = ls.getUserByUsername(id);
			rs = ResponseEntity.status(HttpStatus.OK).body(user);
		} catch(Exception e) {
			rs = ResponseEntity.status(HttpStatus.CONFLICT).build();
		}
		
		 return rs;
	}


		

}

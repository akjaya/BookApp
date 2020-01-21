package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.model.Recommended;
import com.example.service.RecommendedService;

import springfox.documentation.swagger2.annotations.EnableSwagger2;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api")
@EnableSwagger2
public class RecommendedController {
	@Autowired
	private RecommendedService fs;
	@GetMapping("/bookApp/getRecommendedBooksByIdAndUsername/{id}/{username}")
	public ResponseEntity<?> getBookByReccommendationByIdAndUsername (@PathVariable("id") String id,@PathVariable ("username") String username) 
	{
		
		ResponseEntity<?> rs=null;
		try {
			List<Recommended> b=fs.getRecommendedBooksByIdAndUsername(id, username);
			rs=ResponseEntity.status(HttpStatus.OK).body(b);
		}
		catch(Exception e)
		{
			rs=ResponseEntity.status(HttpStatus.CONFLICT).build();
		}
		return rs;
	}
	@GetMapping("/bookApp/getMyRecommendedBooks/{username}")
	public ResponseEntity<?> getBookByReccommendation (@PathVariable ("username") String username) 
	{
		
		ResponseEntity<?> rs=null;
		try {
			List<Recommended> b=fs.getUsersAllRecommended(username);
			rs=ResponseEntity.status(HttpStatus.OK).body(b);
		}
		catch(Exception e)
		{
			rs=ResponseEntity.status(HttpStatus.CONFLICT).build();
		}
		return rs;
	}
	
	@GetMapping("/bookApp/getAllRecommendedBooks")
	public ResponseEntity<?> getAllBooks () 
	{

		ResponseEntity<?> rs=null;
		try {
			List<Recommended> b=fs.getAllRecommend();
			
			rs=ResponseEntity.status(HttpStatus.OK).body(b);
		}
		catch(Exception e)
		{
			rs=ResponseEntity.status(HttpStatus.CONFLICT).build();
		}
		return rs;
	}
	
	@PostMapping("/bookApp/addToRecommendedBooks")
	public ResponseEntity<?> saveBook(@RequestBody Recommended b) 
	{
		ResponseEntity<?> rs=null;
		try
		{
			Recommended bk=fs.saveRecommended(b);
			if(bk!=null)
			{
				rs=ResponseEntity.status(HttpStatus.CREATED).build();
			}
			else
			{
				rs=ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
			}
		}
		catch(Exception e)
		{
			rs=ResponseEntity.status(HttpStatus.CONFLICT).build();
		}
		return rs;
	}
	@DeleteMapping("/bookApp/unrecommend/{id}/{username}")
	  public ResponseEntity<?> deleteRecommend(@PathVariable("id") String id, @PathVariable("username") String username) {
	    
	    
	    ResponseEntity<?> rs=null;
		
			
			fs.deleteFromRecommend(id, username);
			
			
			rs=ResponseEntity.status(HttpStatus.OK).build();
			
		

		return rs;
	    
	  }
	

}

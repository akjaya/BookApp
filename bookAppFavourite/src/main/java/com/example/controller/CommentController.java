package com.example.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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

import com.example.model.Comment;
import com.example.service.CommentService;

import springfox.documentation.swagger2.annotations.EnableSwagger2;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api")
@EnableSwagger2
public class CommentController {
	private static Logger logger=LoggerFactory.getLogger(CommentController.class);
	@Autowired
	CommentService fs;
	

	@PostMapping("/bookApp/addComment")
	public ResponseEntity<?> saveComment(@RequestBody Comment b) 
	{
		ResponseEntity<?> rs=null;
		try
		{
			Comment bk=fs.savecomment(b);
			if(bk!=null)
			{
				rs=ResponseEntity.status(HttpStatus.CREATED).build();
				logger.info("Comment Saved");
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

	@GetMapping("/bookApp/getComments/{id}")
	public ResponseEntity<?> getBookById (@PathVariable ("id") String id) 
	{
		
		ResponseEntity<?> rs=null;
		try {
			List<Comment> b=fs.getAllCommentByBookId(id);
			rs=ResponseEntity.status(HttpStatus.OK).body(b);
		}
		catch(Exception e)
		{
			rs=ResponseEntity.status(HttpStatus.CONFLICT).build();
		}
		return rs;
	}
	@DeleteMapping("/bookApp/deleteComment/{id}")
	  public ResponseEntity<?> deleteCustomer(@PathVariable("id") int id) {
	   
	    
	    ResponseEntity<?> rs=null;
		
			
			fs.deleteComment(id);
			
			
			rs=ResponseEntity.status(HttpStatus.OK).build();
			
		

		return rs;
	}
	    

}

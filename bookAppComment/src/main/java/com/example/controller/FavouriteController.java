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

import com.example.model.Favourite;

import com.example.service.FavouriteService;

import springfox.documentation.swagger2.annotations.EnableSwagger2;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api")
@EnableSwagger2
public class FavouriteController {
	@Autowired
	private FavouriteService fs;
	
	@GetMapping("/bookApp/getFavouriteBooksByIdAndUsername/{id}/{username}")
	public ResponseEntity<?> getBookByFavouriteByIdAndUsername (@PathVariable("id") String id,@PathVariable ("username") String username) 
	{
		
		ResponseEntity<?> rs=null;
		try {
			List<Favourite> b=fs.getFavouriteBooksByIdAndUsername(id, username);
			rs=ResponseEntity.status(HttpStatus.OK).body(b);
		}
		catch(Exception e)
		{
			rs=ResponseEntity.status(HttpStatus.CONFLICT).build();
		}
		return rs;
	}
	@GetMapping("/bookApp/getFavourites/{username}")
	public ResponseEntity<?> getBookById (@PathVariable ("username") String username) 
	{
		
		ResponseEntity<?> rs=null;
		try {
			List<Favourite> b=fs.getAllFavourite(username);
			rs=ResponseEntity.status(HttpStatus.OK).body(b);
		}
		catch(Exception e)
		{
			rs=ResponseEntity.status(HttpStatus.CONFLICT).build();
		}
		return rs;
	}
	
	@PostMapping("/bookApp/addToFavourites")
	public ResponseEntity<?> saveBook(@RequestBody Favourite b) 
	{
		ResponseEntity<?> rs=null;
		try
		{
			Favourite bk=fs.saveFavourite(b);
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

	 @DeleteMapping("/bookApp/deleteFromFavourite/{id}/{username}")
	  public ResponseEntity<?> deleteCustomer(@PathVariable("id") String id, @PathVariable("username") String username) {
	    
	    ResponseEntity<?> rs=null;
		
			
			fs.deleteFromFavourite(id,username);
			
			
			rs=ResponseEntity.status(HttpStatus.OK).build();
			
		

		return rs;
	    
	  }
	
	

}

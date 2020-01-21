package com.example.repo;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.web.bind.annotation.CrossOrigin;


import com.example.model.Recommended;

@CrossOrigin(origins = "*")
public interface RecommendedRepository extends MongoRepository<Recommended, String> {
	
	public List<Recommended> findByUsername(String username);

	public Recommended deleteByBookIdAndUsername(String id,String username);
	
	public List<Recommended> findAll();
	
	public List<Recommended> findByBookIdAndUsername(String id,String username);

}

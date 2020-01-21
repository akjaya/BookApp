package com.example.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.model.Recommended;
import com.example.repo.RecommendedRepository;
@Service
public class RecommendedServiceImpl implements RecommendedService {
	private static Logger logger=LoggerFactory.getLogger(RecommendedServiceImpl.class);
	
	@Autowired
	private RecommendedRepository fr;
	@Override
	public Recommended deleteFromRecommend(String id, String username) {
		
		Recommended fa = null;
		try {
		
			 fa =fr.deleteByBookIdAndUsername(id,username);
			
		}
		catch(Exception e)
		{
			logger.error("Error while deleting from recommend");
		}
		
		return fa;
	}
	@Override
	public List<Recommended> getRecommendedBooksByIdAndUsername(String id, String username) {
	
		List<Recommended> o=fr.findByBookIdAndUsername(id, username);
		if(!o.isEmpty())
		{
			return o;
		}
		return null;
	}
	
	@Override
	public Recommended saveRecommended(Recommended f) {
		
		

		return fr.save(f);
	}

	@Override
	public List<Recommended> getUsersAllRecommended(String username) {
		
		List<Recommended> o=fr.findByUsername(username);
		if(!o.isEmpty())
		{
			return o;
		}
		return null;
	}

	@Override
	public List<Recommended> getAllRecommend() {
	
		
		
		List<Recommended> o=fr.findAll();
		if(!o.isEmpty())
		{
			return o;
		}
		return null;
	}

	

}

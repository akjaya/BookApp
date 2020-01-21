package com.example.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Favourite;

import com.example.repo.FavouriteRepository;
@Service
public class FavouriteServiceImpl implements FavouriteService {
	private static Logger logger=LoggerFactory.getLogger(FavouriteServiceImpl.class);
	@Autowired
	private FavouriteRepository fr;
	
	@Override
	public Favourite saveFavourite(Favourite f) {
	
		
		
		
		
		
		return fr.save(f);
	}
	@Override
	public List<Favourite> getAllFavourite(String username) {
		
		List<Favourite> o=fr.findByUsername(username);
		
		if(!o.isEmpty())
		{
			return o;
		}
		return null;
		
	}
	@Override
	public Favourite deleteFromFavourite(String id, String username) {
		
		Favourite fa = null;
		try {
		
			 fa =fr.deleteByBookIdAndUsername(id,username);
			
		}
		catch(Exception e)
		{
			logger.error("Error while deleting from favourites");
		}
		
		return fa;
	}
	@Override
	public List<Favourite> getFavouriteBooksByIdAndUsername(String id, String username) {
		
		List<Favourite> o=fr.findByBookIdAndUsername(id, username);
		if(!o.isEmpty())
		{
			return o;
		}
		return null;
	}



}

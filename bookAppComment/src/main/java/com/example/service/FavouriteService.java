package com.example.service;

import java.util.List;

import com.example.model.Favourite;


public interface FavouriteService {
	public Favourite saveFavourite(Favourite f);
	public List<Favourite> getAllFavourite (String username);
	public Favourite deleteFromFavourite(String id, String username);
	
	public List<Favourite> getFavouriteBooksByIdAndUsername(String id, String username);
	
}

package com.example.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.model.Comment;

import com.example.repo.CommentRepository;
@Service
public class CommentServiceImpl implements CommentService{
	private static Logger logger=LoggerFactory.getLogger(CommentServiceImpl.class);
	@Autowired
	CommentRepository fr;
	@Override
	public Comment savecomment(Comment c) {
		
		


		return fr.save(c);
	}
	@Override
	public List<Comment> getAllCommentByBookId(String bookId) {
	
				List<Comment> o=fr.findByBookId(bookId);
				
				if(!o.isEmpty())
				{
					return o;
				}
				return null;
	}
	@Override
	public Comment deleteComment(int commentId) {
				Comment fa = null;
		try {
		
			 fa =fr.deleteByCommentId(commentId);
			
		}
		catch(Exception e)
		{
			logger.error("Error deleting Comment by id");
		}
		
		return fa;
	}


	

}

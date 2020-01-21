package com.example.repo;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.model.Comment;


@CrossOrigin(origins = "*")
public interface CommentRepository extends MongoRepository<Comment, String>{
	public List<Comment> findByBookId(String bookId);
	public Comment deleteByCommentId(int commentId);
}

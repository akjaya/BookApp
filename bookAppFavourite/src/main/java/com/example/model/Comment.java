package com.example.model;



import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection  = "comment")
public class Comment {
	private String bookId;
	private int commentId;
	private String bookTitle;
	private String bookAuthors[];
	private String bookImage;
	private String bookDescription;
	private String usercomment;
	private String username;
	public int getCommentId() {
		return commentId;
	}
	public void setCommentId(int commentId) {
		this.commentId = commentId;
	}
	public String getBookId() {
		return bookId;
	}
	public void setBookId(String bookId) {
		this.bookId = bookId;
	}
	public String getBookTitle() {
		return bookTitle;
	}
	public void setBookTitle(String bookTitle) {
		this.bookTitle = bookTitle;
	}
	public String[] getBookAuthors() {
		return bookAuthors;
	}
	public void setBookAuthors(String[] bookAuthors) {
		this.bookAuthors = bookAuthors;
	}
	public String getBookImage() {
		return bookImage;
	}
	public void setBookImage(String bookImage) {
		this.bookImage = bookImage;
	}
	public String getBookDescription() {
		return bookDescription;
	}
	public void setBookDescription(String bookDescription) {
		this.bookDescription = bookDescription;
	}
	
	
	public Comment() {
		super();
	}
	public String getUsercomment() {
		return usercomment;
	}
	public void setUsercomment(String usercomment) {
		this.usercomment = usercomment;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	
	public Comment(String bookId, int commentId, String bookTitle, String[] bookAuthors, String bookImage,
			String bookDescription, String usercomment, String username) {
		super();
		this.bookId = bookId;
		this.commentId = commentId;
		this.bookTitle = bookTitle;
		this.bookAuthors = bookAuthors;
		this.bookImage = bookImage;
		this.bookDescription = bookDescription;
		this.usercomment = usercomment;
		this.username = username;
	}
	
	

}

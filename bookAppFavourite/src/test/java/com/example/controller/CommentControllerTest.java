package com.example.controller;
import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.*;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.verifyNoMoreInteractions;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Date;
import java.util.List;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import com.example.model.Comment;
import com.example.service.CommentService;
import com.fasterxml.jackson.databind.ObjectMapper;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;


@RunWith(SpringRunner.class)
@WebMvcTest(controllers = CommentController.class)
public class CommentControllerTest {
	String token;
	@Autowired
	private MockMvc mockMvc;
	@MockBean
	private CommentService service;
	private List<Comment> listcom;
	private Comment com;
	@Before
	public void setUp() throws Exception {
		 token=Jwts.builder().setId("padma").setIssuedAt(new Date())
					.signWith(SignatureAlgorithm.HS256, "usersecretkey").compact();
		com = new Comment("1234",111, "ABC",null,"img1",
				"XYZ", "Good", "Jaya");
	}
	@Test
	public void testAddCommentSuccess() throws Exception{
		//setup the service mock
		when(service.savecomment((Mockito.any(Comment.class)))).thenReturn(com);
		//send a post request using mockMVC
		String bookJson = new ObjectMapper().writeValueAsString(com);
		mockMvc.perform(post("/api/bookApp/addComment").header("Authorization","Bearer " +token)
						.contentType(MediaType.APPLICATION_JSON)
						.content(bookJson))
		.andExpect(status().isCreated());
		//verify mock has been called
		verify(service).savecomment(Mockito.any(Comment.class));
		verifyNoMoreInteractions(service);
	}
	
	@Test
	public void testGetBookById() throws Exception {
		when(service.getAllCommentByBookId(Mockito.anyString())).
				thenReturn(listcom);
		mockMvc.perform(get("/api/bookApp/getComments/1234").header("Authorization","Bearer " +token))
				.andExpect(status().isOk())
//				.andExpect(jsonPath("$.name", is("Testing with Mockito")))
				.andDo(print());
		verify(service,times(1)).getAllCommentByBookId(Mockito.anyString());
	}
	
	@Test
	public void testDeleteComment() throws Exception {
		
		when(service.deleteComment(Mockito.anyInt())).thenReturn(com);
		mockMvc.perform(delete("/api/bookApp/deleteComment/111").header("Authorization","Bearer " +token))
		//.andExpect(status().isOk())
//		.andExpect(jsonPath("$.name", is("Testing with Mockito")))
		.andDo(print());
          verify(service,times(1)).deleteComment(Mockito.anyInt());
}
}

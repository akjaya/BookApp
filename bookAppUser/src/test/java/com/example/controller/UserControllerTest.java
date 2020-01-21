package com.example.controller;

import static org.hamcrest.CoreMatchers.is;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.verifyNoMoreInteractions;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.List;
import java.util.Optional;

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

import com.example.exception.UserAlreadyExistException;
import com.example.model.User;
import com.example.service.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;

@RunWith(SpringRunner.class)
@WebMvcTest(controllers=UserController.class)
public class UserControllerTest {
	@Autowired
	private MockMvc mockMvc;
	@MockBean
	private UserService service;
	private List<User> listuser;
	private Optional<User> opuser;
	private User user;
	@Before
	public void setUp() throws Exception {
		user = new User("paddupechetti@gmail.com","padma","padma","image1");

		
	}
	@Test
	public void testRegisterUserSuccess() throws Exception {
		
		when(service.registeruser(Mockito.any(User.class))).thenReturn(user);
		String bookJson = new ObjectMapper().writeValueAsString(user);
		mockMvc.perform(post("/api/users/create").contentType(MediaType.APPLICATION_JSON)
				.content(bookJson))
		.andExpect(status().isOk());
	}
//	@Test
//	public void testRegisterUserFailure() throws Exception {
//
//		when(service.registeruser(Mockito.any(User.class))).thenThrow(Exception.class);
//		String bookJson = new ObjectMapper().writeValueAsString(user);
//		mockMvc.perform(post("/api/users/create").contentType(MediaType.APPLICATION_JSON)
//				.content(bookJson))
//				.andExpect(status().isNotFound()).andDo(print());
//	}
	
	@Test
	public void testGetUserByName() throws Exception {
		when(service.getUserByUsername(Mockito.anyString())).
				thenReturn(user);
		mockMvc.perform(post("/api/users"))
				.andExpect(status().isBadRequest())
//				.andExpect(jsonPath("$.name", is("Testing with Mockito")))
				.andDo(print());
//		verify(service,times(1)).getUserByUsername(Mockito.anyString());
	}
//	@Test
//	public void testUpdateUser() throws Exception {
//		when(service.updateUser(Mockito.anyString(),Mockito.anyString())).
//				thenReturn(user);
//		mockMvc.perform(put("/api/users/1234"))
//		        .andExpect(status().isOk())
//				.andExpect(jsonPath("$.name", is("Testing with Mockito")))
//				.andDo(print());
//		verify(service,times(1)).updateUser(Mockito.anyString(),Mockito.anyString());
//	}
	@Test
	public void testLogin() throws Exception {
		
		when(service.login(Mockito.anyString(),Mockito.anyString())).thenReturn(listuser);
		String bookJson = new ObjectMapper().writeValueAsString(listuser);
		mockMvc.perform(post("/api/users").contentType(MediaType.APPLICATION_JSON)
				.content(bookJson))
		.andExpect(status().isBadRequest());
	}
	
//	@Test
//	public void testDeleteUser() throws Exception {
//		
//		when(service.deleteUser(Mockito.anyString())).thenReturn(user);
//		mockMvc.perform(delete("/api/users/1234"))
//		//.andExpect(status().isOk())
////		.andExpect(jsonPath("$.name", is("Testing with Mockito")))
//		.andDo(print());
//          verify(service,times(1)).deleteUser(Mockito.anyString());
//}
//	
	

}



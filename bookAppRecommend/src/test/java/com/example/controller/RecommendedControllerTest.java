package com.example.controller;
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
import com.example.model.Recommended;
import com.example.service.RecommendedService;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
@RunWith(SpringRunner.class)
@WebMvcTest(controllers = RecommendedController.class)
public class RecommendedControllerTest {
	 String token;
	@Autowired
	private MockMvc mockMvc;
	@MockBean
	private RecommendedService service;
	private List<Recommended> listrecom;
	private Recommended recom;
	@Before
	public void setUp() throws Exception {
		 token=Jwts.builder().setId("padma").setIssuedAt(new Date())
				.signWith(SignatureAlgorithm.HS256, "usersecretkey").compact();
		recom = new Recommended("1234", "ABC",null, "XYZ",
				"2016-03-16", "sdsf","Drama", "image1","400",
				"english", "Rupees","shreya");
	}
	@After
	public void tearDown() throws Exception {
	}
	@Test
	public void testGetAllRecom() throws Exception {
		when(service.getAllRecommend()).
				thenReturn(listrecom);
		mockMvc.perform(get("/api/bookApp/getAllRecommendedBooks").header("Authorization","Bearer " +token))
				.andExpect(status().isOk())
//				.andExpect(jsonPath("$.name", is("Testing with Mockito")))
				.andDo(print());
		verify(service,times(1)).getAllRecommend();
	}
	@Test
	public void testGetRecomByIdAndName() throws Exception {
		when(service.getRecommendedBooksByIdAndUsername(Mockito.anyString(), Mockito.anyString())).
				thenReturn(listrecom);
		mockMvc.perform(get("/api/bookApp/getRecommendedBooksByIdAndUsername/1234/shreya").header("Authorization","Bearer " +token))
				.andExpect(status().isOk())
//				.andExpect(jsonPath("$.name", is("Testing with Mockito")))
				.andDo(print());
		verify(service,times(1)).getRecommendedBooksByIdAndUsername(Mockito.anyString(), Mockito.anyString());
	}
	@Test(expected=Exception.class)
	public void testGetRecomByIdAndNameFailure() throws Exception {
		when(service.getRecommendedBooksByIdAndUsername(Mockito.anyString(), Mockito.anyString()))
				.thenReturn(null).thenThrow(Exception.class);
		String recommendedJson = new ObjectMapper().writeValueAsString(recom);
		mockMvc.perform(get("/api/bookApp/getRecommendedBooksByIdAndUsername/1234/shreya").header("Authorization","Bearer " +token).contentType(MediaType.APPLICATION_JSON)
				.content(recommendedJson))
                 .andExpect(status().isConflict());
		verify(service,times(1)).getRecommendedBooksByIdAndUsername(Mockito.anyString(), Mockito.anyString());
		verifyNoMoreInteractions(service);
	}
	@Test
	public void testGetRecomByName() throws Exception {
		when(service.getUsersAllRecommended(Mockito.anyString())).
				thenReturn(listrecom);
		mockMvc.perform(get("/api/bookApp/getMyRecommendedBooks/shreya").header("Authorization","Bearer " +token))
				.andExpect(status().isOk())
//				.andExpect(jsonPath("$.name", is("Testing with Mockito")))
				.andDo(print());
		verify(service,times(1)).getUsersAllRecommended(Mockito.anyString());
	}
//	@Test
//	public void testAddToRecom() throws Exception{
//		//setup the service mock
//		when(service.saveRecommended(Mockito.any(Recommended.class))).thenReturn(recom);
//		//send a post request using mockMVC
//		String bookJson = new ObjectMapper().writeValueAsString(recom);
//		mockMvc.perform(post("/api/bookApp/addToRecommendedBooks")
//						.contentType(MediaType.APPLICATION_JSON)
//						.content(bookJson))
//		.andExpect(status().isCreated());
//		//verify mock has been called
//		verify(service).saveRecommended(Mockito.any(Recommended.class));
//		verifyNoMoreInteractions(service);
//	}
	@Test
	public void testAddRecommendationSuccess() throws Exception{
		//setup the service mock
		when(service.saveRecommended(Mockito.any(Recommended.class))).thenReturn(recom);
		//send a post request using mockMVC
		String recommendedJson = new ObjectMapper().writeValueAsString(recom);
		mockMvc.perform(post("/api/bookApp/addToRecommendedBooks").header("Authorization","Bearer " +token)
						.contentType(MediaType.APPLICATION_JSON)
						.content(recommendedJson))
		.andExpect(status().isCreated());
		//verify mock has been called
		verify(service).saveRecommended(Mockito.any(Recommended.class));
		verifyNoMoreInteractions(service);
	}
	@Test
	public void testAddRecommendationFailure() throws Exception{
		//setup the service mock
		when(service.saveRecommended(Mockito.any(Recommended.class))).thenReturn(null);
		//send a post request using mockMVC
		String recommendedJson = new ObjectMapper().writeValueAsString(recom);
		mockMvc.perform(post("/api/bookApp/addToRecommendedBooks").header("Authorization","Bearer " +token)
						.contentType(MediaType.APPLICATION_JSON)
						.content(recommendedJson))
		                .andExpect(status().isInternalServerError());
		//verify mock has been called
		verify(service).saveRecommended(Mockito.any(Recommended.class));
		verifyNoMoreInteractions(service);
	}
	@Test
	public void testDeleteRecom() throws Exception {
		when(service.deleteFromRecommend(Mockito.anyString(),Mockito.anyString())).thenReturn(recom);
		mockMvc.perform(delete("/api/bookApp/unrecommend/1234/shreya").header("Authorization","Bearer " +token))
		//.andExpect(status().isOk())
//		.andExpect(jsonPath("$.name", is("Testing with Mockito")))
		.andDo(print());
          verify(service,times(1)).deleteFromRecommend(Mockito.anyString(),Mockito.anyString());
}
}
package com.example.controller;
import static org.hamcrest.CoreMatchers.is;
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
import java.util.Optional;
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
import com.example.model.Favourite;
import com.example.service.FavouriteService;
import com.example.controller.FavouriteController;
import com.example.exception.BookAlreadyExistsException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
@RunWith(SpringRunner.class)
@WebMvcTest(controllers = FavouriteController.class)
public class FavouriteControllerTest {
	@Autowired
	private MockMvc mockMvc;
	@MockBean
	private FavouriteService service;
	private List<Favourite> listfav;
	private  Favourite fav;
	private Optional<Favourite> optfav;
	private String token;
	@Before
	public void setUp() throws Exception {
		token=Jwts.builder().setId("padma").setIssuedAt(new Date())
				.signWith(SignatureAlgorithm.HS256, "usersecretkey").compact();
		fav = new Favourite();
		fav.setBookId("1234");
		fav.setBookTitle("True Love End");
		fav.setBookAuthors(null);
		fav.setBookPublisher("VGS");
		fav.setBookPublishedDate("2011-05-04");
		fav.setBookDescription("Good Book");
		fav.setBookCategory("fiction");
		fav.setBookImage("image1");
		fav.setBookPrice("500");
		fav.setBookLanguage("English");
		fav.setBookCurrencytCode("Rupees");
		fav.setUsername("padma");
	}
	@After
	public void tearDown() throws Exception {
	}
	@Test
	public void testGetAllFav() throws Exception {
		//When a call is given to service.getBook
		when(service.getAllFavourite(Mockito.anyString())).thenReturn(listfav);
		mockMvc.perform(get("/api/bookApp/getFavourites/padma").header("Authorization","Bearer " +token))
		.andExpect(status().isOk())
//		.andExpect(jsonPath("$.name", is("Testing with Mockito")))
		.andDo(print());
          verify(service,times(1)).getAllFavourite(Mockito.anyString());
}
//	@Test(expected=Exception.class)
//	public void testGetAllFavFailure() throws Exception {
//		//When a call is given to service.getBook
//		when(service.getAllFavourite(Mockito.anyString())).thenReturn(null).thenThrow(Exception.class);
//		String favjson=new ObjectMapper().writeValueAsString(fav);
//		mockMvc.perform(get("/api/bookApp/getFavourites/padma").header("Authorization","Bearer " +token)
//		    .contentType(MediaType.APPLICATION_JSON)
//             .content(favjson))
//			.andExpect(status().isConflict())
//			.andDo(print());
//          verify(service,times(1)).getAllFavourite(Mockito.anyString());
//          verifyNoMoreInteractions(service);
//}
//	
	@Test
	public void testAddBookToFavSuccess() throws Exception {
		when(service.saveFavourite(Mockito.any(Favourite.class)))
		.thenReturn(fav);
		String bookJson = new ObjectMapper().writeValueAsString(fav);
		mockMvc.perform(post("/api/bookApp/addToFavourites").header("Authorization","Bearer " +token)
		            .contentType(MediaType.APPLICATION_JSON)
		            .content(bookJson))
                    .andExpect(status().isCreated());
		verify(service).saveFavourite(Mockito.any(Favourite.class));
		verifyNoMoreInteractions(service);
		}
	@Test
	public void testAddBookToFavFailure() throws Exception {
		//When a call is given to service.getBook
		when(service.saveFavourite(Mockito.any(Favourite.class))).
				thenReturn(null);
		String favjson=new ObjectMapper().writeValueAsString(fav);
		mockMvc.perform(post("/api/bookApp/addToFavourites").header("Authorization","Bearer " +token)
		       .contentType(MediaType.APPLICATION_JSON)
                .content(favjson))
				.andExpect(status().isInternalServerError())
				.andDo(print());
		verify(service).saveFavourite(Mockito.any(Favourite.class));
	}
//	
//	@Test
//	public void testAddBookToFavFailure() throws Exception {
//		//When a call is given to service.getBook
//		when(service.saveFavourite(Mockito.any(Favourite.class))).
//				thenThrow(Exception.class);
//		mockMvc.perform(post("/api/bookApp/addToFavourites").header("Authorization","Bearer " +token))
//				.andExpect(status().isConflict())
//				.andDo(print());
//		verify(service).saveFavourite(Mockito.any(Favourite.class));
//	}
//	
	@Test
	public void testDeleteFav() throws Exception {
		when(service.deleteFromFavourite(Mockito.anyString(),Mockito.anyString())).thenReturn(fav);
		mockMvc.perform(delete("/api/bookApp/deleteFromFavourite/1234/padma").header("Authorization","Bearer " +token))
		//.andExpect(status().isOk())
//		.andExpect(jsonPath("$.name", is("Testing with Mockito")))
		.andDo(print());
          verify(service,times(1)).deleteFromFavourite(Mockito.anyString(),Mockito.anyString());
}
	@Test
	public void testGetBYNameAndId() throws Exception  {
		when(service.getFavouriteBooksByIdAndUsername(Mockito.anyString(),Mockito.anyString())).thenReturn(listfav);
		mockMvc.perform(get("/api/bookApp/getFavouriteBooksByIdAndUsername/1234/padma").header("Authorization","Bearer " +token))
		.andExpect(status().isOk())
//		.andExpect(jsonPath("$.name", is("Testing with Mockito")))
		.andDo(print());
          verify(service,times(1)).getFavouriteBooksByIdAndUsername(Mockito.anyString(),Mockito.anyString());
	}
	@Test(expected=Exception.class)
	public void testGetBYNameAndIdFailure() throws Exception  {
		when(service.getFavouriteBooksByIdAndUsername(Mockito.anyString(),Mockito.anyString()))
		           .thenReturn(null).thenThrow(Exception.class);
		String favjson=new ObjectMapper().writeValueAsString(listfav);
		mockMvc.perform(get("/api/bookApp/getFavouriteBooksByIdAndUsername/1234/padma").header("Authorization","Bearer " +token)
			    .contentType(MediaType.APPLICATION_JSON)
                .content(favjson))
				.andExpect(status().isConflict())
				.andDo(print());
//		.andExpect(jsonPath("$.name", is("Testing with Mockito")))
          verify(service,times(1)).getFavouriteBooksByIdAndUsername(Mockito.anyString(),Mockito.anyString());
	}
}
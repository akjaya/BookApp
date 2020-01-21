package com.example.service;
import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import java.util.List;
import java.util.Optional;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;
import com.example.exception.BookAlreadyExistsException;
import com.example.model.Favourite;
import com.example.repo.FavouriteRepository;
@RunWith(MockitoJUnitRunner.class)
public class FavouriteServiceImplTest {
	@Mock
	private FavouriteRepository favRepository;
	@InjectMocks
	private FavouriteServiceImpl service;
	Favourite fav;
	List<Favourite> listfav;
	Optional<Favourite> optFav;
	@Before
	public void setUp() throws Exception {
		fav = new Favourite("1234", "Testing", null, "VGS",
				"2014-12-03", "ABC","Fiction", "image3","400",
				"english", "Rupees", "padma");
		optFav = Optional.of(fav);
	}
	@Test
	public void testAddFavSuccess() {
		// BookRepository repo = Mockito.mock(BookRepository.class);
//		when(favRepository.findByBookIdAndUsername(Mockito.anyString(),Mockito.anyString())).
//					thenReturn(listfav);
		when(favRepository.save(Mockito.any(Favourite.class))).
					thenReturn(fav);
		Favourite addedBook = service.saveFavourite(fav);
//		assertEquals(fav.getBookId(), addedBook.getBookId());
//		verify(favRepository).findByBookIdAndUsername(Mockito.anyString(),Mockito.anyString());
		verify(favRepository).save(Mockito.any());
	}
	@Test
	public void testAddFavFailure(){
		// BookRepository repo = Mockito.mock(BookRepository.class);
//		when(favRepository.findByBookIdAndUsername(Mockito.anyString(),Mockito.anyString())).
//					thenReturn(listfav);
		when(favRepository.save(Mockito.any(Favourite.class))).
					thenReturn(null);
		Favourite addedBook = service.saveFavourite(fav);
//		assertEquals(fav.getBookId(), addedBook.getBookId());
//		verify(favRepository).findByBookIdAndUsername(Mockito.anyString(),Mockito.anyString());
		verify(favRepository).save(Mockito.any());
	}
	@Test
	public void testGetAllFav()  {
//		when(favRepository.findAll()).
//					thenReturn(listfav);
//		when(favRepository.save(Mockito.any(Favourite.class))).
//					thenReturn(fav);
		Favourite addedBook =(Favourite) service.getAllFavourite("padma");
//		assertEquals(fav.getUsername(), addedBook.getUsername());
		verify(favRepository).findByUsername(Mockito.anyString());
//		verify(favRepository).save(Mockito.any());
	}
//	
	@Test
	public void testDeleteFav()  {
//		FavouriteRepository repo = Mockito.mock(FavouriteRepository.class);
//		when(favRepository.deleteByBookIdAndUsername(Mockito.anyString(), Mockito.anyString())).
//					thenReturn(fav);
//		when(favRepository.save(Mockito.any(Favourite.class))).
//					thenReturn(fav);
		Favourite addedfav =(Favourite) service.deleteFromFavourite(Mockito.anyString(), Mockito.anyString());
//		assertEquals(fav.getUsername(), addedBook.getUsername());
		verify(favRepository).deleteByBookIdAndUsername(Mockito.anyString(), Mockito.anyString());
//		verify(favRepository).save(Mockito.any());
	}
}

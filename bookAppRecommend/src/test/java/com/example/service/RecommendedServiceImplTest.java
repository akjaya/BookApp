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
import com.example.model.Recommended;
import com.example.repo.RecommendedRepository;
@RunWith(MockitoJUnitRunner.class)
public class RecommendedServiceImplTest {
	@Mock
	private RecommendedRepository recomRepository;
	@InjectMocks
	private RecommendedServiceImpl service;
	Recommended recom;
	Optional<Recommended> optrecom;
	@Before
	public void setUp() throws Exception {
		recom = new Recommended("1234","ABC",null,"XYZ",
				"2013-11-03","Good", "Fiction","image1", "300",
				"Eng", "Rupees", "abhi");
		optrecom = Optional.of(recom);
	}
	@Test
	public void testSaveRecom(){
		// BookRepository repo = Mockito.mock(BookRepository.class);
//		when(recomRepository.findAllById(Mockito.any())).
//					thenReturn(optrecom);
		when(recomRepository.save(Mockito.any(Recommended.class))).
					thenReturn(recom);
		Recommended addedBook = service.saveRecommended(recom);
//		assertEquals(book.getName(), addedBook.getName());
//		verify(bookRepository).findById(Mockito.anyInt());
		verify(recomRepository).save(Mockito.any());
	}
	@Test
	public void testSaveRecomFailure() {
		// BookRepository repo = Mockito.mock(BookRepository.class);
//		when(recomRepository.findAllById(Mockito.any())).
//					thenReturn(optrecom);
		when(recomRepository.save(Mockito.any(Recommended.class))).
					thenReturn(null);
		Recommended addedrecom = service.saveRecommended(recom);
//		assertEquals(book.getName(), addedBook.getName());
//		verify(bookRepository).findById(Mockito.anyInt());
		verify(recomRepository).save(Mockito.any());
	}
	@Test
	public void testDeleteRecom() {
		// BookRepository repo = Mockito.mock(BookRepository.class);
//		when(recomRepository.findAllById(Mockito.any())).
//					thenReturn(optrecom);
//		when(recomRepository.save(Mockito.any(Recommended.class))).
//					thenReturn(recom);
		Recommended addedBook = service.deleteFromRecommend(Mockito.anyString(), Mockito.anyString());
//		assertEquals(book.getName(), addedBook.getName());
		verify(recomRepository).deleteByBookIdAndUsername(Mockito.anyString(),Mockito.anyString());
//		verify(recomRepository).save(Mockito.any());
	}
	@Test
	public void testGetAllRecom()  {
		List<Recommended> addedrecom = service.getAllRecommend();
		verify(recomRepository).findAll();
//		verify(recomRepository).save(Mockito.any());
	}
}
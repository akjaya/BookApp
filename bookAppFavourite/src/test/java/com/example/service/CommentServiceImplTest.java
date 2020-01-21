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
import com.example.model.Comment;

import com.example.repo.CommentRepository;


@RunWith(MockitoJUnitRunner.class)
public class CommentServiceImplTest {
	
	@Mock
	private CommentRepository comRepository;
	@InjectMocks
	private CommentServiceImpl service;
	Comment com;
	List<Comment> listcom;
	Optional<Comment> optCom;
	@Before
	public void setUp() throws Exception {
		com = new Comment("1234", 123,"ABC",null, "img2",
				"XYZ","Very good","shreya");
		optCom = Optional.of(com);
	}
	@Test
	public void testAddCommentSuccess() throws BookAlreadyExistsException {
		// BookRepository repo = Mockito.mock(BookRepository.class);
//		when(favRepository.findByBookIdAndUsername(Mockito.anyString(),Mockito.anyString())).
//					thenReturn(listfav);
		when(comRepository.save(Mockito.any(Comment.class))).
					thenReturn(com);
		Comment addedBook = service.savecomment(com);
//		assertEquals(fav.getBookId(), addedBook.getBookId());
//		verify(favRepository).findByBookIdAndUsername(Mockito.anyString(),Mockito.anyString());
		verify(comRepository).save(Mockito.any());
	}
	@Test
	public void testDeleteComment()  {
//		when(favRepository.findByBookIdAndUsername(Mockito.anyString(),Mockito.anyString())).
//					thenReturn(listfav);
//		when(comRepository.save(Mockito.any(Comment.class))).
//					thenReturn(com);
		Comment addedBook = service.deleteComment(123);
//		assertEquals(fav.getBookId(), addedBook.getBookId());
		verify(comRepository).deleteByCommentId(Mockito.anyInt());
//		verify(comRepository).save(Mockito.any());
	}

}

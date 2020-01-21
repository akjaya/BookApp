import { browser, logging } from 'protractor';
import { getMaxListeners } from 'cluster';
import { BookDetailsPage } from './bookdetails.po';
describe('BOOK DETAILS TEST', () => {
  let page:  BookDetailsPage;
  beforeEach(() => {
    page = new  BookDetailsPage();
    page.navigateToBookDetails();
  });

  // navbar
it('should check navbar in book-details page', () => {
    page.navigateToBookDetails();
    expect(page.isnavPresentinbookdetails()).toBeTruthy('<navbar> should exist in book-details.component.html');
  });
  // footer
  it('should check footer is present book-details page', () => {
    page.navigateToBookDetails();
    expect(page.isfooterPresentbookdetails()).toBeTruthy('<footer> should exist in  book-details.component.html');
   });
  // div
   it('should check div is present book-details page', () => {
    page.navigateToBookDetails();
    expect(page.isdivpresentbookdetails()).toBeTruthy('<div> should exist in  book-details.component.html');
  });
  // comment
  it('should check comment is present book-details page', () => {
    page.navigateToBookDetails();
    expect(page.iscommentpresentbookdetails()).toBeTruthy('<comment> should exist in book-details.component.html');
  });
});
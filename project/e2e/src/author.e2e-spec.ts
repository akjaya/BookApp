import { browser, logging } from 'protractor';
import { getMaxListeners } from 'cluster';
import { AuthorPage } from './author.po';
describe('AUTHOR TEST', () => {
  let page: AuthorPage;
  beforeEach(() => {
    page = new AuthorPage();
    page.navigateToAuthor();
  });
  // navbar in author page
  it('should check navbar in author page', () => {
    page.navigateToAuthor();
    expect(page.isnavPresentinAuthor()).toBeTruthy('<navbar> should exist in author.component.html');
  });
  // footer
  it('should check footer is present author page', () => {
    page.navigateToAuthor();
    expect(page.isfooterPresentauthor()).toBeTruthy('<footer> should exist in author.component.html');
   });
  //  div
   it('should check div is present author page', () => {
    page.navigateToAuthor();
    expect(page.isdivpresentauthor()).toBeTruthy('<div> should exist in author.component.html');
  });
});
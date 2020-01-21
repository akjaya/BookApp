import { browser, logging } from 'protractor';
import { getMaxListeners } from 'cluster';
import { SearchPage } from './search.po';
describe('SEARCH TEST', () => {
  let page: SearchPage;
  beforeEach(() => {
    page = new SearchPage();
    page.navigateToSearch();
  });

    // navbar
it('should check navbar in search page', () => {
    page.navigateToSearch();
    expect(page.isnavPresent()).toBeTruthy('<navbar> should exist in search.component.html');
  });

    // footer
    it('should check footer is present search page', () => {
        page.navigateToSearch();
        expect(page.isfooterPresent()).toBeTruthy('<footer> should exist in  search.component.html');
       });
      // div
       it('should check div is present search page', () => {
        page.navigateToSearch();
        expect(page.isdivpresent()).toBeTruthy('<div> should exist in  search.component.html');
      });
});
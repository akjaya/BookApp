import { browser, logging } from 'protractor';
import { getMaxListeners } from 'cluster';
import { FavouritesPage } from './favourites.po';;
describe('FAVOURITES TEST', () => {
  let page:  FavouritesPage;
  beforeEach(() => {
    page = new  FavouritesPage();
    page.navigateToFavourites();
  });
    // navbar
it('should check navbar in favourites page', () => {
    page.navigateToFavourites();
    expect(page.isnavPresent()).toBeTruthy('<navbar> should exist favourite.component.html');
  });
//   div
it('should check div in favourites page', () => {
    page.navigateToFavourites();
    expect(page.isdivPresent()).toBeTruthy('<div> should exist favourite.component.html');
  });
//   h1
it('should check h1 in favourites page', () => {
    page.navigateToFavourites();
    expect(page.ishPresent()).toBeTruthy('<h1> should exist favourite.component.html');
  });


});
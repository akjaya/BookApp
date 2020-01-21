import { browser, by, element, promise, ElementFinder } from 'protractor';
export class FavouritesPage {

    navigateToFavourites() {
        return browser.get('/favourites');
    }
    getnav(): ElementFinder {
        return element(by.css('nav'));
      }
      isnavPresent(): promise.Promise<boolean>{
        return this.getnav().isPresent();
      }

      getdiv(): ElementFinder {
        return element(by.css('div'));
      }
      isdivPresent(): promise.Promise<boolean>{
        return this.getdiv().isPresent();
      }

      geth(): ElementFinder {
        return element(by.css('h1'));
      }
      ishPresent(): promise.Promise<boolean>{
        return this.geth().isPresent();
      }
}
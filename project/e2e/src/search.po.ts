import { browser, by, element, promise, ElementFinder } from 'protractor';
export class SearchPage {
    navigateToSearch() {
        return browser.get('/search');
    }
    // navbar
    getnav(): ElementFinder {
        return element(by.css('nav'));
      }
      isnavPresent(): promise.Promise<boolean>{
        return this.getnav().isPresent();
      }

      // footer
    getfooter(): ElementFinder {
        return element(by.css('section'));
      }
    isfooterPresent(): promise.Promise<boolean> {
      return this.getfooter().isPresent();
    }
    // div
    getdiv(): ElementFinder {
        return element(by.css('div'));
      }
    isdivpresent(): promise.Promise<boolean> {
        return this.getdiv().isPresent();
    }
     
}
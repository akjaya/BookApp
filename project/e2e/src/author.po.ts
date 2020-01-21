import { browser, by, element, promise, ElementFinder } from 'protractor';
export class AuthorPage {
    navigateToAuthor() {
        return browser.get('/author');
    }
        // navbar
        getnav(): ElementFinder {
            return element(by.css('nav'));
          }
          isnavPresentinAuthor(): promise.Promise<boolean>{
            return this.getnav().isPresent();
          }
          
        // footer
        getfooter(): ElementFinder {
          return element(by.css('section'));
        }
        isfooterPresentauthor(): promise.Promise<boolean> {
          return this.getfooter().isPresent();
        }
        getdiv(): ElementFinder {
            return element(by.css('div'));
          }
        // div
        isdivpresentauthor(): promise.Promise<boolean> {
          return this.getdiv().isPresent();
        }
}

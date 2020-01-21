import { browser, by, element, promise, ElementFinder } from 'protractor';
export class BookDetailsPage {
    navigateToBookDetails() {
        return browser.get('/bookDetails');
    }
    // navbar
    getnav(): ElementFinder {
        return element(by.css('nav'));
      }
      isnavPresentinbookdetails(): promise.Promise<boolean>{
        return this.getnav().isPresent();
      }
    // footer
    getfooter(): ElementFinder {
        return element(by.css('section'));
      }
    isfooterPresentbookdetails(): promise.Promise<boolean> {
      return this.getfooter().isPresent();
    }
    // div
    getdiv(): ElementFinder {
        return element(by.css('div'));
      }
    isdivpresentbookdetails(): promise.Promise<boolean> {
      return this.getdiv().isPresent();
    }
        // comment
        getcomment(): ElementFinder {
          return element(by.css('form'));
        }
        iscommentpresentbookdetails(): promise.Promise<boolean> {
          return this.getcomment().isPresent();
        }
}
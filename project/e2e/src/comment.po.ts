import { browser, by, element, promise, ElementFinder } from 'protractor';
export class CommentPage {
  
    navigateToComment() {
        return browser.get('/comment');
    }

    isFormPresent(): any {
        return this.getForm().isPresent();

    }
    getForm() {
        return element(by.css('div'));
    }
}
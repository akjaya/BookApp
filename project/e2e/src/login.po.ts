import { browser, by, element, promise, ElementFinder } from 'protractor';
export class LoginPage {
  // get login component
  getloginComponent(): ElementFinder {
    return element(by.tagName('app-login'));
  }
  navigateToLogin() {
    return browser.get('/login');
  }
  getEmailTextBox(){
    return element(by.name('email'));
  }
  getPasswordTextBox(){
    return element(by.name('password'));
  }
  // get submit button
  getSubmitButton(): ElementFinder {
    return this.getloginComponent().element(by.buttonText('Login'));
  }
  // check submit button is present or not
  isSubmitButtonPresent(): promise.Promise<boolean> {
    return this.getSubmitButton().isPresent();
  }
  // click submit button
  clickSubmitButton(): promise.Promise<void> {
    return this.getSubmitButton().click();
  }
}






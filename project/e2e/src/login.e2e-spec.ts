import { LoginPage } from './login.po';
import { browser, logging } from 'protractor';
import { getMaxListeners } from 'cluster';
describe('LOGIN TEST', () => {
  let page: LoginPage;
  beforeEach(() => {
    page = new LoginPage();
    page.navigateToLogin();
  });
//Input Box Email
  it('should get username input box', () => {
    page.navigateToLogin();
    expect(page.getEmailTextBox())
    .toBeTruthy(`<input type="text" [formControl]='username' matInput class="input"> should exist in login.component.html`);
  });
  //Input Box Password
  it('should get passsword input box', () => {
    page.navigateToLogin();
    expect(page.getPasswordTextBox())
    .toBeTruthy(`<input type="password" [formControl]='password' class="input">
      should exist in login.component.html`);
  });
  //Submit Button
  it('should get submit button', () => {
    page.navigateToLogin();
    expect(page.isSubmitButtonPresent()).toBeTruthy(`<button type="submit"  class="registerbtn">Login</button> should exist in login.component.html`);
  });
});
import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
describe('BookApp App', () => {
  let page: AppPage;
  beforeEach(() => {
    page = new AppPage();
  });
// -------------------------dashboard--------------------------
  // for navbar
  it('should check nav is present in dashboard page', () => {
    page.navigateTo();
    expect(page.isDashboardPresent()).toBeTruthy('<navbar> should exist in dashboard.component.html');
  });
   // for div
    it('should check div is present dashboard page', () => {
      page.navigateTo();
      expect(page.isdivpresent()).toBeTruthy('<div> should exist in dashboard.component.html');
    });
  // for section
  it('should check section is present dashboard page', () => {
    page.navigateTo();
    expect(page.issectionPresent()).toBeTruthy('<section> should exist in dashboard.component.html');
   });
  // for h1
  it('should check h1 is present dashboard page', () => {
   page.navigateTo();
   expect(page.isheaderPresent()).toBeTruthy('<h1> should exist in dashboard.component.html');
  });
  // for footer
  it('should check footer is present dashboard page', () => {
    page.navigateTo();
    expect(page.isfooterPresent()).toBeTruthy('<footer> should exist in dashboard.component.html');
   });

});

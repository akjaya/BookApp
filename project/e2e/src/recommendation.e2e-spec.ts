import { browser, logging } from 'protractor';
import { getMaxListeners } from 'cluster';
import { RecommendationPage } from './recommendation.po';
describe('AUTHOR TEST', () => {
  let page: RecommendationPage;
  beforeEach(() => {
    page = new RecommendationPage();
    page.navigateToRecommendation();
  });

    // navbar in author page
    it('should check navbar in recommendaton page', () => {
        page.navigateToRecommendation();
        expect(page.isnavPresent()).toBeTruthy('<navbar> should exist in recommendation.component.html');
      });
      // footer
      it('should check footer is present author page', () => {
        page.navigateToRecommendation();
        expect(page.isfooterPresent()).toBeTruthy('<footer> should exist in recommendation.component.html');
       });
      //  div
       it('should check div is present author page', () => {
        page.navigateToRecommendation();
        expect(page.isdivpresent()).toBeTruthy('<div> should exist in recommendation.component.html');
      });
});
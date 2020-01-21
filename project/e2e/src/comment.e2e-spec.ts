import { browser, logging } from 'protractor';
import { getMaxListeners } from 'cluster';
import { CommentPage } from './comment.po';
describe('COMMENT TEST', () => {
  let page:  CommentPage;
  beforeEach(() => {
    page = new  CommentPage();
    page.navigateToComment();
  });

  // it('should check div in comments page', () => {
  //   page.navigateToComment();
  //   expect(page.isFormPresent()).toBeTruthy('div should exist in comment.component.html');
  // });

});

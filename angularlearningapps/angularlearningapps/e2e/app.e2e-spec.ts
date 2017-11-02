import { AngularlearningappsPage } from './app.po';

describe('angularlearningapps App', () => {
  let page: AngularlearningappsPage;

  beforeEach(() => {
    page = new AngularlearningappsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

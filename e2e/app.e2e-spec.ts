import { FbFetchPage } from './app.po';

describe('fb-fetch App', function() {
  let page: FbFetchPage;

  beforeEach(() => {
    page = new FbFetchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

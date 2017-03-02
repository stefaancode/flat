import { FlatPage } from './app.po';

describe('flat App', () => {
  let page: FlatPage;

  beforeEach(() => {
    page = new FlatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

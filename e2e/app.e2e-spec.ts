import { Css3LayoutsPage } from './app.po';

describe('css3-layouts App', function() {
  let page: Css3LayoutsPage;

  beforeEach(() => {
    page = new Css3LayoutsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

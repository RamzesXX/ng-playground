import { SelectorPage } from './app.po';

describe('selector App', function() {
  let page: SelectorPage;

  beforeEach(() => {
    page = new SelectorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

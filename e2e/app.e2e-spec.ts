import { WcsoUiPage } from './app.po';

describe('wcso-ui App', function() {
  let page: WcsoUiPage;

  beforeEach(() => {
    page = new WcsoUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

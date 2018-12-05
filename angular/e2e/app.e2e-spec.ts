import { DotNetCoreAngularTemplatePage } from './app.po';

describe('DotNetCoreAngular App', function() {
  let page: DotNetCoreAngularTemplatePage;

  beforeEach(() => {
    page = new DotNetCoreAngularTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { BucketmoviessPage } from './app.po';

describe('bucketmoviess App', function() {
  let page: BucketmoviessPage;

  beforeEach(() => {
    page = new BucketmoviessPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

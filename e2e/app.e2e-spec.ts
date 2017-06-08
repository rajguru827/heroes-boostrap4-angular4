import { Angular4Bootstrap4Page } from './app.po';

describe('angular4-bootstrap4 App', () => {
  let page: Angular4Bootstrap4Page;

  beforeEach(() => {
    page = new Angular4Bootstrap4Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

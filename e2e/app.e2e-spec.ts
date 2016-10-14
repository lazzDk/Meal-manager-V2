import { MealTestPage } from './app.po';

describe('meal-test App', function() {
  let page: MealTestPage;

  beforeEach(() => {
    page = new MealTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

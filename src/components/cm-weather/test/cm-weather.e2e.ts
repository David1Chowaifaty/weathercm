import { newE2EPage } from '@stencil/core/testing';

describe('cm-weather', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cm-weather></cm-weather>');

    const element = await page.find('cm-weather');
    expect(element).toHaveClass('hydrated');
  });
});

import { newE2EPage } from '@stencil/core/testing';

describe('cm-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cm-menu></cm-menu>');

    const element = await page.find('cm-menu');
    expect(element).toHaveClass('hydrated');
  });
});

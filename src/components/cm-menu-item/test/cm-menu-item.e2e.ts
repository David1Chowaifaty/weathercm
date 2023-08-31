import { newE2EPage } from '@stencil/core/testing';

describe('cm-menu-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cm-menu-item></cm-menu-item>');

    const element = await page.find('cm-menu-item');
    expect(element).toHaveClass('hydrated');
  });
});

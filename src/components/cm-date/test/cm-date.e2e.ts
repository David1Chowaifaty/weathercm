import { newE2EPage } from '@stencil/core/testing';

describe('cm-date', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cm-date></cm-date>');

    const element = await page.find('cm-date');
    expect(element).toHaveClass('hydrated');
  });
});

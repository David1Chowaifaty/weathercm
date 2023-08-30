import { newE2EPage } from '@stencil/core/testing';

describe('cm-mainwweather', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cm-mainwweather></cm-mainwweather>');

    const element = await page.find('cm-mainwweather');
    expect(element).toHaveClass('hydrated');
  });
});

import { newE2EPage } from '@stencil/core/testing';

describe('cm-mainweather', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cm-mainweather></cm-mainweather>');

    const element = await page.find('cm-mainweather');
    expect(element).toHaveClass('hydrated');
  });
});

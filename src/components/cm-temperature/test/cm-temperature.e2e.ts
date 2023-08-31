import { newE2EPage } from '@stencil/core/testing';

describe('cm-temperature', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cm-temperature></cm-temperature>');

    const element = await page.find('cm-temperature');
    expect(element).toHaveClass('hydrated');
  });
});

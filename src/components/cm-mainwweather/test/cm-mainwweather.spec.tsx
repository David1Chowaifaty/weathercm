import { newSpecPage } from '@stencil/core/testing';
import { CmMainwweather } from '../cm-mainwweather';

describe('cm-mainwweather', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CmMainwweather],
      html: `<cm-mainwweather></cm-mainwweather>`,
    });
    expect(page.root).toEqualHtml(`
      <cm-mainwweather>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cm-mainwweather>
    `);
  });
});

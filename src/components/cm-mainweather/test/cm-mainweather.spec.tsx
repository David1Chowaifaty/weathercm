import { newSpecPage } from '@stencil/core/testing';
import { CmMainweather } from '../cm-mainweather';

describe('cm-mainweather', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CmMainweather],
      html: `<cm-mainweather></cm-mainweather>`,
    });
    expect(page.root).toEqualHtml(`
      <cm-mainweather>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cm-mainweather>
    `);
  });
});

import { newSpecPage } from '@stencil/core/testing';
import { CmSunmoonimage } from '../cm-sunmoonimage';

describe('cm-sunmoonimage', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CmSunmoonimage],
      html: `<cm-sunmoonimage></cm-sunmoonimage>`,
    });
    expect(page.root).toEqualHtml(`
      <cm-sunmoonimage>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cm-sunmoonimage>
    `);
  });
});

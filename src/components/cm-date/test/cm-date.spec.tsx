import { newSpecPage } from '@stencil/core/testing';
import { CmDate } from '../cm-date';

describe('cm-date', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CmDate],
      html: `<cm-date></cm-date>`,
    });
    expect(page.root).toEqualHtml(`
      <cm-date>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cm-date>
    `);
  });
});

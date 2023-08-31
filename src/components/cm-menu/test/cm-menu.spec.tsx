import { newSpecPage } from '@stencil/core/testing';
import { CmMenu } from '../cm-menu';

describe('cm-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CmMenu],
      html: `<cm-menu></cm-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <cm-menu>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cm-menu>
    `);
  });
});

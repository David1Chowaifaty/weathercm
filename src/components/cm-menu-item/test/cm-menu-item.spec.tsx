import { newSpecPage } from '@stencil/core/testing';
import { CmMenuItem } from '../cm-menu-item';

describe('cm-menu-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CmMenuItem],
      html: `<cm-menu-item></cm-menu-item>`,
    });
    expect(page.root).toEqualHtml(`
      <cm-menu-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cm-menu-item>
    `);
  });
});

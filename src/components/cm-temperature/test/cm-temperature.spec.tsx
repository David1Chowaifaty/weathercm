import { newSpecPage } from '@stencil/core/testing';
import { CmTemperature } from '../cm-temperature';

describe('cm-temperature', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CmTemperature],
      html: `<cm-temperature></cm-temperature>`,
    });
    expect(page.root).toEqualHtml(`
      <cm-temperature>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cm-temperature>
    `);
  });
});

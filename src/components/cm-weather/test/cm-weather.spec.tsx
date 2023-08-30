import { newSpecPage } from '@stencil/core/testing';
import { CmWeather } from '../cm-weather';

describe('cm-weather', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CmWeather],
      html: `<cm-weather></cm-weather>`,
    });
    expect(page.root).toEqualHtml(`
      <cm-weather>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cm-weather>
    `);
  });
});

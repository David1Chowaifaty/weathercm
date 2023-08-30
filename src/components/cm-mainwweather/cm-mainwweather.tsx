import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'cm-mainwweather',
  styleUrl: 'cm-mainwweather.css',
  shadow: true,
})
export class CmMainwweather {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}

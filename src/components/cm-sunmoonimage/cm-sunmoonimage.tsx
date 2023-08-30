import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'cm-sunmoonimage',
  styleUrl: 'cm-sunmoonimage.css',
  shadow: true,
})
export class CmSunmoonimage {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}

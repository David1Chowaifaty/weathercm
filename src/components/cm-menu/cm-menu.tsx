import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'cm-menu',
  styleUrl: 'cm-menu.css',
  shadow: true,
})
export class CmMenu {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}

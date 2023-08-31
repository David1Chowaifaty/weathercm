import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'cm-menu-item',
  styleUrl: 'cm-menu-item.css',
  shadow: true,
})
export class CmMenuItem {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}

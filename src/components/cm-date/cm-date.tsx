import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'cm-date',
  styleUrl: 'cm-date.css',
  shadow: true,
})
export class CmDate {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}

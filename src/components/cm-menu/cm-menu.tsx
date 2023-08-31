import { Component, Host, Listen, Prop, h } from '@stencil/core';

@Component({
  tag: 'cm-menu',
  styleUrl: 'cm-menu.css',
  shadow: true,
})
export class CmMenu {
  @Prop({ reflect: true, mutable: true }) opened: boolean = false;
  @Listen('itemClicked', { target: 'body' })
  handleMenuItemClicked(){
this.toggleOpened()
  }

  toggleOpened() {
    this.opened = !this.opened;
  }

  render() {
    return (
      <Host>
        <button onClick={this.toggleOpened.bind(this)}>Choose a date</button>
        <div class={'container'}>
          <slot></slot>
        </div>
      </Host>
    );
  }
}

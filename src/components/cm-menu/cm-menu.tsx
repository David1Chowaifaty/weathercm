import { Component, Host, Listen, Prop, State, h } from '@stencil/core';
import { Weather } from '../../model/Weather';
import { daysOfWeek } from '../../utils/utils';

@Component({
  tag: 'cm-menu',
  styleUrl: 'cm-menu.css',
  shadow: true,
})
export class CmMenu {
  @Prop({ reflect: true, mutable: true }) opened: boolean = false;
  @State() selectedDate: string = '';
  @Listen('itemClicked', { target: 'body' })
  handleMenuItemClicked(ev: CustomEvent) {
    const data = JSON.parse(ev.detail) as Weather;
    this.selectedDate = daysOfWeek[new Date(data.date).getDay()];
    this.toggleOpened();
  }

  toggleOpened() {
    this.opened = !this.opened;
  }

  render() {
    return (
      <Host>
        <button onClick={this.toggleOpened.bind(this)}>{this.selectedDate !== '' ? this.selectedDate : 'Choose a date'}</button>
        <div class={'container'}>
          <slot></slot>
        </div>
      </Host>
    );
  }
}

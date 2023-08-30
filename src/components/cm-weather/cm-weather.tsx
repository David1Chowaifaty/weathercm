import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'cm-weather',
  styleUrl: 'cm-weather.css',
  shadow: true,
})
export class CmWeather {
  @Prop({ reflect: true }) title: string = '';
  render() {
    return (
      <Host>
        <slot></slot>
        <p>{this.title}</p>
      </Host>
    );
  }
}

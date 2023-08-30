import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'cm-temperature',
  styleUrl: 'cm-temperature.css',
  shadow: true,
})
export class CmTemperature {
  @Prop({ reflect: true }) temp: string;
  render() {
    return (
      <Host>
        <span>{this.temp}&#176;</span>
      </Host>
    );
  }
}

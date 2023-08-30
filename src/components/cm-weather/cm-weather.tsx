import { Component, Host, Prop, State, Watch, h } from '@stencil/core';
import { Weather } from '../../model/Weather';

@Component({
  tag: 'cm-weather',
  styleUrl: 'cm-weather.css',
  shadow: true,
})
export class CmWeather {
  @Prop({ reflect: true, mutable: true }) data: string;
  @State() weather: Weather;
  @Watch('data')
  setWeather() {
    this.weather = JSON.parse(this.data);
  }
  render() {
    if (this.weather === undefined) {
      return null;
    } else {
      return (
        <Host>
          <slot></slot>
          <p>{this.weather.description}</p>
        </Host>
      );
    }
  }
}

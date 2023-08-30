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

  componentWillLoad() {
    if (this.data !== '') {
      this.weather = JSON.parse(this.data);
    }
  }

  @Watch('data')
  changedData() {
    this.weather = JSON.parse(this.data) as Weather;
    console.log(this.weather);
  }

  render() {
    if (this.weather === undefined) {
      return null;
    } else {
      return (
        <Host>
          <p>{this.weather.description}</p>
        </Host>
      );
    }
  }
}

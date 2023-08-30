import { Component, Event, EventEmitter, Host, Prop, State, Watch, h } from '@stencil/core';
import { Weather } from '../../model/Weather';

@Component({
  tag: 'cm-weather',
  styleUrl: 'cm-weather.css',
  shadow: true,
})
export class CmWeather {
  @Prop({ reflect: true, mutable: true }) data: string;
  @State() weather: Weather;
  @Event({ bubbles: true, composed: true }) dayclicked: EventEmitter<string>;

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
  handleClick() {
    this.dayclicked.emit(this.data);
  }
  render() {
    if (this.weather === undefined) {
      return null;
    } else {
      return (
        <Host>
          <p onClick={this.handleClick.bind(this)}>{this.weather.description}</p>
        </Host>
      );
    }
  }
}

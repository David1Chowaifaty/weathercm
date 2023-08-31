import { Component, Event, EventEmitter, Host, Prop, State, Watch, h } from '@stencil/core';
import { Weather } from '../../model/Weather';
import { daysOfWeek } from '../../utils/utils';

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
          
          <button onClick={this.handleClick.bind(this)}>
          <p >{daysOfWeek[(new Date(this.weather.date).getDay())]}</p>
          <p>{this.weather.date}</p>
          <cm-sunmoonimage></cm-sunmoonimage>
          <p>{this.weather.temp_max}</p>
          <p>{this.weather.temp_min}</p>
          <p>{this.weather.description}</p>
          </button>
        </Host>
      );
    }
  }
}

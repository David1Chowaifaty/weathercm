import { Component, Event, EventEmitter, Host, Prop, State, Watch, h } from '@stencil/core';
import { Weather } from '../../model/Weather';
import { daysOfWeek, formatDate } from '../../utils/utils';

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
          <button class="weather-button" onClick={this.handleClick.bind(this)}>
            <h2 class="day-of-week">{daysOfWeek[new Date(this.weather.date).getDay()]}</h2>
            <p class="date">{formatDate(this.weather.date)}</p>
            <cm-sunmoonimage class="sunmoon-image"></cm-sunmoonimage>
            <p class="temperature-range">
              <cm-temperature class="temp-max" temp={this.weather.temp_max.toString()} />
              / <cm-temperature class="temp-min" temp={this.weather.temp_min.toString()} />
            </p>
            <p class="weather-description">{this.weather.description}</p>
          </button>
        </Host>
      );
    }
  }
}

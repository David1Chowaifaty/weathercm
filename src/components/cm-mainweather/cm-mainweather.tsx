import { Component, Host, Listen, Prop, State, Watch, h } from '@stencil/core';
import { Weather } from '../../model/Weather';
import { daysOfWeek } from '../../utils/utils';

@Component({
  tag: 'cm-mainweather',
  styleUrl: 'cm-mainweather.css',
  shadow: true,
})
export class CmMainweather {
  @Prop({ reflect: true, mutable: true }) data: string;
  @State() weather: Weather;
  @Listen('dayclicked', { target: 'body' })
  changeData(ev: CustomEvent) {
    this.data = ev.detail;
  }
  @Listen('itemClicked', { target: 'body' })
  dropDownData(ev: CustomEvent) {
    this.data = ev.detail;
  }
  componentWillLoad() {
    if (this.data !== '') {
      this.weather = JSON.parse(this.data);
    }
  }

  @Watch('data')
  changedData() {
    this.weather = JSON.parse(this.data) as Weather;
  }
  renderDate(date: Date) {
    const currentDate = new Date().getDay();
    const newDate = new Date(date).getDay();
    if (currentDate === newDate) {
      return 'Today';
    } else {
      return daysOfWeek[newDate];
    }
  }
  render() {
    if (this.weather === undefined) {
      return null;
    } else {
      return (
        <Host>
          <div class="weather-info">
            <div class="weather-header">
              <div class="weather-icon">
                <cm-sunmoonimage class="icon" />
              </div>
              <div class="date">
                <cm-date date={this.weather.date.toString()}></cm-date>
              </div>
            </div>
            <p class="weather-description">{this.weather.description}</p>
            <div class={'weather-container'}>
              <div class="sunmoon">
                <cm-sunmoonimage class="icon" />
              </div>
              <p class="temperature-range">
                <cm-temperature class="temp-max" temp={this.weather.temp_max.toString()} />
                /
                <cm-temperature class="temp-min" temp={this.weather.temp_min.toString()} />
              </p>
            </div>
          </div>
          <div class="extra-info">
            <div class="details">
              <p class="real-feel">
                RealFeel <cm-temperature class="feels-like" temp={this.weather.feels_like.toString()} />
              </p>
              <p class="humidity">
                Humidity <span class="humidity-value">{this.weather.humidity}</span>
              </p>
              <p class="wind">
                Wind <span class="wind-speed">{this.weather.windspeed}</span>
              </p>
            </div>
          </div>
        </Host>
      );
    }
  }
}

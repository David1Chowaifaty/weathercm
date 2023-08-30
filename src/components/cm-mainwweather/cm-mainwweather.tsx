import { Component, Host, Prop, State, Watch, h } from '@stencil/core';
import { Weather } from '../../model/Weather';
import { daysOfWeek } from '../../utils/utils';

@Component({
  tag: 'cm-mainwweather',
  styleUrl: 'cm-mainwweather.css',
  shadow: true,
})
export class CmMainwweather {
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
          <div>
            <p>{this.renderDate(this.weather.date)}</p>
            <p>{this.weather.description}</p>
            <div>
              <cm-sunmoonimage></cm-sunmoonimage>
              <p>
                <cm-temperature temp={this.weather.temp_max.toString()}></cm-temperature>
              </p>
            </div>
          </div>
          <div>
            <p>
              RealFeal <span>{this.weather.feels_like}&#176;</span>
            </p>
          </div>
        </Host>
      );
    }
  }
}

import { Component, EventEmitter, Host, Prop, State, h,Event, Watch } from '@stencil/core';
import { Weather } from '../../model/Weather';
import { daysOfWeek, formatDate } from '../../utils/utils';

@Component({
  tag: 'cm-menu-item',
  styleUrl: 'cm-menu-item.css',
  shadow: true,
})
export class CmMenuItem {
  @Prop({ reflect: true, mutable: true }) data: string;
  @State() weather: Weather;
  @Event({bubbles:true,composed:true})  itemClicked: EventEmitter<string>;

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
    this.itemClicked.emit(this.data);
  }


  render() {
    return (
      <Host>
       <div onClick={this.handleClick.bind(this)}>
            <h2>{daysOfWeek[new Date(this.weather.date).getDay()]}</h2>
            <p>{formatDate(this.weather.date)}</p>
            </div>
      </Host>
    );
  }

}

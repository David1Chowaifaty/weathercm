import { Component, Host, Prop, State, Watch, h } from '@stencil/core';
import { daysOfWeek, formatDate } from '../../utils/utils';

@Component({
  tag: 'cm-date',
  styleUrl: 'cm-date.css',
  shadow: true,
})
export class CmDate {
  @Prop({ reflect: true }) date: string;
  @State() isToday: boolean;
  newDate: number;
  checkDate() {
    const currentDate = new Date().getDay();
    this.newDate = new Date(this.date).getDay();
    if (currentDate === this.newDate) {
      this.isToday = true;
    } else {
      this.isToday = false;
    }
  }
  componentWillLoad() {
    this.checkDate();
  }
  @Watch('date')
  handleDateChange() {
    this.checkDate();
  }

  render() {
    return (
      <Host>
        {this.isToday ? (
          <h2 class={'today'}>Today</h2>
        ) : (
          <div>
            <h2>{daysOfWeek[this.newDate]}</h2>
            <p>{formatDate(new Date(this.date))}</p>
          </div>
        )}
      </Host>
    );
  }
}

import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'cm-weather',
  styleUrl: 'cm-weather.css',
  shadow: true,
})
export class CmWeather {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}

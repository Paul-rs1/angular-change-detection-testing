import { Component, Input } from '@angular/core';

@Component({
  selector: 'default-strategy-component',
  template: `
    <h1>default</h1>
    <display-component [people]="people"></display-component>
  `,
  styles: [
    `
  `,
  ],
})
export class DefaultStrategyComponent {
  @Input() people;
}

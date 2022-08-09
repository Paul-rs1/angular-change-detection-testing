import { ChangeDetectionStrategy } from '@angular/compiler/src/core';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'push-strategy-component',
  template: `
    <h1>onPush</h1>
    <display-component [people]="people"></display-component>
  `,
  styles: [
    `
  `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PushStrategyComponent {
  @Input() people;
}

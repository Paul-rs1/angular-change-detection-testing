import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <div>Updated: {{nestedObject.updated.getTime()}}</div>
    <div>Nested updated: {{nestedObject.information.updated.getTime()}}</div> 
  `,
  styles: [
    `
      :div { background-color: pink; }
    `,
  ],
})
export class HelloComponent {
  @Input() nestedObject;
}

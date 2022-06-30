import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <div>object.updated: {{nestedObject.updated.getTime()}}</div>
    <div>object.information.updated: {{nestedObject.information.updated.getTime()}}</div> 
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

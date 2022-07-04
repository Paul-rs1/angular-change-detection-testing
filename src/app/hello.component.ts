import { Component, Input, OnChanges } from '@angular/core';

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
export class HelloComponent implements OnChanges {
  @Input() nestedObject;

  updated = [];

  ngOnChanges() {
    console.log('changes');
    this.updated[0] = this.nestedObject.updated.getTime();
    this.updated[1] = this.nestedObject.updated.getTime();
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<div>{{nestedObject.information | json}}</div>`,
  styles: [`div { font-family: Lato; background-color:pink }`],
})
export class HelloComponent {
  @Input() nestedObject;
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'wrapper',
  template: `<hello [nestedObject]="nestedObject"></hello>`,
  styles: [],
})
export class WrapperComponent {
  @Input() nestedObject;
}

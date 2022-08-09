import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'editor-component',
  template: `
      <button (click)="happyBirthdayMax.emit()">Happy Birthday!</button>
      <button (click)="addInterest.emit()">Add interest</button>
      <button (click)="deepCopy.emit()">Deep clone</button>
  `,
  styles: [
    `
    :host {
      display: flex;
      flex-direction: column;
      padding: 5em;
    }
  `,
  ],
})
export class EditorComponent {
  @Output() happyBirthdayMax = new EventEmitter();
  @Output() addInterest = new EventEmitter();
  @Output() deepCopy = new EventEmitter();
}

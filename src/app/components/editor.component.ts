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
      align-items: center;
      padding-top: 2em;
    }

    button {
      border-radius: 5px;
      height: 2em;
      margin-bottom: 1em;
      min-width: 15em;
    }
    button:hover {
      cursor: pointer;
      background-color: #a4eff5;
    }
  `,
  ],
})
export class EditorComponent {
  @Output() happyBirthdayMax = new EventEmitter();
  @Output() addInterest = new EventEmitter();
  @Output() deepCopy = new EventEmitter();
}

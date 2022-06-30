import { ChangeDetectorRef, Component } from '@angular/core';

function getNewObject() {
  return {
    name: 'Mustermann',
    age: 43,
    updated: new Date(),
    information: {
      address: 'street x, town y',
      number: '0183118',
      interests: ['swimming', 'ready', 'stuff'],
      updated: new Date(),
    },
  };
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nestedObject = getNewObject();

  constructor(private cdref: ChangeDetectorRef) {}

  updateObject() {
    const updated = new Date();
    this.nestedObject.updated = updated;
    this.nestedObject.information.updated;
  }

  changeRef() {
    this.nestedObject = getNewObject();
  }
}

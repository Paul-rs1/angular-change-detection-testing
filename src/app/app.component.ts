import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nestedObject = {
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
  lastUpdated = this.nestedObject.updated;

  updateObject() {
    const updated = new Date();
    this.nestedObject.updated = updated;
    this.nestedObject.information.updated;
    this.lastUpdated = updated;
  }
}

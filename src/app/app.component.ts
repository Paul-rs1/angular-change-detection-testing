import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  nestedObject = {
    name: 'Mustermann',
    age: 43,
    updated: new Date(),
    information: {
      address: 'street x, town y',
      number: '0183118',
    }
  };
  
  changeObject () {
    this.nestedObject.updated = new Date();
  }
}

import { Component, DoCheck, Input, OnInit } from '@angular/core';

@Component({
  selector: 'live-data',
  template: `
    <div>
      <pre><code>
        {{personJson}}
      </code></pre>
    </div>
  `,
  styles: [
    `
    :host {
      display: flex;
      justify-content: center;
      background-color: #a4eff5;
      padding: 1em 0;
    }
  `,
  ],
})
export class LiveData implements OnInit, DoCheck {
  @Input() people;
  person;
  personJson;
  constructor() {}

  ngOnInit() {
    this.setPerson();
  }

  ngDoCheck() {
    this.setPerson();
  }

  setPerson() {
    this.person = JSON.parse(JSON.stringify(this.people[0])); // "deepCopy" of person
    this.personJson = JSON.stringify(this.person, null, 2); // object to readable format
  }
}

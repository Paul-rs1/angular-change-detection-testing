import {
  ChangeDetectorRef,
  Component,
  DoCheck,
  Input,
  OnChanges,
} from '@angular/core';

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
      background-color: blue;
      color: white;
      padding: 2em;
    }
  `,
  ],
})
export class LiveData implements DoCheck, OnChanges {
  @Input() people;
  person;
  personJson;
  constructor(private cdRef: ChangeDetectorRef) {}

  ngDoCheck() {
    // implement custom changeDetection
    if (this.people[0].age != this.person.age) {
      this.setPerson();
    }
  }

  ngOnChanges() {
    this.setPerson();
  }

  setPerson() {
    this.person = JSON.parse(JSON.stringify(this.people[0])); // "deepCopy" of person
    this.personJson = JSON.stringify(this.person, null, 2); // object to readable format
  }
}

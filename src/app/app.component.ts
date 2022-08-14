import { Component, OnInit } from '@angular/core';

const MAX = {
  name: 'Max Mustermann',
  age: 43,
  information: {
    mail: 'max@mustermann.com',
    interests: ['swimming'],
  },
};

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  people = [MAX];

  happyBirthdayMax() {
    const max = this.people.find((person) =>
      person.name.toLowerCase().includes('max')
    );
    max.age += 1;
    console.log(`Max is ${max.age}`);
  }

  addInterest() {
    const newInterests = ['coding', 'reading'];
    const currCount = this.people[0].information.interests.length;
    const newInterest =
      currCount <= newInterests.length
        ? newInterests[currCount - 1]
        : `interest ${currCount}`;
    this.people[0].information.interests.push(newInterest);
  }

  peopleDeepCopy() {
    this.people = JSON.parse(JSON.stringify(this.people));
  }
}

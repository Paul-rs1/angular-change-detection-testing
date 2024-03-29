import {
  AfterViewChecked,
  Component,
  ElementRef,
  Input,
  OnChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'display-component',
  template: `
    <div #myDisplayContainer *ngFor="let person of people">
      <div>Name: {{person.name}}</div>
      <div>Age: {{person.age}}</div>
      <div>Mail: {{person.information.mail}}</div>
      <div>Interests: {{person.information.interests}}</div>
    </div>
  `,
  styles: [
    `
  `,
  ],
})
export class DisplayComponent implements OnChanges, AfterViewChecked {
  @ViewChild('myDisplayContainer') ContainerRef: ElementRef;
  @Input() people;

  highlight = false;

  ngOnChanges() {
    this.highlight = true;
  }

  ngAfterViewChecked() {
    if (!this.ContainerRef?.nativeElement || !this.highlight) return;
    this.highlight = false;
    this.ContainerRef.nativeElement.style.border = 'medium solid yellow';
    setTimeout(() => {
      this.ContainerRef.nativeElement.style.border = 'medium solid transparent';
    }, 500);
  }
}

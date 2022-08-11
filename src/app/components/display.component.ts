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

  // TODO highlight CD! not working
  ngOnChanges() {
    console.log('onChanges');
    this.highlight = true;
  }

  ngAfterViewChecked() {
    console.log('view checked');
    if (!this.ContainerRef?.nativeElement || !this.highlight) return;
    this.highlight = false;
    this.ContainerRef.nativeElement.style.border = 'thin solid yellow';
    console.log('set yellow');
    setTimeout(() => {
      console.log('set transparent');
      this.ContainerRef.nativeElement.style.border = 'thin solid transparent';
    }, 500);
  }
}

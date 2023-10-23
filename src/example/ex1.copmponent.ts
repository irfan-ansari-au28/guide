import { Component } from '@angular/core';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.component.html',
  styleUrls: ['./ex1.component.css'],
})
export class Ex1Component {
  title: string = 'Example 1 copmponet';
  name: string = '';

  getName(e: any) {
    return (this.name = e.target.value);
  }
}

import {Component, VERSION} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2>Hello {{ name }}</h2>
      <input-child [coolNumber]="coolNumber"></input-child>
      <br>
      <input-child [coolNumber]="notCoolNumber"></input-child>
    </div>
  `,
})
export class AppComponent {
  name: string;
  notCoolNumber: Date = new Date();
  coolNumber: number = 3;
  constructor() {
    this.name = `Angular! v${VERSION.full}`;
  }
}

import { Input } from '@angular/core';
@Component({
  selector: 'input-child',
  template: `
  <button (click)="doStuff()">
   This better be a number! {{ coolNumber }}.
   </button>
   `
})
export class InputChildComponent {
  @Input() coolNumber: number;

  doStuff(): void {
    if (typeof this.coolNumber === 'number') {
      alert(`${this.coolNumber} + 1 is : ${this.coolNumber + 1}`);
    } else {
      alert(`Huh?!?!?!? ${this.coolNumber}`);
    }
  }
}

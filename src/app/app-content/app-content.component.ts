import { Component, OnInit } from '@angular/core';
import Person from './person';

@Component({
  selector: 'app-app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.css']
})
export class AppContentComponent implements OnInit {

  persons: Person[] = [];
  inputName: string;
  inputAge: number;

  createPerson() {
    if (this.inputName && this.inputAge) {
      this.persons.push(new Person(this.inputName, this.inputAge));
      this.inputName = null;
      this.inputAge = null;
    }
  }

  constructor() { }

  ngOnInit() {
    this.persons.push(
      new Person('John Smith', 44),
      new Person('Marry Watson', 33)
    );
  }

}

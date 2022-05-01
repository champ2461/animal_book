import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  choice = 1;

  constructor() { }

  ngOnInit() {
    if(localStorage['userChoice']) {
      this.choice = localStorage['userChoice'];
    }
  }
  setChoice(choice: number) {
    this.choice= choice!;
    localStorage['userChoice'] = choice!;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'explorer-input-demo',
  templateUrl: './input-demo.component.html',
  styleUrls: ['./input-demo.component.scss']
})
export class InputDemoComponent implements OnInit {

  input: string = '';
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      document.getElementById('username').focus();
    });
  }

  inputChanged($event) {
    console.warn($event);
  }

}

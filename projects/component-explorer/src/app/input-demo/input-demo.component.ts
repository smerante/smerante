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
  }

  inputChanged($event) {
    console.warn($event);
  }

}

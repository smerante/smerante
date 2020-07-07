import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'explorer-modal-demo',
  templateUrl: './modal-demo.component.html',
  styleUrls: ['./modal-demo.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalDemoComponent implements OnInit {
  date: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}

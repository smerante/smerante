import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'explorer-cta-demo',
  templateUrl: './cta-demo.component.html',
  styleUrls: ['./cta-demo.component.scss']
})
export class CtaDemoComponent implements OnInit {

  buttonClicked = '';
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      document.getElementById('primary-button').focus();
    });
  }

}

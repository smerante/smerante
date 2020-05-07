import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'explorer-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (this.router.url === '/') {
      (document.getElementById('nav').children[0].children[0] as HTMLElement).click();
    }
  }

}

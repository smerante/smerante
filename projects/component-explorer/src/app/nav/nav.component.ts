import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'explorer-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  links: string[] = [];
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.config.forEach(value => {
      this.links.push(value.path);
    });
    setTimeout(() => {
      if (this.router.url === '/') {
        (document.getElementById('nav').children[0].children[0] as HTMLElement).click();
      }
    });
  }

}

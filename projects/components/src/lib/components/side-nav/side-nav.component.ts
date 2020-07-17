import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sm-side-nav',
  templateUrl: './side-nav.component.html'
})
export class SMSideNavComponent implements OnInit {

  @Input() links: string[] = [];
  open = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (window.innerWidth < 578) {
      this.open = false;
    }
  }

  navigate(path: string) {
    this.router.navigate([path]);
    if (window.innerWidth < 578) {
      this.open = false;
    }
  }

}

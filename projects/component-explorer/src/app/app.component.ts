import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  links: string[] = [];
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.config.forEach(value => {
      this.links.push(value.path);
    });
  }
}

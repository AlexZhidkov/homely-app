import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  buyer() {
    this.router.navigate(['/client/undefined']);
  }

  builder() {
    this.router.navigate(['/builder']);
  }

  supplier() {
    this.router.navigate(['/supplier']);
  }

  admin() {
    this.router.navigate(['/admin/sections']);
  }

}

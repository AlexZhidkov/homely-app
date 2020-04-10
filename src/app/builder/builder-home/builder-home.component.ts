import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HouseConfig } from 'src/app/model/house-config';

@Component({
  selector: 'app-builder-home',
  templateUrl: './builder-home.component.html',
  styleUrls: ['./builder-home.component.css']
})
export class BuilderHomeComponent implements OnInit {
  houseConfig: HouseConfig;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.houseConfig = JSON.parse(localStorage.getItem('houseConfig'));
    if (!this.houseConfig) {
      this.houseConfig = new HouseConfig();
    }
  }

  save() {
    localStorage.setItem('houseConfig', JSON.stringify(this.houseConfig));
  }

  encodedConfig(): string {
    return window.btoa(JSON.stringify(this.houseConfig));
  }

  navigateToClient() {
    this.save();
    this.router.navigate([`/client/${this.encodedConfig()}`]);
  }

  copyToClipboard() {
    this.save();
    const url = `${window.location.hostname}/client/${this.encodedConfig()}`;
    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', (url));
      e.preventDefault();
      document.removeEventListener('copy', null);
    });
    document.execCommand('copy');
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-builder-home',
  templateUrl: './builder-home.component.html',
  styleUrls: ['./builder-home.component.css']
})
export class BuilderHomeComponent implements OnInit {
  markup: number;
  numberOfBricks: number;

  constructor() { }

  ngOnInit(): void {
  }

  copyToClipboard() {
    const url = `${window.location.hostname}/client?m=${this.markup}&b=${this.numberOfBricks}`;
    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', (url));
      e.preventDefault();
      document.removeEventListener('copy', null);
    });
    document.execCommand('copy');
  }
}

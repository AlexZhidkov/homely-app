import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Addenda Selection';

  constructor() {
    this.initializeAddendaLocalStorage();
  }

  initializeAddendaLocalStorage() {
    const addenda = JSON.parse(localStorage.getItem('addenda'));
    if (!addenda) {
      localStorage.setItem('addenda', JSON.stringify({}));
    }
  }
}

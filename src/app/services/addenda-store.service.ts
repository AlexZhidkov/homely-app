import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddendaStoreService {

  constructor() { }

  get(): any {
    const addenda = JSON.parse(localStorage.getItem('addenda'));
    return addenda ? addenda : {};
  }

  set(key: string, value: any) {
    const addenda = JSON.parse(localStorage.getItem('addenda'));
    addenda[key] = value;
    localStorage.setItem('addenda', JSON.stringify(addenda));
  }

  clear() {
    localStorage.setItem('addenda', JSON.stringify({}));
  }
}


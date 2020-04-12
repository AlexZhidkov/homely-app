import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-windows-doors-selection',
  templateUrl: './windows-doors-selection.component.html',
  styleUrls: ['./windows-doors-selection.component.css']
})
export class WindowsDoorsSelectionComponent implements OnInit {
  @Input() markup: number;
  selectedSupplier: string;

  suppliers: string[] = [
    'Jason Windows',
    'Dowell Windows',
    'Affinity Windows',
    'Nulook Windows',
    'Stegbar',
  ];

  houseWindowsAndDoors: any[];

  constructor() { }

  ngOnInit(): void {
    this.changeSupplier();
  }

  changeSupplier() {
    this.houseWindowsAndDoors = [{ area: null, type: null }];
  }

}

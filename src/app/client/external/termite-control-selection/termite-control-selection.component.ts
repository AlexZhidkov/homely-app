import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-termite-control-selection',
  templateUrl: './termite-control-selection.component.html',
  styleUrls: ['./termite-control-selection.component.css']
})
export class TermiteControlSelectionComponent implements OnInit {
  controlLevelOne: string;
  controlLevelTwo: string;

  constructor() { }

  ngOnInit(): void {
  }

  select(value: any) {

  }
}

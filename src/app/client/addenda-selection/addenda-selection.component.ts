import { Component, OnInit, ViewChild } from '@angular/core';
import { DynamicFormComponent } from '../../dynamic-components/dynamic-form/dynamic-form.component';
import { FieldConfig } from '../../model/fieldConfig';

@Component({
  selector: 'app-addenda-selection',
  templateUrl: './addenda-selection.component.html',
  styleUrls: ['./addenda-selection.component.css']
})
export class AddendaSelectionComponent implements OnInit {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  regConfig: FieldConfig[] = [
    {
      type: 'card',
      label: 'Username',
      inputType: 'text',
      name: 'name'
    },
  ];

  constructor() { }

  ngOnInit(): void {

  }

  submit(event: any) {
    debugger;
  }
}

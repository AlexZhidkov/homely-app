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
      label: 'Redwood',
      subtitle: '$330.33',
      description: 'The double height bricks of the Manor Range, with their refined textures and subtle colours, are a classic choice for traditional and contemporary homes. ',
      imageUrl: 'https://www.midlandbrick.com.au/getmedia/1903c1f4-53b8-4dc2-943f-56555f9f1691/bricks-manor-redwood-1000.jpg?maxsidesize=220',
      inputType: 'text',
      value: 'Midland Brick - Redwood'
    },
    {
      type: 'card',
      label: 'Amber Glow',
      subtitle: '$330.33',
      description: 'The double height bricks of the Manor Range, with their refined textures and subtle colours, are a classic choice for traditional and contemporary homes.',
      imageUrl: 'https://www.midlandbrick.com.au/getmedia/ec917804-2c7e-4b3c-86e8-0f8839e15e8e/bricks-manor-amber-glow-1000.jpg?maxsidesize=220',
      inputType: 'text',
      value: 'Midland Brick - Amber Glow'
    },
    {
      type: 'card',
      label: 'Augusta Limestone',
      subtitle: '$330.33',
      description: 'The double height bricks of the Manor Range, with their refined textures and subtle colours, are a classic choice for traditional and contemporary homes.',
      imageUrl: 'https://www.midlandbrick.com.au/getmedia/34006434-2bf0-4b48-89b2-2cb70de99ccc/bricks-manor-augusta-limestone-1000.jpg?maxsidesize=220',
      inputType: 'text',
      value: 'Midland Brick - Augusta Limestone'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  submit(event: any) {
    debugger;
  }
}

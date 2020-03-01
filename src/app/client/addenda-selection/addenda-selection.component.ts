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

  options: string[] = [
    'Midland Brick',
    'Brikmakers',
    'Austral Bricks'
  ];

  filteredBricks: FieldConfig[];
  allBricks: FieldConfig[] = [
    {
      type: 'card',
      label: 'Redwood',
      subtitle: '$330.33',
      description: 'The double height bricks of the Manor Range, with their refined textures and subtle colours, are a classic choice for traditional and contemporary homes. ',
      imageUrl: 'https://www.midlandbrick.com.au/getmedia/1903c1f4-53b8-4dc2-943f-56555f9f1691/bricks-manor-redwood-1000.jpg?maxsidesize=220',
      inputType: 'text',
      value: 'Midland Brick - Redwood',
      tags: ['Midland Brick']
    },
    {
      type: 'card',
      label: 'Amber Glow',
      subtitle: '$330.33',
      description: 'The double height bricks of the Manor Range, with their refined textures and subtle colours, are a classic choice for traditional and contemporary homes.',
      imageUrl: 'https://www.midlandbrick.com.au/getmedia/ec917804-2c7e-4b3c-86e8-0f8839e15e8e/bricks-manor-amber-glow-1000.jpg?maxsidesize=220',
      inputType: 'text',
      value: 'Midland Brick - Amber Glow',
      tags: ['Midland Brick']
    },
    {
      type: 'card',
      label: 'Augusta Limestone',
      subtitle: '$330.33',
      description: 'The double height bricks of the Manor Range, with their refined textures and subtle colours, are a classic choice for traditional and contemporary homes.',
      imageUrl: 'https://www.midlandbrick.com.au/getmedia/34006434-2bf0-4b48-89b2-2cb70de99ccc/bricks-manor-augusta-limestone-1000.jpg?maxsidesize=220',
      inputType: 'text',
      value: 'Midland Brick - Augusta Limestone',
      tags: ['Midland Brick']
    },
    {
      type: 'card',
      label: 'Alkimos',
      subtitle: '$272.98',
      description: 'The timeless standard classics which never fade. For generations, clay bricks have been the gold standard in Western Australian building materials. They are the natural maintenance free building solution for the external walls of your home that has stood the test of time. The Traditional Collection offers a range of both modern and classical brick styles suitable for use as an affordable construction medium having the capacity to add enduring appeal and value to any residential or commercial facade.'
        + '</br>All our Traditional Collection face bricks can be tumbled to give them uneven edges and a rustic, vintage look.',
      imageUrl: 'http://brikmakers.com/assets/images/prodpages/colours/claybrick/tradcol/sfcored/pattern-alkimos-big.jpg',
      inputType: 'text',
      value: 'Brikmakers - Alkimos',
      tags: ['Brikmakers']
    },
    {
      type: 'card',
      label: 'Ariana',
      subtitle: '$330.33',
      description: 'Lustre – Beautiful, fully glazed bricks that bring a touch of glamour to your project and make a design statement that will stand the test of time. Designed for both internal and external applications, the Allure range offers stylish elegance that‘s ideal for feature brickwork.',
      imageUrl: 'https://bbp.style/PUBLIC/BIM-library/jpg/australbricks/Allure/AB-Bricks-AllureArianaWhite230x76-110-240-NSW.jpg',
      inputType: 'text',
      value: 'Austral Bricks - Ariana',
      tags: ['Austral Bricks']
    },
  ];

  constructor() { }

  ngOnInit(): void {
    this.filteredBricks = this.allBricks;
  }

  filterChanged(newFilter: string) {
    this.filteredBricks = this.allBricks.filter(b => b.tags.includes(newFilter));
  }

  submit(event: any) {
    debugger;
  }
}

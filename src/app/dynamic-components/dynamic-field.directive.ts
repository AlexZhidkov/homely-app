import { ComponentFactoryResolver, Directive, Input, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BrickSelectionComponent } from '../client/external/brick-selection/brick-selection.component';
import { RoofSelectionComponent } from '../client/external/roof-selection/roof-selection.component';
import { WindowsDoorsSelectionComponent } from '../client/external/windows-doors-selection/windows-doors-selection.component';
import { FieldConfig } from '../model/fieldConfig';
import { CardComponent } from './card/card.component';
import { RadioComponent } from './radio/radio.component';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[dynamicField]'
})
export class DynamicFieldDirective implements OnInit {
  @Input() field: FieldConfig;
  @Input() group: FormGroup;
  @Input() step: string;

  componentRef: any;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) { }

  ngOnInit() {
    const componentMapper = {
      card: CardComponent,
      radio: RadioComponent,
      brickwork: BrickSelectionComponent,
      roof: RoofSelectionComponent,
      window: WindowsDoorsSelectionComponent
    };

    const factory = this.resolver.resolveComponentFactory(
      componentMapper[this.field.type]
    );
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;
    this.componentRef.instance.step = this.step;
  }
}

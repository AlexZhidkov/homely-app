import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import 'firebase/firestore';
import { Subject } from 'rxjs';
import { ClientSettings } from 'src/app/model/clientSettings';

@Component({
  selector: 'app-addenda-selection',
  templateUrl: './addenda-selection.component.html',
  styleUrls: ['./addenda-selection.component.css']
})
export class AddendaSelectionComponent implements OnInit {
  clientSettings: ClientSettings = { markup: 0, numberOfBricks: 1 };
  onBrickworkOpenEvent: Subject<void> = new Subject<void>();
  onRoofOpenEvent: Subject<void> = new Subject<void>();
  concreteFormGroup: FormGroup;
  brickworkFormGroup: FormGroup;
  roofFormGroup: FormGroup;
  windowsDoorsFormGroup: FormGroup;

  constructor(private route: ActivatedRoute,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.clientSettings.markup = parseInt(params.get('m') ?? '0', 10);
      this.clientSettings.numberOfBricks = parseInt(params.get('b') ?? '1', 10);
    });
    this.concreteFormGroup = this.formBuilder.group({});
    this.brickworkFormGroup = this.formBuilder.group({});
    this.roofFormGroup = this.formBuilder.group({});
    this.windowsDoorsFormGroup = this.formBuilder.group({});
  }

  public onStepChange(event: any): void {
    switch (event.selectedIndex) {
      case 1:
        this.onBrickworkOpenEvent.next();
        break;
      case 2:
        this.onRoofOpenEvent.next();
        break;
      default:
        break;
    }
  }

  submit(event: any) {
    debugger;
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import 'firebase/firestore';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-addenda-selection',
  templateUrl: './addenda-selection.component.html',
  styleUrls: ['./addenda-selection.component.css']
})
export class AddendaSelectionComponent implements OnInit {
  onBrickworkOpenEvent: Subject<void> = new Subject<void>();
  concreteFormGroup: FormGroup;
  brickworkFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.concreteFormGroup = this.formBuilder.group({
    });
    this.brickworkFormGroup = this.formBuilder.group({
    });
  }

  public onStepChange(event: any): void {
    if (event.selectedIndex === 1) {
      this.onBrickworkOpenEvent.next();
    }
  }

  submit(event: any) {
    debugger;
  }
}

import { Component, OnInit } from '@angular/core';
import { AddendaStoreService } from 'src/app/services/addenda-store.service';

@Component({
  selector: 'app-render-selection',
  templateUrl: './render-selection.component.html',
  styleUrls: ['./render-selection.component.css']
})
export class RenderSelectionComponent implements OnInit {

  render: {
    entireHouse: boolean | string,
    frontElevation: boolean | string,
    alfresco: boolean | string,
    notRequired: boolean
  };
  constructor(
    private addendaStore: AddendaStoreService,
  ) { }

  ngOnInit(): void {
    this.render = this.addendaStore.getValue('render', 'render');
    if (!this.render) {
      this.render = {
        entireHouse: false,
        frontElevation: false,
        alfresco: false,
        notRequired: true
      };
    }
  }

  selectionChanged(selection: string) {
    switch (selection) {
      case 'entireHouse':
        this.render.frontElevation = false;
        this.render.alfresco = false;
        this.render.notRequired = false;
        break;
      case 'notRequired':
        this.render.entireHouse = false;
        this.render.frontElevation = false;
        this.render.alfresco = false;
        break;
      default:
        this.render.entireHouse = false;
        this.render.notRequired = false;
        break;
    }
    this.save();
  }

  save() {
    this.addendaStore.set('render', 'render', this.render);
  }
}

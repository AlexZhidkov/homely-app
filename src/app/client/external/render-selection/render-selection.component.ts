import { Component, OnInit } from '@angular/core';
import { FieldConfig } from 'src/app/model/fieldConfig';
import { AddendaStoreService } from 'src/app/services/addenda-store.service';

@Component({
  selector: 'app-render-selection',
  templateUrl: './render-selection.component.html',
  styleUrls: ['./render-selection.component.css']
})
export class RenderSelectionComponent implements OnInit {

  field: FieldConfig;
  totalCost = 0;
  render: {
    entireHouse: any,
    frontElevation: any,
    alfrescoArea: any,
    notRequired: boolean
  };

  constructor(
    public addendaStore: AddendaStoreService,
  ) { }

  ngOnInit(): void {
    this.render = this.addendaStore.getValue('render', 'render');
    if (!this.render) {
      this.render = {
        entireHouse: {
          selection: false
        },
        frontElevation: {
          selection: false
        },
        alfrescoArea: {
          selection: false
        },
        notRequired: true
      };
    }
    this.field.markup = isNaN(this.field.markup) ? 0 : this.field.markup;
    this.calculateCosts();
    this.updateTotalCost();
  }

  calculateCosts() {
    this.render.entireHouse.paintedSandCost = this.field.extras.entireHouse.quantity *
      (this.field.extras.costPaintedSand.quantity + this.field.extras.supplierPricePaintedSand.quantity) +
      this.field.extras.supplierPriceOneOffFee.quantity;
    this.render.entireHouse.paintedSandCost = this.CostWithMarkup(this.render.entireHouse.paintedSandCost);

    this.render.entireHouse.acrylicTextureCoatCost = this.field.extras.entireHouse.quantity *
      (this.field.extras.costAcrylicTextureCoat.quantity + this.field.extras.supplierPriceAcrylicTextureCoat.quantity) +
      this.field.extras.supplierPriceOneOffFee.quantity;
    this.render.entireHouse.acrylicTextureCoatCost = this.CostWithMarkup(this.render.entireHouse.acrylicTextureCoatCost);

    this.render.frontElevation.paintedSandCost = this.field.extras.frontElevation.quantity *
      (this.field.extras.costPaintedSand.quantity + this.field.extras.supplierPricePaintedSand.quantity) +
      this.field.extras.supplierPriceOneOffFee.quantity;
    this.render.frontElevation.paintedSandCost = this.CostWithMarkup(this.render.frontElevation.paintedSandCost);

    this.render.frontElevation.acrylicTextureCoatCost = this.field.extras.frontElevation.quantity *
      (this.field.extras.costAcrylicTextureCoat.quantity + this.field.extras.supplierPriceAcrylicTextureCoat.quantity) +
      this.field.extras.supplierPriceOneOffFee.quantity;
    this.render.frontElevation.acrylicTextureCoatCost = this.CostWithMarkup(this.render.frontElevation.acrylicTextureCoatCost);

    this.render.alfrescoArea.paintedSandCost = this.field.extras.alfrescoArea.quantity *
      (this.field.extras.costPaintedSand.quantity + this.field.extras.supplierPricePaintedSand.quantity) +
      this.field.extras.supplierPriceOneOffFee.quantity;
    this.render.alfrescoArea.paintedSandCost = this.CostWithMarkup(this.render.alfrescoArea.paintedSandCost);

    this.render.alfrescoArea.acrylicTextureCoatCost = this.field.extras.alfrescoArea.quantity *
      (this.field.extras.costAcrylicTextureCoat.quantity + this.field.extras.supplierPriceAcrylicTextureCoat.quantity) +
      this.field.extras.supplierPriceOneOffFee.quantity;
    this.render.alfrescoArea.acrylicTextureCoatCost = this.CostWithMarkup(this.render.alfrescoArea.acrylicTextureCoatCost);
  }

  CostWithMarkup(cost: number): number {
    return cost + Math.round((cost * this.field.markup) / 100);
  }

  selectionChanged(selection: string) {
    switch (selection) {
      case 'entireHouse':
        this.render.frontElevation.selection = false;
        this.render.alfrescoArea.selection = false;
        this.render.notRequired = false;
        break;
      case 'notRequired':
        this.render.entireHouse.selection = false;
        this.render.frontElevation.selection = false;
        this.render.alfrescoArea.selection = false;
        break;
      default:
        this.render.entireHouse.selection = false;
        this.render.notRequired = false;
        break;
    }
    this.save();
  }

  updateTotalCost() {
    if (this.render.notRequired) {
      this.totalCost = 0;
    } else if (this.render.entireHouse.selection) {
      if (this.render.entireHouse.selection === 'Painted Sand Render') {
        this.totalCost = this.render.entireHouse.paintedSandCost
      }
      if (this.render.entireHouse.selection === 'Acrylic Texture Coat Render') {
        this.totalCost = this.render.entireHouse.acrylicTextureCoatCost
      }
    } else {
      this.totalCost = 0;
      if (this.render.frontElevation.selection === 'Painted Sand Render') {
        this.totalCost += this.render.frontElevation.paintedSandCost
      }
      if (this.render.frontElevation.selection === 'Acrylic Texture Coat Render') {
        this.totalCost += this.render.frontElevation.acrylicTextureCoatCost
      }
      if (this.render.alfrescoArea.selection === 'Painted Sand Render') {
        this.totalCost += this.render.alfrescoArea.paintedSandCost
      }
      if (this.render.alfrescoArea.selection === 'Acrylic Texture Coat Render') {
        this.totalCost += this.render.alfrescoArea.acrylicTextureCoatCost
      }
    }
  }

  save() {
    this.updateTotalCost();
    this.addendaStore.set('render', 'render', this.render);
  }
}

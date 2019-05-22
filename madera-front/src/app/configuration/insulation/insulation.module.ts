import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InsulationPage } from './insulation.page';
import { InsulationModalPageModule } from './insulation-modal/insulation-modal.module';
import { InsulationModalPage } from './insulation-modal/insulation-modal.page';

const routes: Routes = [
  {
    path: '',
    component: InsulationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    InsulationModalPageModule,
  ],
  entryComponents: [InsulationModalPage],
  declarations: [InsulationPage]
})
export class InsulationPageModule { }

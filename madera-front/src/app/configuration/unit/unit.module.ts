import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UnitPage } from './unit.page';
import { UnitModalPageModule } from './unit-modal/unit-modal.module';
import { UnitModalPage } from './unit-modal/unit-modal.page';

const routes: Routes = [
  {
    path: '',
    component: UnitPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    UnitModalPageModule,
  ],
  entryComponents: [UnitModalPage],
  declarations: [UnitPage]
})
export class UnitPageModule { }

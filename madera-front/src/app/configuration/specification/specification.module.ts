import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SpecificationPage } from './specification.page';
import { SpecificationModalPageModule } from './specification-modal/specification-modal.module';
import { SpecificationModalPage } from './specification-modal/specification-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SpecificationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SpecificationModalPageModule,
  ],
  entryComponents: [SpecificationModalPage],
  declarations: [SpecificationPage]
})
export class SpecificationPageModule { }

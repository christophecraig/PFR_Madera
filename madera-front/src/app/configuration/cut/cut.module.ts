import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CutPage } from './cut.page';
import { CutModalPageModule } from './cut-modal/cut-modal.module';
import { CutModalPage } from './cut-modal/cut-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CutPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    CutModalPageModule,
  ],
  entryComponents: [CutModalPage],
  declarations: [CutPage]
})
export class CutPageModule { }

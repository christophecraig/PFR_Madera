import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RangePage } from './range.page';
import { RangeModalPageModule } from './range-modal/range-modal.module';
import { RangeModalPage } from './range-modal/range-modal.page';
import { RangeModuleModalPage } from './range-modal/range-module-modal/range-module-modal.page';

const routes: Routes = [
  {
    path: '',
    component: RangePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    RangeModalPageModule,
  ],
  entryComponents: [RangeModalPage, RangeModuleModalPage],
  declarations: [RangePage]
})
export class RangePageModule { }

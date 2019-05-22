import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CoverPage } from './cover.page';
import { CoverModalPageModule } from './cover-modal/cover-modal.module';
import { CoverModalPage } from './cover-modal/cover-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CoverPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    CoverModalPageModule,
  ],
  entryComponents: [CoverModalPage],
  declarations: [CoverPage]
})
export class CoverPageModule { }

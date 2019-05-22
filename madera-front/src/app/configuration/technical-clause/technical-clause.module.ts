import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TechnicalClausePage } from './technical-clause.page';
import { TechnicalClauseModalPageModule } from './technical-clause-modal/technical-clause-modal.module';
import { TechnicalClauseModalPage } from './technical-clause-modal/technical-clause-modal.page';

const routes: Routes = [
  {
    path: '',
    component: TechnicalClausePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TechnicalClauseModalPageModule,
  ],
  entryComponents: [TechnicalClauseModalPage],
  declarations: [TechnicalClausePage]
})
export class TechnicalClausePageModule { }

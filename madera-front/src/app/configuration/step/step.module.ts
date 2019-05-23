import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StepPage } from './step.page';
import { StepModalPageModule } from './step-modal/step-modal.module';
import { StepModalPage } from './step-modal/step-modal.page';

const routes: Routes = [
  {
    path: '',
    component: StepPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    StepModalPageModule,
  ],
  entryComponents: [StepModalPage],
  declarations: [StepPage]
})
export class StepPageModule { }

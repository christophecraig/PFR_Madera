import { Routes, RouterModule } from '@angular/router';

import { ModelPage } from './model.page';
import { ModelModalPage } from './model-modal/model-modal.page';
import { ModelModalPageModule } from './model-modal/model-modal.module';
import { ModelModelModalPageModule } from './model-modal/model-component-modal/model-module-modal.module';
import { ModelModuleModalPage } from './model-modal/model-component-modal/model-module-modal.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    component: ModelPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ModelModalPageModule,
    ModelModelModalPageModule,
  ],
  entryComponents: [
    ModelModalPage,
    ModelModuleModalPage,
  ],
  declarations: [ModelPage]
})
export class ModelPageModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModulePage } from './module.page';
import { ModuleModalPageModule } from './module-modal/module-modal.module';
import { ModuleModalPage } from './module-modal/module-modal.page';
import { ModuleComponentModalPage } from './module-modal/module-component-modal/module-component-modal.page';
import { ModuleComponentModalPageModule } from './module-modal/module-component-modal/module-component-modal.module';

const routes: Routes = [
  {
    path: '',
    component: ModulePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ModuleModalPageModule,
    ModuleComponentModalPageModule,
  ],
  entryComponents: [
    ModuleModalPage,
    ModuleComponentModalPage,
  ],
  declarations: [ModulePage]
})
export class ModulePageModule { }

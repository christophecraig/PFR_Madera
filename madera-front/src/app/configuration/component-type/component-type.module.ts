import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponentTypePage } from './component-type.page';
import { ComponentTypeModalPageModule } from './component-type-modal/component-type-modal.module';
import { ComponentTypeModalPage } from './component-type-modal/component-type-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentTypePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentTypeModalPageModule,
  ],
  entryComponents: [ComponentTypeModalPage],
  declarations: [ComponentTypePage]
})
export class ComponentTypePageModule { }

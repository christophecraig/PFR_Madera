import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponentPage } from './component.page';
import { ComponentModalPageModule } from './component-modal/component-modal.page.module';
import { ComponentModalPage } from './component-modal/component-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentModalPageModule,
  ],
  entryComponents: [ComponentModalPage],
  declarations: [ComponentPage]
})
export class ComponentPageModule { }

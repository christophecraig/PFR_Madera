import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConfigurationHomePage } from './configuration-home.page';

const routes: Routes = [
  {
    path: 'component-type',
    loadChildren: '../component-type/component-type.module#ComponentTypePageModule'
  },
  {
    path: 'component',
    loadChildren: '../component/component.module#ComponentPageModule'
  },
  {
    path: '',
    component: ConfigurationHomePage
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConfigurationHomePage]
})
export class ConfigurationHomePageModule {}

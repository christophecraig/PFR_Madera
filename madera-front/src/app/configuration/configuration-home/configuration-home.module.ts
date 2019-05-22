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
    path: 'range',
    loadChildren: '../range/range.module#RangePageModule'
  },
  {
    path: 'provider',
    loadChildren: '../provider/provider.module#ProviderPageModule'
  },
  {
    path: 'specification',
    loadChildren: '../specification/specification.module#SpecificationPageModule'
  },
  {
    path: 'unit',
    loadChildren: '../unit/unit.module#UnitPageModule'
  },
  {
    path: 'insulation',
    loadChildren: '../insulation/insulation.module#InsulationPageModule'
  },
  {
    path: 'cover',
    loadChildren: '../cover/cover.module#CoverPageModule'
  },
  {
    path: 'technical-clause',
    loadChildren: '../technical-clause/technical-clause.module#TechnicalClausePageModule'
  },
  {
    path: 'cut',
    loadChildren: '../cut/cut.module#CutPageModule'
  },
  {
    path: 'frame',
    loadChildren: '../frame/frame.module#FramePageModule'
  },
  {
    path: 'wood-frame',
    loadChildren: '../wood-frame/wood-frame.module#WoodFramePageModule'
  },
  {
    path: 'customer',
    loadChildren: '../customer/customer.module#CustomerPageModule'
  },
  {
    path: 'module',
    loadChildren: '../module/module.module#ModulePageModule'
  },
  {
    path: 'model',
    loadChildren: '../model/model.module#ModelPageModule'
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
export class ConfigurationHomePageModule { }

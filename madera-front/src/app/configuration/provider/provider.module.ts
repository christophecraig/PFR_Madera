import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProviderPage } from './provider.page';
import { ProviderModalPageModule } from './provider-modal/provider-modal.module';
import { ProviderModalPage } from './provider-modal/provider-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ProviderPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ProviderModalPageModule,
  ],
  entryComponents: [ProviderModalPage],
  declarations: [ProviderPage]
})
export class ProviderPageModule { }

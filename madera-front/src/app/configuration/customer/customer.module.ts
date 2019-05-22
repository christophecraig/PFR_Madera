import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CustomerPage } from './customer.page';
import { CustomerModalPageModule } from './customer-modal/customer-modal.module';
import { CustomerModalPage } from './customer-modal/customer-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    CustomerModalPageModule,
  ],
  entryComponents: [CustomerModalPage],
  declarations: [CustomerPage]
})
export class CustomerPageModule { }

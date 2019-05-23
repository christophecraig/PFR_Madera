import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { QuoteListPage } from './quote-list.page';
import { QuoteCreationPage } from '../quote-creation/quote-creation.page';

const routes: Routes = [
  {
    path: '',
    component: QuoteListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [QuoteCreationPage],
  declarations: [QuoteListPage]
})
export class QuoteListPageModule { }

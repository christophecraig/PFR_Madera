import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { QuoteCreationPage } from './quote-creation.page';
import { NewQuoteFormBaseComponent } from '../slides/new-quote-form-base/new-quote-form-base.component';
import { NewQuoteFormRangeComponent } from '../slides/new-quote-form-range/new-quote-form-range.component';
import { NewQuoteFormModulesComponent } from '../slides/new-quote-form-modules/new-quote-form-modules.component';
import { NewQuoteFormSummaryComponent } from '../slides/new-quote-form-summary/new-quote-form-summary.component';

const routes: Routes = [
  {
    path: '',
    component: QuoteCreationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    QuoteCreationPage,
    NewQuoteFormBaseComponent,
    NewQuoteFormRangeComponent,
    NewQuoteFormModulesComponent,
    NewQuoteFormSummaryComponent
  ]
})
export class QuoteCreationPageModule { }

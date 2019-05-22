import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentModalPage } from './component-modal.page';
import { ComponentTechnicalClauseModalPageModule } from './component-technical-clause-modal/component-technical-clause-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentTechnicalClauseModalPageModule,
  ],
  declarations: [ComponentModalPage]
})
export class ComponentModalPageModule { }

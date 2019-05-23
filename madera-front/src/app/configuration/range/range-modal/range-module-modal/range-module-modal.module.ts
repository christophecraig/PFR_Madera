import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RangeModuleModalPage } from './range-module-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [RangeModuleModalPage]
})
export class RangeModuleModalPageModule {}

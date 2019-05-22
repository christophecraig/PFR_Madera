import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WoodFramePage } from './wood-frame.page';
import { WoodFrameModalPageModule } from './wood-frame-modal/wood-frame-modal.module';
import { WoodFrameModalPage } from './wood-frame-modal/wood-frame-modal.page';

const routes: Routes = [
  {
    path: '',
    component: WoodFramePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    WoodFrameModalPageModule,
  ],
  entryComponents: [WoodFrameModalPage],
  declarations: [WoodFramePage]
})
export class WoodFramePageModule { }

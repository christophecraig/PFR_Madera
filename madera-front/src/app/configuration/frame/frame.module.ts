import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FramePage } from './frame.page';
import { FrameModalPageModule } from './frame-modal/frame-modal.module';
import { FrameModalPage } from './frame-modal/frame-modal.page';

const routes: Routes = [
  {
    path: '',
    component: FramePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    FrameModalPageModule,
  ],
  entryComponents: [FrameModalPage],
  declarations: [FramePage]
})
export class FramePageModule { }

import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavParams } from '@ionic/angular';
import { Model } from '@entities/model.entity';
import { environment } from 'src/environments/environment';
import { OverlayEventDetail } from '@ionic/core';
import { Cut } from '@entities/cut.entity';
import { Specification } from '@entities/specification.entity';
import { Unit } from '@entities/unit.entity';
import { ModelModuleModalPage } from './model-component-modal/model-module-modal.page';
import { Range } from '@entities/range.entity';

@Component({
  selector: 'app-model-modal',
  templateUrl: './model-modal.page.html',
  styleUrls: ['./model-modal.page.scss'],
})
export class ModelModalPage implements OnInit {

  model: Model;
  ranges: Range[];
  isEdit = false;

  constructor(private alertController: AlertController,
    private navParams: NavParams,
    private modalController: ModalController, ) { }

  ngOnInit() {
    this.isEdit = false;
    this.model = new Model();
    if (this.navParams.data && this.navParams.data.id) {
      Object.keys(this.navParams.data).forEach(key => {
        this.model[key] = this.navParams.data[key];
      });
      this.isEdit = true;
    }
    fetch(`//${environment.db.host}:${environment.db.port}/range`).then(response => {
      response.json().then(data => {
        console.log(data);
        this.ranges = data;
      });
    });
  }

  dismiss() {
    this.modalController.dismiss();
  }

  clear(field) {
    this.model[field] = null;
  }

  compareWith = (o1, o2) => {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

  async onSubmit() {
    console.log('submitting...');
    fetch(`//${environment.db.host}:${environment.db.port}/model/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.model)
    }).then(response => {
      response.json().then(async data => {
        console.log(data);
        await this.modalController.dismiss();
      });
    });
  }

  async editModules() {
    const modal = await this.modalController.create({
      component: ModelModuleModalPage,
      componentProps: this.model,
    });
    modal.onDidDismiss().then((response: OverlayEventDetail<Model>) => {
      if (response.data) {
        this.model = response.data;
      }
    });
    return await modal.present();
  }

}

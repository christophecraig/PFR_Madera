import { Component as NgComponent, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Module } from '@entities/module.entity';
import { NavParams, ModalController } from '@ionic/angular';
import { Model } from '@entities/model.entity';

@NgComponent({
  selector: 'app-model-module-modal',
  templateUrl: './model-module-modal.page.html',
  styleUrls: ['./model-module-modal.page.scss'],
})
export class ModelModuleModalPage implements OnInit {

  model: Model;
  modules: Module[];

  constructor(
    private navParams: NavParams,
    private modalController: ModalController,
  ) { }

  ngOnInit() {
    this.model = new Model();
    if (this.navParams.data && this.navParams.data.id) {
      Object.keys(this.navParams.data).forEach(key => {
        this.model[key] = this.navParams.data[key];
      });
    }
    fetch(`//${environment.db.host}:${environment.db.port}/module`).then(response => {
      response.json().then(data => {
        console.log(data);
        this.modules = data;
      });
    });
  }

  dismiss() {
    this.modalController.dismiss();
  }

  updateModules() {
    fetch(`//${environment.db.host}:${environment.db.port}/model/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.model)
    }).then(response => {
      response.json().then(async data => {
        console.log(data);
        await this.modalController.dismiss(this.model);
      });
    });
  }

  updateModule(event) {
    console.debug(event);
    if (event.detail.checked) {
      this.model.modules.push(event.detail.value);
    } else {
      this.model.modules = this.model.modules.filter(module => {
        return module.id !== event.detail.value.id;
      });
    }
  }

  isChecked(model: Model): boolean {
    let state = false;
    if (this.model.modules) {
      this.model.modules.forEach(checkedModel => {
        if (checkedModel.id === model.id) {
          state = true;
        }
      });
    }
    return state;
  }


}

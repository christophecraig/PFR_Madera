import { Component as NgComponent, OnInit } from '@angular/core';
import { TechnicalClause } from '@entities/technical-clause.entity';
import { environment } from 'src/environments/environment';
import { Component } from '@entities/component.entity';
import { NavParams, ModalController } from '@ionic/angular';
import { Module } from '@entities/module.entity';

@NgComponent({
  selector: 'app-module-component-modal',
  templateUrl: './module-component-modal.page.html',
  styleUrls: ['./module-component-modal.page.scss'],
})
export class ModuleComponentModalPage implements OnInit {

  module: Module;
  components: Component[];

  constructor(
    private navParams: NavParams,
    private modalController: ModalController,
  ) { }

  ngOnInit() {
    this.module = new Module();
    if (this.navParams.data && this.navParams.data.id) {
      Object.keys(this.navParams.data).forEach(key => {
        this.module[key] = this.navParams.data[key];
      });
    }
    fetch(`//${environment.db.host}:${environment.db.port}/component`).then(response => {
      response.json().then(data => {
        console.log(data);
        this.components = data;
      });
    });
  }

  dismiss() {
    this.modalController.dismiss();
  }

  updateComponents() {
    fetch(`//${environment.db.host}:${environment.db.port}/module/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.module)
    }).then(response => {
      response.json().then(async data => {
        console.log(data);
        await this.modalController.dismiss(this.module);
      });
    });
  }

  updateComponent(event) {
    console.debug(event);
    if (event.detail.checked) {
      this.module.components.push(event.detail.value);
    } else {
      this.module.components = this.module.components.filter(component => {
        return component.id !== event.detail.value.id;
      });
    }
  }

  isChecked(module: Module): boolean {
    let state = false;
    if (this.module.components) {
      this.module.components.forEach(checkedModule => {
        if (checkedModule.id === module.id) {
          state = true;
        }
      });
    }
    return state;
  }


}

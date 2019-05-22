import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavParams } from '@ionic/angular';
import { Module } from '@entities/module.entity';
import { environment } from 'src/environments/environment';
import { OverlayEventDetail } from '@ionic/core';
import { Cut } from '@entities/cut.entity';
import { Specification } from '@entities/specification.entity';
import { Unit } from '@entities/unit.entity';
import { ModuleComponentModalPage } from './module-component-modal/module-component-modal.page';

@Component({
  selector: 'app-module-modal',
  templateUrl: './module-modal.page.html',
  styleUrls: ['./module-modal.page.scss'],
})
export class ModuleModalPage implements OnInit {

  module: Module;
  cuts: Cut[];
  specifications: Specification[];
  units: Unit[];
  isEdit = false;

  constructor(private alertController: AlertController,
    private navParams: NavParams,
    private modalController: ModalController, ) { }

  ngOnInit() {
    this.isEdit = false;
    this.module = new Module();
    if (this.navParams.data && this.navParams.data.id) {
      Object.keys(this.navParams.data).forEach(key => {
        this.module[key] = this.navParams.data[key];
      });
      this.isEdit = true;
    }
    fetch(`//${environment.db.host}:${environment.db.port}/cut`).then(response => {
      response.json().then(data => {
        console.log(data);
        this.cuts = data;
      });
    });
    fetch(`//${environment.db.host}:${environment.db.port}/specification`).then(response => {
      response.json().then(data => {
        console.log(data);
        this.specifications = data;
      });
    });
    fetch(`//${environment.db.host}:${environment.db.port}/unit`).then(response => {
      response.json().then(data => {
        console.log(data);
        this.units = data;
      });
    });
  }

  dismiss() {
    this.modalController.dismiss();
  }

  clear(field) {
    this.module[field] = null;
  }

  compareWith = (o1, o2) => {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

  async onSubmit() {
    console.log('submitting...');
    fetch(`//${environment.db.host}:${environment.db.port}/module/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.module)
    }).then(response => {
      response.json().then(async data => {
        console.log(data);
        await this.modalController.dismiss();
      });
    });
  }
  
  async editComponents() {
    const modal = await this.modalController.create({
      component: ModuleComponentModalPage,
      componentProps: this.module,
    });
    modal.onDidDismiss().then((response: OverlayEventDetail<Module>) => {
      if (response.data) {
        this.module = response.data;
      }
    });
    return await modal.present();
  }

}

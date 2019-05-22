import { Component, OnInit } from '@angular/core';
import { Module } from '@entities/module.entity';
import { environment } from 'src/environments/environment';
import { AlertController, ModalController } from '@ionic/angular';
import { ModuleModalPage } from './module-modal/module-modal.page';

@Component({
  selector: 'app-module',
  templateUrl: './module.page.html',
  styleUrls: ['./module.page.scss'],
})
export class ModulePage implements OnInit {

  modules: Module[];
  isEdit = false;

  constructor(
    private alertController: AlertController,
    private modalController: ModalController
  ) { }

  loadModel() {
    fetch(`//${environment.db.host}:${environment.db.port}/module/`).then(response => {
      response.json().then(data => {
        console.log(data);
        this.modules = data;
      });
    });
  }

  ngOnInit() {
    this.loadModel();
  }

  async addModule() {
    const modal = await this.modalController.create({
      component: ModuleModalPage,
    });
    modal.onDidDismiss().then(() => {
      this.loadModel();
    });
    return await modal.present();
  }

  async editModule(module) {
    const modal = await this.modalController.create({
      component: ModuleModalPage,
      componentProps: module,
    });
    modal.onDidDismiss().then(() => {
      this.loadModel();
    });
    return await modal.present();
  }

  async deleteModulePresentAlert(module: Module) {
    const alert = await this.alertController.create({
      message: `Voulez-vous vraiment supprimer votre module "${module.name}" ?`,
      buttons: [{
        text: 'NON',
        role: 'cancel',
      }, {
        text: 'OUI',
        handler: async () => {
          fetch(`//${environment.db.host}:${environment.db.port}/module/${module.id}`, {
            method: 'DELETE'
          }).then(response => {
            response.json().then(async data => {
              console.log(data);
              this.loadModel();
            });
          });
        },
      }],
    });
    await alert.present();
  }

}

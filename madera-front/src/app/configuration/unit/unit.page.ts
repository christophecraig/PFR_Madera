import { Component, OnInit } from '@angular/core';
import { Unit } from '@entities/unit.entity';
import { environment } from 'src/environments/environment';
import { AlertController, ModalController } from '@ionic/angular';
import { UnitModalPage } from './unit-modal/unit-modal.page';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.page.html',
  styleUrls: ['./unit.page.scss'],
})
export class UnitPage implements OnInit {

  units: Unit[];
  isEdit = false;

  constructor(
    private alertController: AlertController,
    private modalController: ModalController
  ) { }

  loadModel() {
    fetch(`//${environment.db.host}:${environment.db.port}/unit/`).then(response => {
      response.json().then(data => {
        console.log(data);
        this.units = data;
      });
    });
  }

  ngOnInit() {
    this.loadModel();
  }

  async addUnit() {
    const modal = await this.modalController.create({
      component: UnitModalPage,
    });
    modal.onDidDismiss().then(() => {
      this.loadModel();
    });
    return await modal.present();
  }

  async editUnit(unit) {
    const modal = await this.modalController.create({
      component: UnitModalPage,
      componentProps: unit,
    });
    modal.onDidDismiss().then(() => {
      this.loadModel();
    });
    return await modal.present();
  }

  async deleteUnitPresentAlert(unit: Unit) {
    const alert = await this.alertController.create({
      message: `Voulez-vous vraiment supprimer votre unit "${unit.name}" ?`,
      buttons: [{
        text: 'NON',
        role: 'cancel',
      }, {
        text: 'OUI',
        handler: async () => {
          fetch(`//${environment.db.host}:${environment.db.port}/unit/${unit.id}`, {
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

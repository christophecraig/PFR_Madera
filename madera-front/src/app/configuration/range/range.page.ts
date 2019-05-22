import { Component, OnInit } from '@angular/core';
import { Range } from '@entities/range.entity';
import { environment } from 'src/environments/environment';
import { AlertController, ModalController } from '@ionic/angular';
import { RangeModalPage } from './range-modal/range-modal.page';

@Component({
  selector: 'app-range',
  templateUrl: './range.page.html',
  styleUrls: ['./range.page.scss'],
})
export class RangePage implements OnInit {

  ranges: Range[];
  isEdit = false;

  constructor(
    private alertController: AlertController,
    private modalController: ModalController
  ) { }

  loadModel() {
    fetch(`//${environment.db.host}:${environment.db.port}/range/`).then(response => {
      response.json().then(data => {
        console.log(data);
        this.ranges = data;
      });
    });
  }

  ngOnInit() {
    this.loadModel();
  }

  async addRange() {
    const modal = await this.modalController.create({
      component: RangeModalPage,
    });
    modal.onDidDismiss().then(() => {
      this.loadModel();
    });
    return await modal.present();
  }

  async editRange(range) {
    const modal = await this.modalController.create({
      component: RangeModalPage,
      componentProps: range,
    });
    modal.onDidDismiss().then(() => {
      this.loadModel();
    });
    return await modal.present();
  }

  async deleteRangePresentAlert(range: Range) {
    const alert = await this.alertController.create({
      message: `Voulez-vous vraiment supprimer votre range "${range.name}" ?`,
      buttons: [{
        text: 'NON',
        role: 'cancel',
      }, {
        text: 'OUI',
        handler: async () => {
          fetch(`//${environment.db.host}:${environment.db.port}/range/${range.id}`, {
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

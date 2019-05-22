import { Component, OnInit } from '@angular/core';
import { WoodFrame } from '@entities/wood-frame.entity';
import { environment } from 'src/environments/environment';
import { AlertController, ModalController } from '@ionic/angular';
import { WoodFrameModalPage } from './wood-frame-modal/wood-frame-modal.page';

@Component({
  selector: 'app-wood-frame',
  templateUrl: './wood-frame.page.html',
  styleUrls: ['./wood-frame.page.scss'],
})
export class WoodFramePage implements OnInit {

  woodFrames: WoodFrame[];
  isEdit = false;

  constructor(
    private alertController: AlertController,
    private modalController: ModalController
  ) { }

  loadModel() {
    fetch(`//${environment.db.host}:${environment.db.port}/wood-frame/`).then(response => {
      response.json().then(data => {
        console.log(data);
        this.woodFrames = data;
      });
    });
  }

  ngOnInit() {
    this.loadModel();
  }

  async addWoodFrame() {
    const modal = await this.modalController.create({
      component: WoodFrameModalPage,
    });
    modal.onDidDismiss().then(() => {
      this.loadModel();
    });
    return await modal.present();
  }

  async editWoodFrame(woodFrame) {
    const modal = await this.modalController.create({
      component: WoodFrameModalPage,
      componentProps: woodFrame,
    });
    modal.onDidDismiss().then(() => {
      this.loadModel();
    });
    return await modal.present();
  }

  async deleteWoodFramePresentAlert(woodFrame: WoodFrame) {
    const alert = await this.alertController.create({
      message: `Voulez-vous vraiment supprimer votre woodFrame "${woodFrame.name}" ?`,
      buttons: [{
        text: 'NON',
        role: 'cancel',
      }, {
        text: 'OUI',
        handler: async () => {
          fetch(`//${environment.db.host}:${environment.db.port}/wood-frame/${woodFrame.id}`, {
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

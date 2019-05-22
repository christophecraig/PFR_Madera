import { Component, OnInit } from '@angular/core';
import { Frame } from '@entities/frame.entity';
import { environment } from 'src/environments/environment';
import { AlertController, ModalController } from '@ionic/angular';
import { FrameModalPage } from './frame-modal/frame-modal.page';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.page.html',
  styleUrls: ['./frame.page.scss'],
})
export class FramePage implements OnInit {

  frames: Frame[];
  isEdit = false;

  constructor(
    private alertController: AlertController,
    private modalController: ModalController
  ) { }

  loadModel() {
    fetch(`//${environment.db.host}:${environment.db.port}/frame/`).then(response => {
      response.json().then(data => {
        console.log(data);
        this.frames = data;
      });
    });
  }

  ngOnInit() {
    this.loadModel();
  }

  async addFrame() {
    const modal = await this.modalController.create({
      component: FrameModalPage,
    });
    modal.onDidDismiss().then(() => {
      this.loadModel();
    });
    return await modal.present();
  }

  async editFrame(frame) {
    const modal = await this.modalController.create({
      component: FrameModalPage,
      componentProps: frame,
    });
    modal.onDidDismiss().then(() => {
      this.loadModel();
    });
    return await modal.present();
  }

  async deleteFramePresentAlert(frame: Frame) {
    const alert = await this.alertController.create({
      message: `Voulez-vous vraiment supprimer votre frame "${frame.name}" ?`,
      buttons: [{
        text: 'NON',
        role: 'cancel',
      }, {
        text: 'OUI',
        handler: async () => {
          fetch(`//${environment.db.host}:${environment.db.port}/frame/${frame.id}`, {
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

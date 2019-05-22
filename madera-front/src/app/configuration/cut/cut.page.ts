import { Component, OnInit } from '@angular/core';
import { Cut } from '@entities/cut.entity';
import { environment } from 'src/environments/environment';
import { AlertController, ModalController } from '@ionic/angular';
import { CutModalPage } from './cut-modal/cut-modal.page';

@Component({
  selector: 'app-cut',
  templateUrl: './cut.page.html',
  styleUrls: ['./cut.page.scss'],
})
export class CutPage implements OnInit {

  cuts: Cut[];
  isEdit = false;

  constructor(
    private alertController: AlertController,
    private modalController: ModalController
  ) { }

  loadModel() {
    fetch(`//${environment.db.host}:${environment.db.port}/cut/`).then(response => {
      response.json().then(data => {
        console.log(data);
        this.cuts = data;
      });
    });
  }

  ngOnInit() {
    this.loadModel();
  }

  async addCut() {
    const modal = await this.modalController.create({
      component: CutModalPage,
    });
    modal.onDidDismiss().then(() => {
      this.loadModel();
    });
    return await modal.present();
  }

  async editCut(cut) {
    const modal = await this.modalController.create({
      component: CutModalPage,
      componentProps: cut,
    });
    modal.onDidDismiss().then(() => {
      this.loadModel();
    });
    return await modal.present();
  }

  async deleteCutPresentAlert(cut: Cut) {
    const alert = await this.alertController.create({
      message: `Voulez-vous vraiment supprimer votre cut "${cut.name}" ?`,
      buttons: [{
        text: 'NON',
        role: 'cancel',
      }, {
        text: 'OUI',
        handler: async () => {
          fetch(`//${environment.db.host}:${environment.db.port}/cut/${cut.id}`, {
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

import { Component, OnInit } from '@angular/core';
import { Cover } from '@entities/cover.entity';
import { environment } from 'src/environments/environment';
import { AlertController, ModalController } from '@ionic/angular';
import { CoverModalPage } from './cover-modal/cover-modal.page';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.page.html',
  styleUrls: ['./cover.page.scss'],
})
export class CoverPage implements OnInit {

  covers: Cover[];
  isEdit = false;

  constructor(
    private alertController: AlertController,
    private modalController: ModalController
  ) { }

  loadModel() {
    fetch(`//${environment.db.host}:${environment.db.port}/cover/`).then(response => {
      response.json().then(data => {
        console.log(data);
        this.covers = data;
      });
    });
  }

  ngOnInit() {
    this.loadModel();
  }

  async addCover() {
    const modal = await this.modalController.create({
      component: CoverModalPage,
    });
    modal.onDidDismiss().then(() => {
      this.loadModel();
    });
    return await modal.present();
  }

  async editCover(cover) {
    const modal = await this.modalController.create({
      component: CoverModalPage,
      componentProps: cover,
    });
    modal.onDidDismiss().then(() => {
      this.loadModel();
    });
    return await modal.present();
  }

  async deleteCoverPresentAlert(cover: Cover) {
    const alert = await this.alertController.create({
      message: `Voulez-vous vraiment supprimer votre cover "${cover.name}" ?`,
      buttons: [{
        text: 'NON',
        role: 'cancel',
      }, {
        text: 'OUI',
        handler: async () => {
          fetch(`//${environment.db.host}:${environment.db.port}/cover/${cover.id}`, {
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

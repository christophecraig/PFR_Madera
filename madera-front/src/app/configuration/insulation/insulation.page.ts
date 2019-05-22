import { Component, OnInit } from '@angular/core';
import { Insulation } from '@entities/insulation.entity';
import { environment } from 'src/environments/environment';
import { AlertController, ModalController } from '@ionic/angular';
import { InsulationModalPage } from './insulation-modal/insulation-modal.page';

@Component({
  selector: 'app-insulation',
  templateUrl: './insulation.page.html',
  styleUrls: ['./insulation.page.scss'],
})
export class InsulationPage implements OnInit {

  insulations: Insulation[];
  isEdit = false;

  constructor(
    private alertController: AlertController,
    private modalController: ModalController
  ) { }

  loadModel() {
    fetch(`//${environment.db.host}:${environment.db.port}/insulation/`).then(response => {
      response.json().then(data => {
        console.log(data);
        this.insulations = data;
      });
    });
  }

  ngOnInit() {
    this.loadModel();
  }

  async addInsulation() {
    const modal = await this.modalController.create({
      component: InsulationModalPage,
    });
    modal.onDidDismiss().then(() => {
      this.loadModel();
    });
    return await modal.present();
  }

  async editInsulation(insulation) {
    const modal = await this.modalController.create({
      component: InsulationModalPage,
      componentProps: insulation,
    });
    modal.onDidDismiss().then(() => {
      this.loadModel();
    });
    return await modal.present();
  }

  async deleteInsulationPresentAlert(insulation: Insulation) {
    const alert = await this.alertController.create({
      message: `Voulez-vous vraiment supprimer votre insulation "${insulation.name}" ?`,
      buttons: [{
        text: 'NON',
        role: 'cancel',
      }, {
        text: 'OUI',
        handler: async () => {
          fetch(`//${environment.db.host}:${environment.db.port}/insulation/${insulation.id}`, {
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

import { Component, OnInit } from '@angular/core';
import { Specification } from '@entities/specification.entity';
import { environment } from 'src/environments/environment';
import { AlertController, ModalController } from '@ionic/angular';
import { SpecificationModalPage } from './specification-modal/specification-modal.page';

@Component({
  selector: 'app-specification',
  templateUrl: './specification.page.html',
  styleUrls: ['./specification.page.scss'],
})
export class SpecificationPage implements OnInit {

  specifications: Specification[];
  isEdit = false;

  constructor(
    private alertController: AlertController,
    private modalController: ModalController
  ) { }

  loadModel() {
    fetch(`//${environment.db.host}:${environment.db.port}/specification/`).then(response => {
      response.json().then(data => {
        console.log(data);
        this.specifications = data;
      });
    });
  }

  ngOnInit() {
    this.loadModel();
  }

  async addSpecification() {
    const modal = await this.modalController.create({
      component: SpecificationModalPage,
    });
    modal.onDidDismiss().then(() => {
      this.loadModel();
    });
    return await modal.present();
  }

  async editSpecification(specification) {
    const modal = await this.modalController.create({
      component: SpecificationModalPage,
      componentProps: specification,
    });
    modal.onDidDismiss().then(() => {
      this.loadModel();
    });
    return await modal.present();
  }

  async deleteSpecificationPresentAlert(specification: Specification) {
    const alert = await this.alertController.create({
      message: `Voulez-vous vraiment supprimer votre specification "${specification.name}" ?`,
      buttons: [{
        text: 'NON',
        role: 'cancel',
      }, {
        text: 'OUI',
        handler: async () => {
          fetch(`//${environment.db.host}:${environment.db.port}/specification/${specification.id}`, {
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

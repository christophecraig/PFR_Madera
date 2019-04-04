import { Component, OnInit } from '@angular/core';
import { ComponentType } from '@entities/component-type.entity';
import { environment } from 'src/environments/environment';
import { AlertController, ModalController } from '@ionic/angular';
import { ComponentTypeModalPage } from './component-type-modal/component-type-modal.page';

@Component({
  selector: 'app-component-type',
  templateUrl: './component-type.page.html',
  styleUrls: ['./component-type.page.scss'],
})
export class ComponentTypePage implements OnInit {

  componentTypes: ComponentType[];
  isEdit = false;

  constructor(
    private alertController: AlertController,
    private modalController: ModalController
  ) { }

  loadModel() {
    fetch(`http://${environment.db.host}:${environment.db.port}/component-type/`).then(response => {
      response.json().then(data => {
        console.log(data);
        this.componentTypes = data;
      });
    });
  }

  ngOnInit() {
    this.loadModel();
  }

  async addComponentType() {
    const modal = await this.modalController.create({
      component: ComponentTypeModalPage,
    });
    modal.onDidDismiss().then(() => {
      this.loadModel();
    });
    return await modal.present();
  }

  async editComponentType(componentType) {
    const modal = await this.modalController.create({
      component: ComponentTypeModalPage,
      componentProps: componentType,
    });
    modal.onDidDismiss().then(() => {
      this.loadModel();
    });
    return await modal.present();
  }

  async deleteComponentTypePresentAlert(componentType: ComponentType) {
    const alert = await this.alertController.create({
      message: `Voulez-vous vraiment supprimer votre componentType "${componentType.name}" ?`,
      buttons: [{
        text: 'NON',
        role: 'cancel',
      }, {
        text: 'OUI',
        handler: async () => {
          fetch(`http://${environment.db.host}:${environment.db.port}/component-type/${componentType.id}`, {
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

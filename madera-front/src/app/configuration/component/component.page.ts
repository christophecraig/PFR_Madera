import { Component as NgComponent, OnInit } from '@angular/core';
import { Component } from '@entities/component.entity';
import { environment } from 'src/environments/environment';
import { AlertController, ModalController } from '@ionic/angular';
import { ComponentModalPage } from './component-modal/component-modal.page';

@NgComponent({
  selector: 'app-component',
  templateUrl: './component.page.html',
  styleUrls: ['./component.page.scss'],
})
export class ComponentPage implements OnInit {

  componentTypes: Component[];
  isEdit = false;

  constructor(
    private alertController: AlertController,
    private modalController: ModalController
  ) { }

  loadModel() {
    fetch(`http://${environment.db.host}:${environment.db.port}/component/`).then(response => {
      response.json().then(data => {
        console.log(data);
        this.componentTypes = data;
      });
    });
  }

  ngOnInit() {
    this.loadModel();
  }

  async addComponent() {
    const modal = await this.modalController.create({
      component: ComponentModalPage,
    });
    modal.onDidDismiss().then(() => {
      this.loadModel();
    });
    return await modal.present();
  }

  async editComponent(componentType) {
    const modal = await this.modalController.create({
      component: ComponentModalPage,
      componentProps: componentType,
    });
    modal.onDidDismiss().then(() => {
      this.loadModel();
    });
    return await modal.present();
  }

  async deleteComponentPresentAlert(componentType: Component) {
    const alert = await this.alertController.create({
      message: `Voulez-vous vraiment supprimer votre componentType "${componentType.name}" ?`,
      buttons: [{
        text: 'NON',
        role: 'cancel',
      }, {
        text: 'OUI',
        handler: async () => {
          fetch(`http://${environment.db.host}:${environment.db.port}/component/${componentType.id}`, {
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

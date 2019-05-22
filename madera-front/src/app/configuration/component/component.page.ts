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

  components: Component[];
  isEdit = false;

  constructor(
    private alertController: AlertController,
    private modalController: ModalController
  ) { }

  loadModel() {
    fetch(`//${environment.db.host}:${environment.db.port}/component/`).then(response => {
      response.json().then(data => {
        console.log(data);
        this.components = data;
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

  async editComponent(component) {
    const modal = await this.modalController.create({
      component: ComponentModalPage,
      componentProps: component,
    });
    modal.onDidDismiss().then(() => {
      this.loadModel();
    });
    return await modal.present();
  }

  async deleteComponentPresentAlert(component: Component) {
    const alert = await this.alertController.create({
      message: `Voulez-vous vraiment supprimer votre component "${component.name}" ?`,
      buttons: [{
        text: 'NON',
        role: 'cancel',
      }, {
        text: 'OUI',
        handler: async () => {
          fetch(`//${environment.db.host}:${environment.db.port}/component/${component.id}`, {
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

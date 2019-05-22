import { Component, OnInit } from '@angular/core';
import { Provider } from '@entities/provider.entity';
import { environment } from 'src/environments/environment';
import { AlertController, ModalController } from '@ionic/angular';
import { ProviderModalPage } from './provider-modal/provider-modal.page';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.page.html',
  styleUrls: ['./provider.page.scss'],
})
export class ProviderPage implements OnInit {

  providers: Provider[];
  isEdit = false;

  constructor(
    private alertController: AlertController,
    private modalController: ModalController
  ) { }

  loadModel() {
    fetch(`//${environment.db.host}:${environment.db.port}/provider/`).then(response => {
      response.json().then(data => {
        console.log(data);
        this.providers = data;
      });
    });
  }

  ngOnInit() {
    this.loadModel();
  }

  async addProvider() {
    const modal = await this.modalController.create({
      component: ProviderModalPage,
    });
    modal.onDidDismiss().then(() => {
      this.loadModel();
    });
    return await modal.present();
  }

  async editProvider(provider) {
    const modal = await this.modalController.create({
      component: ProviderModalPage,
      componentProps: provider,
    });
    modal.onDidDismiss().then(() => {
      this.loadModel();
    });
    return await modal.present();
  }

  async deleteProviderPresentAlert(provider: Provider) {
    const alert = await this.alertController.create({
      message: `Voulez-vous vraiment supprimer votre provider "${provider.businessName}" ?`,
      buttons: [{
        text: 'NON',
        role: 'cancel',
      }, {
        text: 'OUI',
        handler: async () => {
          fetch(`//${environment.db.host}:${environment.db.port}/provider/${provider.id}`, {
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

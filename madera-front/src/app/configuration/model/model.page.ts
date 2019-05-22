import { OnInit, Component } from '@angular/core';
import { Model } from '@entities/model.entity';
import { environment } from 'src/environments/environment';
import { AlertController, ModalController } from '@ionic/angular';
import { ModelModalPage } from './model-modal/model-modal.page';

@Component({
  selector: 'app-model',
  templateUrl: './model.page.html',
  styleUrls: ['./model.page.scss'],
})
export class ModelPage implements OnInit {

  models: Model[];
  isEdit = false;

  constructor(
    private alertController: AlertController,
    private modalController: ModalController
  ) { }

  loadModel() {
    fetch(`//${environment.db.host}:${environment.db.port}/model/`).then(response => {
      response.json().then(data => {
        console.log(data);
        this.models = data;
      });
    });
  }

  ngOnInit() {
    this.loadModel();
  }

  async addModel() {
    const modal = await this.modalController.create({
      component: ModelModalPage,
    });
    modal.onDidDismiss().then(() => {
      this.loadModel();
    });
    return await modal.present();
  }

  async editModel(model) {
    const modal = await this.modalController.create({
      component: ModelModalPage,
      componentProps: model,
    });
    modal.onDidDismiss().then(() => {
      this.loadModel();
    });
    return await modal.present();
  }

  async deleteModelPresentAlert(model: Model) {
    const alert = await this.alertController.create({
      message: `Voulez-vous vraiment supprimer votre model "${model.name}" ?`,
      buttons: [{
        text: 'NON',
        role: 'cancel',
      }, {
        text: 'OUI',
        handler: async () => {
          fetch(`//${environment.db.host}:${environment.db.port}/model/${model.id}`, {
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

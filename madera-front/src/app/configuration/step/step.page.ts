import { Component, OnInit } from '@angular/core';
import { Step } from '@entities/step.entity';
import { environment } from 'src/environments/environment';
import { AlertController, ModalController } from '@ionic/angular';
import { StepModalPage } from './step-modal/step-modal.page';

@Component({
  selector: 'app-step',
  templateUrl: './step.page.html',
  styleUrls: ['./step.page.scss'],
})
export class StepPage implements OnInit {

  steps: Step[];
  isEdit = false;

  constructor(
    private alertController: AlertController,
    private modalController: ModalController
  ) { }

  loadModel() {
    fetch(`//${environment.db.host}:${environment.db.port}/step/`).then(response => {
      response.json().then(data => {
        console.log(data);
        this.steps = data;
      });
    });
  }

  ngOnInit() {
    this.loadModel();
  }

  async addStep() {
    const modal = await this.modalController.create({
      component: StepModalPage,
    });
    modal.onDidDismiss().then(() => {
      this.loadModel();
    });
    return await modal.present();
  }

  async editStep(step) {
    const modal = await this.modalController.create({
      component: StepModalPage,
      componentProps: step,
    });
    modal.onDidDismiss().then(() => {
      this.loadModel();
    });
    return await modal.present();
  }

  async deleteStepPresentAlert(step: Step) {
    const alert = await this.alertController.create({
      message: `Voulez-vous vraiment supprimer votre step "${step.name}" ?`,
      buttons: [{
        text: 'NON',
        role: 'cancel',
      }, {
        text: 'OUI',
        handler: async () => {
          fetch(`//${environment.db.host}:${environment.db.port}/step/${step.id}`, {
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

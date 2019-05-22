import { Component, OnInit } from '@angular/core';
import { TechnicalClause } from '@entities/technical-clause.entity';
import { environment } from 'src/environments/environment';
import { AlertController, ModalController } from '@ionic/angular';
import { TechnicalClauseModalPage } from './technical-clause-modal/technical-clause-modal.page';

@Component({
  selector: 'app-technical-clause',
  templateUrl: './technical-clause.page.html',
  styleUrls: ['./technical-clause.page.scss'],
})
export class TechnicalClausePage implements OnInit {

  technicalClauses: TechnicalClause[];
  isEdit = false;

  constructor(
    private alertController: AlertController,
    private modalController: ModalController
  ) { }

  loadModel() {
    fetch(`//${environment.db.host}:${environment.db.port}/technical-clause/`).then(response => {
      response.json().then(data => {
        console.log(data);
        this.technicalClauses = data;
      });
    });
  }

  ngOnInit() {
    this.loadModel();
  }

  async addTechnicalClause() {
    const modal = await this.modalController.create({
      component: TechnicalClauseModalPage,
    });
    modal.onDidDismiss().then(() => {
      this.loadModel();
    });
    return await modal.present();
  }

  async editTechnicalClause(technicalClause) {
    const modal = await this.modalController.create({
      component: TechnicalClauseModalPage,
      componentProps: technicalClause,
    });
    modal.onDidDismiss().then(() => {
      this.loadModel();
    });
    return await modal.present();
  }

  async deleteTechnicalClausePresentAlert(technicalClause: TechnicalClause) {
    const alert = await this.alertController.create({
      message: `Voulez-vous vraiment supprimer votre technicalClause "${technicalClause.name}" ?`,
      buttons: [{
        text: 'NON',
        role: 'cancel',
      }, {
        text: 'OUI',
        handler: async () => {
          fetch(`//${environment.db.host}:${environment.db.port}/technicalClause/${technicalClause.id}`, {
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

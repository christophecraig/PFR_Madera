import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AlertController, ModalController } from '@ionic/angular';
import { Quote } from '@entities/quote.entity';
import { QuoteCreationPage } from '../quote-creation/quote-creation.page';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.page.html',
  styleUrls: ['./quote-list.page.scss'],
})
export class QuoteListPage implements OnInit {

  quotes: Quote[];

  constructor(
    private alertController: AlertController,
    private modalController: ModalController
  ) { }

  loadModel() {
    fetch(`//${environment.db.host}:${environment.db.port}/quote/`).then(response => {
      response.json().then(data => {
        console.log(data);
        this.quotes = data;
      });
    });
  }

  ngOnInit() {
    this.loadModel();
  }

  async addQuote() {
    const modal = await this.modalController.create({
      component: QuoteCreationPage,
    });
    modal.onDidDismiss().then(() => {
      this.loadModel();
    });
    return await modal.present();
  }

  async editQuote(quote) {
    const modal = await this.modalController.create({
      component: QuoteCreationPage,
      componentProps: quote,
    });
    modal.onDidDismiss().then(() => {
      this.loadModel();
    });
    return await modal.present();
  }

  async deleteQuotePresentAlert(quote: Quote) {
    const alert = await this.alertController.create({
      message: `Voulez-vous vraiment supprimer votre quote "${quote.name}" ?`,
      buttons: [{
        text: 'NON',
        role: 'cancel',
      }, {
        text: 'OUI',
        handler: async () => {
          fetch(`//${environment.db.host}:${environment.db.port}/quote/${quote.id}`, {
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

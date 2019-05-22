import { Component, OnInit } from '@angular/core';
import { Customer } from '@entities/customer.entity';
import { environment } from 'src/environments/environment';
import { AlertController, ModalController } from '@ionic/angular';
import { CustomerModalPage } from './customer-modal/customer-modal.page';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {

  customers: Customer[];
  isEdit = false;

  constructor(
    private alertController: AlertController,
    private modalController: ModalController
  ) { }

  loadModel() {
    fetch(`//${environment.db.host}:${environment.db.port}/customer/`).then(response => {
      response.json().then(data => {
        console.log(data);
        this.customers = data;
      });
    });
  }

  ngOnInit() {
    this.loadModel();
  }

  async addCustomer() {
    const modal = await this.modalController.create({
      component: CustomerModalPage,
    });
    modal.onDidDismiss().then(() => {
      this.loadModel();
    });
    return await modal.present();
  }

  async editCustomer(customer) {
    const modal = await this.modalController.create({
      component: CustomerModalPage,
      componentProps: customer,
    });
    modal.onDidDismiss().then(() => {
      this.loadModel();
    });
    return await modal.present();
  }

  async deleteCustomerPresentAlert(customer: Customer) {
    const alert = await this.alertController.create({
      message: `Voulez-vous vraiment supprimer votre customer "${customer.firstName} ${customer.lastName}" ?`,
      buttons: [{
        text: 'NON',
        role: 'cancel',
      }, {
        text: 'OUI',
        handler: async () => {
          fetch(`//${environment.db.host}:${environment.db.port}/customer/${customer.id}`, {
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

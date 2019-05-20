import { Component as NgComponent, OnInit } from '@angular/core';
import { AlertController, ModalController, NavParams } from '@ionic/angular';
import { Component } from '@entities/component.entity';
import { environment } from 'src/environments/environment';

@NgComponent({
  selector: 'app-component-modal',
  templateUrl: './component-modal.page.html',
  styleUrls: ['./component-modal.page.scss'],
})
export class ComponentModalPage implements OnInit {

  componentType: Component;
  isEdit = false;

  constructor(private alertController: AlertController,
    private navParams: NavParams,
    private modalController: ModalController, ) { }

  ngOnInit() {
    this.isEdit = false;
    this.componentType = new Component();
    if (this.navParams.data && this.navParams.data.id) {
      Object.keys(this.navParams.data).forEach(key => {
        this.componentType[key] = this.navParams.data[key];
      });
      this.isEdit = true;
      return true;
    }
  }

  dismiss() {
    this.modalController.dismiss();
  }

  clear(field) {
    this.componentType[field] = null;
  }

  async onSubmit() {
    console.log('submitting...');
    fetch(`http://${environment.db.host}:${environment.db.port}/component/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.componentType)
    }).then(response => {
      response.json().then(async data => {
        console.log(data);
        await this.modalController.dismiss();
      });
    });
  }
}

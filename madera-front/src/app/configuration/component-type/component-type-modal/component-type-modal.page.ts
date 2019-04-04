import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavParams } from '@ionic/angular';
import { ComponentType } from '@entities/component-type.entity';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-component-type-modal',
  templateUrl: './component-type-modal.page.html',
  styleUrls: ['./component-type-modal.page.scss'],
})
export class ComponentTypeModalPage implements OnInit {

  componentType: ComponentType;
  isEdit = false;

  constructor(private alertController: AlertController,
    private navParams: NavParams,
    private modalController: ModalController, ) { }

  ngOnInit() {
    this.isEdit = false;
    this.componentType = new ComponentType();
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
    fetch(`http://${environment.db.host}:${environment.db.port}/component-type/`, {
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

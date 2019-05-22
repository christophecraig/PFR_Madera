import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavParams } from '@ionic/angular';
import { Unit } from '@entities/unit.entity';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-unit-modal',
  templateUrl: './unit-modal.page.html',
  styleUrls: ['./unit-modal.page.scss'],
})
export class UnitModalPage implements OnInit {

  unit: Unit;
  isEdit = false;

  constructor(private alertController: AlertController,
    private navParams: NavParams,
    private modalController: ModalController, ) { }

  ngOnInit() {
    this.isEdit = false;
    this.unit = new Unit();
    if (this.navParams.data && this.navParams.data.id) {
      Object.keys(this.navParams.data).forEach(key => {
        this.unit[key] = this.navParams.data[key];
      });
      this.isEdit = true;
      return true;
    }
  }

  dismiss() {
    this.modalController.dismiss();
  }

  clear(field) {
    this.unit[field] = null;
  }

  async onSubmit() {
    console.log('submitting...');
    fetch(`//${environment.db.host}:${environment.db.port}/unit/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.unit)
    }).then(response => {
      response.json().then(async data => {
        console.log(data);
        await this.modalController.dismiss();
      });
    });
  }
}

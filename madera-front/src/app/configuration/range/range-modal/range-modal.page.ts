import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavParams } from '@ionic/angular';
import { Range } from '@entities/range.entity';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-range-modal',
  templateUrl: './range-modal.page.html',
  styleUrls: ['./range-modal.page.scss'],
})
export class RangeModalPage implements OnInit {

  range: Range;
  isEdit = false;

  constructor(private alertController: AlertController,
    private navParams: NavParams,
    private modalController: ModalController, ) { }

  ngOnInit() {
    this.isEdit = false;
    this.range = new Range();
    if (this.navParams.data && this.navParams.data.id) {
      Object.keys(this.navParams.data).forEach(key => {
        this.range[key] = this.navParams.data[key];
      });
      this.isEdit = true;
      return true;
    }
  }

  dismiss() {
    this.modalController.dismiss();
  }

  clear(field) {
    this.range[field] = null;
  }

  async onSubmit() {
    console.log('submitting...');
    fetch(`//${environment.db.host}:${environment.db.port}/range/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.range)
    }).then(response => {
      response.json().then(async data => {
        console.log(data);
        await this.modalController.dismiss();
      });
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavParams } from '@ionic/angular';
import { Cover } from '@entities/cover.entity';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cover-modal',
  templateUrl: './cover-modal.page.html',
  styleUrls: ['./cover-modal.page.scss'],
})
export class CoverModalPage implements OnInit {

  cover: Cover;
  isEdit = false;

  constructor(private alertController: AlertController,
    private navParams: NavParams,
    private modalController: ModalController, ) { }

  ngOnInit() {
    this.isEdit = false;
    this.cover = new Cover();
    if (this.navParams.data && this.navParams.data.id) {
      Object.keys(this.navParams.data).forEach(key => {
        this.cover[key] = this.navParams.data[key];
      });
      this.isEdit = true;
      return true;
    }
  }

  dismiss() {
    this.modalController.dismiss();
  }

  clear(field) {
    this.cover[field] = null;
  }

  async onSubmit() {
    console.log('submitting...');
    fetch(`//${environment.db.host}:${environment.db.port}/cover/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.cover)
    }).then(response => {
      response.json().then(async data => {
        console.log(data);
        await this.modalController.dismiss();
      });
    });
  }
}

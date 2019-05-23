import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavParams } from '@ionic/angular';
import { Step } from '@entities/step.entity';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-step-modal',
  templateUrl: './step-modal.page.html',
  styleUrls: ['./step-modal.page.scss'],
})
export class StepModalPage implements OnInit {

  step: Step;
  isEdit = false;

  constructor(private alertController: AlertController,
    private navParams: NavParams,
    private modalController: ModalController, ) { }

  ngOnInit() {
    this.isEdit = false;
    this.step = new Step();
    if (this.navParams.data && this.navParams.data.id) {
      Object.keys(this.navParams.data).forEach(key => {
        this.step[key] = this.navParams.data[key];
      });
      this.isEdit = true;
      return true;
    }
  }

  dismiss() {
    this.modalController.dismiss();
  }

  clear(field) {
    this.step[field] = null;
  }

  async onSubmit() {
    console.log('submitting...');
    fetch(`//${environment.db.host}:${environment.db.port}/step/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.step)
    }).then(response => {
      response.json().then(async data => {
        console.log(data);
        await this.modalController.dismiss();
      });
    });
  }
}

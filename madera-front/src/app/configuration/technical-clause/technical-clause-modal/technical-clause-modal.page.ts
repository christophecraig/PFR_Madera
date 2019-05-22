import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavParams } from '@ionic/angular';
import { TechnicalClause } from '@entities/technical-clause.entity';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-technical-clause-modal',
  templateUrl: './technical-clause-modal.page.html',
  styleUrls: ['./technical-clause-modal.page.scss'],
})
export class TechnicalClauseModalPage implements OnInit {

  technicalClause: TechnicalClause;
  isEdit = false;

  constructor(private alertController: AlertController,
    private navParams: NavParams,
    private modalController: ModalController, ) { }

  ngOnInit() {
    this.isEdit = false;
    this.technicalClause = new TechnicalClause();
    if (this.navParams.data && this.navParams.data.id) {
      Object.keys(this.navParams.data).forEach(key => {
        this.technicalClause[key] = this.navParams.data[key];
      });
      this.isEdit = true;
      return true;
    }
  }

  dismiss() {
    this.modalController.dismiss();
  }

  clear(field) {
    this.technicalClause[field] = null;
  }

  async onSubmit() {
    console.log('submitting...');
    fetch(`//${environment.db.host}:${environment.db.port}/technical-clause/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.technicalClause)
    }).then(response => {
      response.json().then(async data => {
        console.log(data);
        await this.modalController.dismiss();
      });
    });
  }
}

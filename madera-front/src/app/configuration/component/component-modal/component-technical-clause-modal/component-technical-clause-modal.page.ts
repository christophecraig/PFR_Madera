import { Component as NgComponent, OnInit } from '@angular/core';
import { TechnicalClause } from '@entities/technical-clause.entity';
import { environment } from 'src/environments/environment';
import { Component } from '@entities/component.entity';
import { NavParams, ModalController } from '@ionic/angular';

@NgComponent({
  selector: 'app-component-technical-clause-modal',
  templateUrl: './component-technical-clause-modal.page.html',
  styleUrls: ['./component-technical-clause-modal.page.scss'],
})
export class ComponentTechnicalClauseModalPage implements OnInit {

  component: Component;
  technicalClauses: TechnicalClause[];

  constructor(
    private navParams: NavParams,
    private modalController: ModalController,
  ) { }

  ngOnInit() {
    this.component = new Component();
    if (this.navParams.data && this.navParams.data.id) {
      Object.keys(this.navParams.data).forEach(key => {
        this.component[key] = this.navParams.data[key];
      });
    }
    fetch(`//${environment.db.host}:${environment.db.port}/technical-clause`).then(response => {
      response.json().then(data => {
        console.log(data);
        this.technicalClauses = data;
      });
    });
  }

  dismiss() {
    this.modalController.dismiss();
  }

  updateTechnicalClauses() {
    fetch(`//${environment.db.host}:${environment.db.port}/component/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.component)
    }).then(response => {
      response.json().then(async data => {
        console.log(data);
        await this.modalController.dismiss(this.component);
      });
    });
  }

  updateTechnicalClause(event) {
    console.debug(event);
    if (event.detail.checked) {
      this.component.technicalClauses.push(event.detail.value);
    } else {
      this.component.technicalClauses = this.component.technicalClauses.filter(technicalClause => {
        return technicalClause.id !== event.detail.value.id;
      });
    }
  }

  isChecked(technicalClause: TechnicalClause): boolean {
    let state = false;
    if (this.component.technicalClauses) {
      this.component.technicalClauses.forEach(checkedTechnicalClause => {
        if (checkedTechnicalClause.id === technicalClause.id) {
          state = true;
        }
      });
    }
    return state;
  }


}

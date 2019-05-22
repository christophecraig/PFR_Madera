import { Component as NgComponent, OnInit } from '@angular/core';
import { AlertController, ModalController, NavParams } from '@ionic/angular';
import { Component } from '@entities/component.entity';
import { environment } from 'src/environments/environment';
import { ComponentType } from '@entities/component-type.entity';
import { Provider } from '@entities/provider.entity';
import { Specification } from '@entities/specification.entity';
import { Unit } from '@entities/unit.entity';
import { ComponentTechnicalClauseModalPage } from './component-technical-clause-modal/component-technical-clause-modal.page';
import { OverlayEventDetail } from '@ionic/core';

@NgComponent({
  selector: 'app-component-modal',
  templateUrl: './component-modal.page.html',
  styleUrls: ['./component-modal.page.scss'],
})
export class ComponentModalPage implements OnInit {


  component: Component;
  componentTypes: ComponentType[];
  providers: Provider[];
  specifications: Specification[];
  units: Unit[];
  isEdit = false;

  constructor(private alertController: AlertController,
    private navParams: NavParams,
    private modalController: ModalController, ) { }

  ngOnInit() {
    this.isEdit = false;
    this.component = new Component();
    if (this.navParams.data && this.navParams.data.id) {
      Object.keys(this.navParams.data).forEach(key => {
        this.component[key] = this.navParams.data[key];
      });
      this.isEdit = true;
    }
    fetch(`//${environment.db.host}:${environment.db.port}/component-type`).then(response => {
      response.json().then(data => {
        console.log(data);
        this.componentTypes = data;
      });
    });
    fetch(`//${environment.db.host}:${environment.db.port}/provider`).then(response => {
      response.json().then(data => {
        console.log(data);
        this.providers = data;
      });
    });
    fetch(`//${environment.db.host}:${environment.db.port}/specification`).then(response => {
      response.json().then(data => {
        console.log(data);
        this.specifications = data;
      });
    });
    fetch(`//${environment.db.host}:${environment.db.port}/unit`).then(response => {
      response.json().then(data => {
        console.log(data);
        this.units = data;
      });
    });
  }

  dismiss() {
    this.modalController.dismiss();
  }

  clear(field) {
    this.component[field] = null;
  }

  compareWith = (o1, o2) => {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

  async onSubmit() {
    console.log('submitting...');
    console.debug(this.component);
    fetch(`//${environment.db.host}:${environment.db.port}/component/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.component)
    }).then(response => {
      response.json().then(async data => {
        console.log(data);
        await this.modalController.dismiss();
      });
    });
  }

  async editTechnicalClauses() {
    const modal = await this.modalController.create({
      component: ComponentTechnicalClauseModalPage,
      componentProps: this.component,
    });
    modal.onDidDismiss().then((response: OverlayEventDetail<Component>) => {
      if (response.data) {
        this.component = response.data;
      }
    });
    return await modal.present();
  }

}

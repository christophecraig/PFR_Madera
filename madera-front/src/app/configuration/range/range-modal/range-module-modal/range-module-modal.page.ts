import { Component as NgComponent, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NavParams, ModalController } from '@ionic/angular';
import { Range } from '@entities/range.entity';
import { Module } from '@entities/module.entity';

@NgComponent({
  selector: 'app-range-module-modal',
  templateUrl: './range-module-modal.page.html',
  styleUrls: ['./range-module-modal.page.scss'],
})
export class RangeModuleModalPage implements OnInit {

  range: Range;
  modules: Module[];

  constructor(
    private navParams: NavParams,
    private modalController: ModalController,
  ) { }

  ngOnInit() {
    this.range = new Range();
    if (this.navParams.data && this.navParams.data.id) {
      Object.keys(this.navParams.data).forEach(key => {
        this.range[key] = this.navParams.data[key];
      });
    }
    fetch(`//${environment.db.host}:${environment.db.port}/module`).then(response => {
      response.json().then(data => {
        console.log(data);
        this.modules = data;
      });
    });
  }

  dismiss() {
    this.modalController.dismiss();
  }

  updateModules() {
    fetch(`//${environment.db.host}:${environment.db.port}/range/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.range)
    }).then(response => {
      response.json().then(async data => {
        console.log(data);
        await this.modalController.dismiss(this.range);
      });
    });
  }

  updateModule(event) {
    console.debug(event);
    if (event.detail.checked) {
      this.range.modules.push(event.detail.value);
    } else {
      this.range.modules = this.range.modules.filter(module => {
        return module.id !== event.detail.value.id;
      });
    }
  }

  isChecked(module: Module): boolean {
    let state = false;
    if (this.range.modules) {
      this.range.modules.forEach(checkedModule => {
        if (checkedModule.id === module.id) {
          state = true;
        }
      });
    }
    return state;
  }


}

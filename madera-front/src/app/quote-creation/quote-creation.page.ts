import { Component, OnInit, ViewChild } from '@angular/core';
import { Quote } from '../models/Quote';
import { IonSlides, IonContent } from '@ionic/angular';
import { Module } from '../models/Module';
import { environment } from '../../environments/environment';
import { Range } from '../models/Range';

@Component({
  selector: 'app-quote-creation',
  templateUrl: './quote-creation.page.html',
  styleUrls: ['./quote-creation.page.scss'],
})
export class QuoteCreationPage implements OnInit {

  @ViewChild(IonContent) content: IonContent;

  quote: Quote = new Quote();

  modules: Module[];

  get debug() { return JSON.stringify(this.quote); }

  sliderOptions = {
    touchRatio: 0
  };

  @ViewChild(IonSlides) slides: IonSlides;

  async rangeChanged(range: Range) {
    console.log(range);
    this.quote.modules = [];
    fetch(`http://${environment.db.host}:${environment.db.port}/ranges/${range.id}/modules`).then(response => {
      response.json().then(data => {
        console.log(data);
        this.modules = data;
      });
    });

  }

  async changeSlide(forward: boolean) {
    await this.content.scrollToPoint(0, 0);
    if (forward) {
      await this.slides.slideNext();
    } else {
      await this.slides.slidePrev();
    }
  }

  constructor() { }

  ngOnInit() {

  }

}

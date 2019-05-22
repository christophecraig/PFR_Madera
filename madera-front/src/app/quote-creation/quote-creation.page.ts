import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, IonContent } from '@ionic/angular';
import { environment } from '../../environments/environment';

import { Quote } from '@entities/quote.entity';
import { Module } from '@entities/module.entity';
import { Range } from '@entities/range.entity';

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
    fetch(`//${environment.db.host}:${environment.db.port}/range/${range.id}`).then(response => {
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

import { Component, OnInit, ViewChild } from '@angular/core';
import { Quote } from '../models/Quote';
import { IonSlides, IonContent } from '@ionic/angular';
import data from '../db/data';

@Component({
  selector: 'app-quote-creation',
  templateUrl: './quote-creation.page.html',
  styleUrls: ['./quote-creation.page.scss'],
})
export class QuoteCreationPage implements OnInit {

  @ViewChild(IonContent) content: IonContent

  quote: Quote = new Quote()
  // quote: Quote = data.quotes[0]

  get debug() { return JSON.stringify(this.quote) }

  sliderOptions = {
    touchRatio: 0
  }

  @ViewChild(IonSlides) slides: IonSlides

  async changeSlide(forward: boolean) {
    await this.content.scrollToPoint(0, 0)
    if (forward) {
      await this.slides.slideNext()
    } else {
      await this.slides.slidePrev()
    }
  }

  constructor() { }

  ngOnInit() {

  }

}

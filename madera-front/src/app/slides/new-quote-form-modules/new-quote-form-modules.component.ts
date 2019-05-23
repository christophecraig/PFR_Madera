import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '@entities/quote.entity';
import { Module } from '@entities/module.entity';

@Component({
  selector: 'new-quote-form-modules',
  templateUrl: './new-quote-form-modules.component.html',
  styleUrls: ['./new-quote-form-modules.component.scss']
})
export class NewQuoteFormModulesComponent implements OnInit {

  @Input() quote: Quote;

  @Output() changeSlide = new EventEmitter<boolean>();

  @Input() modules: Module[];

  getModuleFromId(id: number): Module {
    let m: Module;
    this.modules.forEach(module => {
      if (module.id === id) {
        m = module;
      }
    });
    return m || null;
  }

  constructor() { }

  ngOnInit() { }

  onSubmit(event) {
    this.changeSlide.emit(true);
  }

  checkModule(module: Module): boolean {
    let r = false;
    this.quote.modules.forEach(quoteModule => {
      if (quoteModule.id === module.id) {
        r = true;
      }
    });
    return r;
  }

  removeModule(idModule: number) {
    this.quote.modules = this.quote.modules.filter(e => {
      return e.id !== idModule;
    });
  }

  addModule(idModule: number) {
    this.quote.modules.push(this.getModuleFromId(idModule));
    console.debug(this.quote.modules);
  }

}

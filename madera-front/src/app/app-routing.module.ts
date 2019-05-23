import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'configuration', loadChildren: './configuration/configuration-home/configuration-home.module#ConfigurationHomePageModule' },
  { path: 'devis', loadChildren: './quote-list/quote-list.module#QuoteListPageModule' },

];
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
    // enableTracing: true
  }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

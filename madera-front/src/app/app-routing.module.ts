import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { IsLoggedOutGuard } from './guards/is-logged-out.guard';
import { IsLoggedInGuard } from './guards/is-logged-in.guard';

const routes: Routes = [
  { path: '', loadChildren: './pages/home/home.module#HomePageModule' },
  {
    path: 'configuration', loadChildren: './configuration/configuration-home/configuration-home.module#ConfigurationHomePageModule', canActivate: [
      IsLoggedInGuard
    ]
  },
  {
    path: 'devis', loadChildren: './quote-list/quote-list.module#QuoteListPageModule', canActivate: [
      IsLoggedInGuard
    ]
  },
  {
    path: 'connexion', loadChildren: './auth/login/login.module#LoginModule', canActivate: [
      IsLoggedOutGuard
    ]
  },

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

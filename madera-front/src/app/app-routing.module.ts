import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'creation', loadChildren: './quote-creation/quote-creation.module#QuoteCreationPageModule' },
]
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
    // enableTracing: true
  }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule {}

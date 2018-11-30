import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './quote-creation/quote-creation.module#QuoteCreationPageModule' },
  // { path: 'range', loadChildren: './modals/range/range.module#RangePageModule' },
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

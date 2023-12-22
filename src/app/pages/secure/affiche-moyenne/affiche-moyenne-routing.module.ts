import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AfficheMoyennePage } from './affiche-moyenne.page';

const routes: Routes = [
  {
    path: '',
    component: AfficheMoyennePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AfficheMoyennePageRoutingModule {}

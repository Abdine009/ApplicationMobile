import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEtudiantPage } from './add-etudiant.page';

const routes: Routes = [
  {
    path: '',
    component: AddEtudiantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddEtudiantPageRoutingModule {}

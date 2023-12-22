import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AfficheNoteDetailPage } from './affiche-note-detail.page';

const routes: Routes = [
  {
    path: '',
    component: AfficheNoteDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AfficheNoteDetailPageRoutingModule {}

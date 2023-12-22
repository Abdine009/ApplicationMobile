import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AfficheNotePage } from './affiche-note.page';

const routes: Routes = [
  {
    path: '',
    component: AfficheNotePage
  },
  {
    path: 'add-note',
    loadChildren: () => import('./add-note/add-note.module').then( m => m.AddNotePageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AfficheNotePageRoutingModule {}

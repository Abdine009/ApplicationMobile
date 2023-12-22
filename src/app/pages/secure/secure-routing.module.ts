import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./../../tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsPageModule)
  },
  {
    path: 'settings/profile/edit',
    loadChildren: () => import('./profile/edit/edit.module').then(m => m.EditPageModule)
  },
  {
    path: 'affiche-note/detail/:id',
    loadChildren: () => import('./affiche-note/affiche-note-detail/affiche-note-detail.module').then( m => m.AfficheNoteDetailPageModule)
  },
  {
    path: 'affiche-note',
    loadChildren: () => import('./affiche-note/affiche-note.module').then( m => m.AfficheNotePageModule)
  },
  {
    path: 'affiche-moyenne',
    loadChildren: () => import('./affiche-moyenne/affiche-moyenne.module').then( m => m.AfficheMoyennePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SecureRoutingModule { }

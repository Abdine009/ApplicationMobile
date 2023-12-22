import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AfficheNotePageRoutingModule } from './affiche-note-routing.module';

import { AfficheNotePage } from './affiche-note.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AfficheNotePageRoutingModule
  ],
  declarations: [AfficheNotePage]
})
export class AfficheNotePageModule {}

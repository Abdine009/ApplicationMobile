import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AfficheNoteDetailPageRoutingModule } from './affiche-note-detail-routing.module';

import { AfficheNoteDetailPage } from './affiche-note-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AfficheNoteDetailPageRoutingModule
  ],
  declarations: [AfficheNoteDetailPage]
})
export class AfficheNoteDetailPageModule {}

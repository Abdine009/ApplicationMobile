import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AfficheMoyennePageRoutingModule } from './affiche-moyenne-routing.module';

import { AfficheMoyennePage } from './affiche-moyenne.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AfficheMoyennePageRoutingModule
  ],
  declarations: [AfficheMoyennePage]
})
export class AfficheMoyennePageModule {}

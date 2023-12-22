import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEtudiantPageRoutingModule } from './add-etudiant-routing.module';

import { AddEtudiantPage } from './add-etudiant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddEtudiantPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddEtudiantPage]
})
export class AddEtudiantPageModule {}

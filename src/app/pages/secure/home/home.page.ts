import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../../../tabs/etudiant.model';
import { EtudiantService } from './etudiant.service';
import { AlertController, NavController } from '@ionic/angular';
import { Note } from '../affiche-note/note.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  etudiants: Etudiant[] = [];
  notes: Note[] = [];

  content_loaded: boolean = false;

  constructor(
    private etudiantService: EtudiantService,
    private navCtrl: NavController,
    private alertController: AlertController
  ) { }

  ngOnInit() {

    // Fake timeout
    setTimeout(() => {
      this.content_loaded = true;
    }, 2000);
  }

  ionViewDidEnter() {
    this.getEtudiants();
  }

  getEtudiants() {
    this.etudiants = this.etudiantService.get();
  }

async supprimerEtudiant(etudiantId: number) {
    const alert = await this.alertController.create({
      header: 'Confirmer la suppression',
      message: 'Êtes-vous sûr de vouloir supprimer cet étudiant ?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Supprimer',
          handler: async () => {
            // Appel de votre service pour supprimer l'étudiant
            this.etudiantService.supprimer(etudiantId);
            // Rechargez la liste des étudiants après la suppression
            this.getEtudiants();
          },
        },
      ],
    });
    await alert.present();
  }


  modifierEtudiant(etudiantId: number) {
    // Récupérer l'étudiant par ID
    const etudiant = this.etudiantService.getEtudiantById(etudiantId);

    // Naviguer vers la page de modification avec les détails de l'étudiant
    this.navCtrl.navigateForward(['/modification-etudiant', etudiant]);
  }

}


import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EtudiantService } from '../etudiant.service';
import { NavController } from '@ionic/angular';
import { Etudiant } from '../../../../tabs/etudiant.model';

@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.page.html',
  styleUrls: ['./add-etudiant.page.scss'],
})
export class AddEtudiantPage implements OnInit {

  title = 'Nouveau étudiant';
  btnTitle = 'Ajouter étudiant';

  etudiantForm = this.fb.group({
    etudiantNom: ['', [Validators.required]],
    etudiantPrenom: ['', [Validators.required]],
    etudiantClasse: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private etudiantService: EtudiantService,
    private navCtrl: NavController,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    if(!id) {
    }

    const localEtudiant = this.etudiantService.getOne(+id);
    this.etudiantForm.patchValue({...localEtudiant});

  }

  addEtudiant() {
    if(this.etudiantForm.valid) {
      const newEtudiant: Etudiant = {
        id: this.etudiantService.getLastIdEtudiant(),
        etudiantNom: this.etudiantForm.get('etudiantNom')?.value || '',
        etudiantPrenom: this.etudiantForm.get('etudiantPrenom')?.value || '',
        etudiantClasse: this.etudiantForm.get('etudiantClasse')?.value || '',
      };

      this.etudiantService.addEtudiant(newEtudiant);
      this.navCtrl.navigateRoot('/home');
    }
  }
}



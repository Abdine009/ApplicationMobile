import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NoteService } from '../affiche-note-detail/note.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Note } from '../note.model';
import { Etudiant } from 'src/app/tabs/etudiant.model';
import { EtudiantService } from '../../home/etudiant.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.page.html',
  styleUrls: ['./add-note.page.scss'],
})
export class AddNotePage implements OnInit {

  semestres: string[] = [];
  selectedSemestre = '';

  etudiants: Etudiant;
  notes: Note[] = [];
  id!: number;
  title = 'Nouvelle note';
  btnTitle = 'Ajouter note';
  content_loaded: boolean = false;

  noteForm = this.fb.group({

    matiere: ['', [Validators.required]],
    note: [0, [Validators.required]],
    coeficient: [1, [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private noteService: NoteService,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private etudiantService: EtudiantService
    ) { }

  ngOnInit() {

    this.route.paramMap.subscribe(param =>{
      if(param.get('id')){
        this.id = +param.get('id')!;
      }
    });

    this.etudiants = this.etudiantService.getEtudiantById(this.id);
    //console.log(this.etudiants);

    this.getSemestres();
  }

  getSemestres() {
    // Récupérer toutes les notes pour obtenir les semestres uniques
    const allNotes = this.noteService.getNote();
    // Extraire les semestres uniques
    this.semestres = Array.from(new Set(allNotes.map(note => note.semestre)));
  }

  addNote() {
    if(this.noteForm.valid) {
      const semestreValue = this.noteForm.get('semestre')?.value;
      const newNote: Note = {
        id: this.noteService.getLastIdNote(),
        semestre: semestreValue || 'semestre 1',
        matiere: this.noteForm.get('matiere')?.value || '',
        note: this.noteForm.get('note')?.value || 1,
        coeficient: this.noteForm.get('coeficient')?.value || 1,
        etudiant:{
          id : this.etudiants.id,
          etudiantNom: this.etudiants.etudiantNom,
          etudiantPrenom: this.etudiants.etudiantPrenom,
          etudiantClasse: this.etudiants.etudiantClasse,
        }
      };
      //console.log(newNote);
      this.noteService.addVet(newNote);
      // this.navCtrl.navigateRoot('/affiche-note/detail/' + this.id);
      // setTimeout(() => {
         window.history.back();
      //   window.location.reload();
      // }, 2000);
      setTimeout(()=>{
        window.location.reload();
      },1000);
    }
  }
}
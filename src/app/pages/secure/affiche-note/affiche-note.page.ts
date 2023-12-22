import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet, ModalController, NavController } from '@ionic/angular';
import { Etudiant } from 'src/app/tabs/etudiant.model';
import { EtudiantService } from '../home/etudiant.service';
import { Note } from './note.model';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from './affiche-note-detail/note.service';
import { AfficheNoteDetailPage } from './affiche-note-detail/affiche-note-detail.page';

@Component({
  selector: 'app-affiche-note',
  templateUrl: './affiche-note.page.html',
  styleUrls: ['./affiche-note.page.scss'],
})
export class AfficheNotePage implements OnInit {
  etudiants: Etudiant[] = [];
  pondere: number[] = [];
  coeficient: number[] = [];
  sommePondere: number[] = [];
  sommeCoeficient: number[] = [];
  moyennesEtudiant: number[] = [];
  idEtudiant: number[] = [];
  notes: Note[] = [];
  id!: number;
  content_loaded: boolean = false;


  constructor(
    private route: ActivatedRoute,
    private note: NoteService,
    private routerOutlet: IonRouterOutlet,
    private modalController: ModalController,
    private etudiantService: EtudiantService,
    private navCtrl: NavController,

  ) {}

  ngOnInit() {
    this.etudiants = this.etudiantService.get();
    this.etudiants.forEach((v: Etudiant)=>{
    this.idEtudiant.push(v.id);
  });

    this.getmoyenne(this.idEtudiant);
    console.log(this.moyennesEtudiant);
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

  getmoyenne(id: number[] ) {
    let sommePondere;
    let sommeCoefficient;
   id.forEach((v: number)=>
   {
    this.notes = this.note.getNoteByEtudiant(v);
    try{
      this.notes.forEach((abi: Note)=>
      {
    this.pondere.push(abi.note * abi.coeficient);
    this.coeficient.push(abi.coeficient);
      });
      sommePondere = this.pondere.reduce((acc, element,)=> acc + element,0);
      sommeCoefficient = this.coeficient.reduce((acc, element,)=> acc + element,0);
      this.moyennesEtudiant.push(Number((sommePondere / sommeCoefficient).toFixed(2)));
    }catch(error){
      console.log("Erreur de lecture...");
    }

   });


  }

}

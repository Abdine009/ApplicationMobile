import { Component, OnInit } from '@angular/core';
import { Note } from '../note.model';
import { NoteService } from './note.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Etudiant } from 'src/app/tabs/etudiant.model';

@Component({
  selector: 'app-affiche-note-detail',
  templateUrl: './affiche-note-detail.page.html',
  styleUrls: ['./affiche-note-detail.page.scss'],
})
export class AfficheNoteDetailPage implements OnInit {
  notes: any= [] ;
  etudiants: Etudiant[] = [];
  pondere: number[] = [];
  coeficient: number[] = [];
  sommePondere: number[] = [];
  sommeCoeficient: number[] = [];
  moyennesEtudiant: number;
  id!: number;

  content_loaded: boolean = false;

  constructor(
    private noteService: NoteService,
    private navCtrl: NavController,
    private route: ActivatedRoute,
  ) { }

  async ngOnInit() {

    this.route.paramMap.subscribe(param =>{
      if(param.get('id')){
        this.id = +param.get('id')!;
      }
    });

    this.notes = await this.noteService.getByEtudiant(this.id);
    console.log(this.notes);
    this.moyennesEtudiant = this.getmoyenne();

    console.log(this.notes);
    // Fake timeout
    setTimeout(() => {
      this.content_loaded = true;
    }, 2000);
  }

  // ionViewDidEnter() {
  //   this.getNote();
  // }

  navToStudent() {
    this.navCtrl.navigateForward(`/add-note/${this.id}`);
  }

  getmoyenne() {
    let sommePondere;
    let sommeCoefficient;

    try{
      this.notes.forEach((abi: Note)=>
      {
    this.pondere.push(abi.note * abi.coeficient);
    this.coeficient.push(  Number(abi.coeficient  ));
      });
      sommePondere = this.pondere.reduce((acc, element)=> acc + element,0);
      sommeCoefficient = this.coeficient.reduce((acc, element)=> acc + element,0);
      console.log(sommePondere);
      console.log(sommeCoefficient);
      return(Number((sommePondere / sommeCoefficient).toFixed(2)));
    }catch(error){
      console.log("Erreur de lecture...");
    }
  }

  getNote() {
    this.notes = this.noteService.getNot();
  }

}

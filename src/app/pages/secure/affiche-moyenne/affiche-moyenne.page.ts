import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NoteService } from '../affiche-note/affiche-note-detail/note.service';
import { Note } from '../affiche-note/note.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-affiche-moyenne',
  templateUrl: './affiche-moyenne.page.html',
  styleUrls: ['./affiche-moyenne.page.scss'],
})
export class AfficheMoyennePage implements OnInit {
  semestre: string[] =[];
  notes: Note[] = [];

  id!: number;

  content_loaded: boolean = false;

  constructor(
    private noteService: NoteService,
    private navCtrl: NavController,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {

    this.route.paramMap.subscribe(param =>{
      if(param.get('id')){
        this.id = +param.get('id')!;
      }
    });

    this.notes = this.noteService.getNoteByEtudiant(this.id);
    console.log(this.notes);
    // Fake timeout
    setTimeout(() => {
      this.content_loaded = true;
    }, 2000);

  
  }



  // ionViewDidEnter() {
  //   this.getNote();
  // }

  getNote() {
    this.notes = this.noteService.getNote();
  }
}

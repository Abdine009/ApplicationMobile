import { Injectable, OnInit } from '@angular/core';
import { Note } from '../note.model';
import { Storage } from '@ionic/storage-angular';

const item = 'my-key';
@Injectable({
  providedIn: 'root'
})
export class NoteService {
  [x: string]: any;
  notes: Note[] = [];
  // notes: Note[]=[
  //   {
  //     id: 1,
  //     semestre: 'semestre 1',
  //     matiere:'App pour smartphone',
  //     note: 13,
  //     coeficient: 1,
  //     etudiant:{
  //       id: 1,
  //       etudiantNom: 'BOUDA',
  //       etudiantPrenom: 'Patricia',
  //       etudiantClasse: 'IC3'
  //     }
  //   },
  //   {
  //     id: 2,
  //     semestre: 'semestre 1',
  //     matiere:'App pour smartphone',
  //     note: 16,
  //     coeficient: 1,
  //     etudiant:{
  //       id: 2,
  //       etudiantNom: 'KOUMBIA',
  //       etudiantPrenom: 'Abdine',
  //       etudiantClasse: 'IC3'
  //     }
  //   },
  //   {
  //     id: 3,
  //     semestre: 'semestre 1',
  //     matiere:'App pour smartphone',
  //     note: 10,
  //     coeficient: 1,
  //     etudiant:{
  //       id: 3,
  //       etudiantNom: 'SAWADOGO',
  //       etudiantPrenom: 'Abigaelle',
  //       etudiantClasse: 'IC3'
  //     }
  //   },

  // ];

  constructor(
    private storage: Storage,
  ) {this.OnInit();}

  OnInit(){
    this.storage.create();
  }

  addVet(n: Note): Promise<any>{
    return this.storage.get(item).then((not: Note[]) =>{
  if(not){
  // n.id = this.idMax;
  not.push(n);
  console.log('ici');
  return this.storage.set(item, not);

}else{
  console.log('ici2');
  return this.storage.set(item, [n]);

}
    });
}


getNot() {
let tmp = this.storage.get(item);
return tmp;
}

  getNote(): Note[]{
    return this.notes;
  }

  addNote(note: Note) {
    this.notes.push(note);
    let tmp= this.getNoteByEtudiant(note.etudiant.id);
    console.log(tmp);
  }
  getOne(id: number) {
    return this.notes.find(st => st.id === id);
  }
  getNoteByEtudiant(id: number) {
    // eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-shadow
    const Note = this.notes.filter(value => value.etudiant.id === id);
    return Note;
  }
  // parcourir la liste des id et faire id+1
  getLastIdNote(): number{
    let idMAx = 0;
    this.notes.forEach(book =>{
      if(book.id && book.id > idMAx){
        idMAx = book.id;
      }
    });
    return idMAx +1;
  }


getByEtudiant(id: number){
  return this.storage.get(item).then((not: Note[]) =>{
    if(!not || not.length ===0){
      return null;
    }
    let keep: Note[];
    for(let n of not){
      if(n.etudiant.id === id){
        keep=not.filter(value => value.etudiant.id === id);
      }
    }
    return keep;
});
}

getId(): Promise<any>{
  return this.storage.get(item).then((not: Note[]) =>{
    if(!not || not.length ===0){
      window.location.reload();
      console.log(this.idMax);
      return this.idMax;

    }else{
      for(let i of not){
        if(i.id >= this.idMax){
          this.idMax = i.id + 1;
          console.log(this.idMax);
          window.location.reload();
          return this.idMax;
        }
      }
    }

  });

}


getMoyennesByEtudiant(id: number) {
  const notesByEtudiant = this.getNoteByEtudiant(id);

  // Regrouper les notes par semestre
  const notesBySemestre: { [key: string]: Note[] } = {};
  notesByEtudiant.forEach(note => {
    if (!notesBySemestre[note.semestre]) {
      notesBySemestre[note.semestre] = [];
    }
    notesBySemestre[note.semestre].push(note);
  });

  // Calculer la moyenne par semestre
  const moyennesParSemestre: { [key: string]: number } = {};
  Object.keys(notesBySemestre).forEach(semestre => {
    const totalNotes = notesBySemestre[semestre].reduce((sum, note) => sum + note.note * note.coeficient, 0);
    const totalCoefs = notesBySemestre[semestre].reduce((sum, note) => sum + note.coeficient, 0);
    moyennesParSemestre[semestre] = totalCoefs !== 0 ? totalNotes / totalCoefs : 0;
  });

  // Calculer la moyenne générale
  const totalNotesGenerale = notesByEtudiant.reduce((sum, note) => sum + note.note * note.coeficient, 0);
  const totalCoefsGenerale = notesByEtudiant.reduce((sum, note) => sum + note.coeficient, 0);
  const moyenneGenerale = totalCoefsGenerale !== 0 ? totalNotesGenerale / totalCoefsGenerale : 0;

  return { moyennesParSemestre, moyenneGenerale };
}

}

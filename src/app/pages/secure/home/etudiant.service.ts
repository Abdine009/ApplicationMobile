import { Injectable, OnInit } from '@angular/core';
import { Etudiant } from '../../../tabs/etudiant.model';
import { Storage } from '@ionic/storage-angular';

const items = 'my-keys';
@Injectable({
  providedIn: 'root'
})
export class EtudiantService{

  etudiants: Etudiant[] = [
    {
      id: 1,
      etudiantNom: 'BOUDA',
      etudiantPrenom: 'Patricia',
      etudiantClasse: 'IC3'
    },
    {
      id: 2,
      etudiantNom: 'KOUMBIA',
      etudiantPrenom: 'Abdine',
      etudiantClasse: 'IC3'
    },
    {
      id: 3,
      etudiantNom: 'SAWADOGO',
      etudiantPrenom: 'Abigaelle',
      etudiantClasse: 'IC3'
    }
  ];
  idMax: any;

  constructor(
    private storage: Storage,
  ) { this.OnInit();}

  OnInit(){
    this.storage.create();
  }

  addVet(e: Etudiant): Promise<any>{
    return this.storage.get(items).then((etu: Etudiant[]) =>{
if(etu){
  // n.id = this.idMax;
  etu.push(e);
  console.log('ici');
  return this.storage.set(items, etu);

}else{
  console.log('ici2');
  return this.storage.set(items, [e]);

}
    });
}


getEtu() {
  let tmp = this.storage.get(items);
  return tmp;
  }


  get(): Etudiant[] {
    return this.etudiants;
  }

  addEtudiant(etudiant: Etudiant) {
    this.etudiants.unshift(etudiant);
  }

  getOne(id: number) {
    return this.etudiants.find(st => st.id === id);
  }

  getId(): Promise<any>{
    return this.storage.get(items).then((etu: Etudiant[]) =>{
      if(!etu || etu.length ===0){
        window.location.reload();
        console.log(this.idMax);
        return this.idMax;

      }else{
        for(let b of etu){
          if(b.id >= this.idMax){
            this.idMax = b.id + 1;
            console.log(this.idMax);
            window.location.reload();
            return this.idMax;
          }
        }
      }

    });

  }

  // Ajoutez la méthode de suppression
  supprimer(id: number) {
    const index = this.etudiants.findIndex(etudiant => etudiant.id === id);
    if (index !== -1) {
      this.etudiants.splice(index, 1);
    }
  }

  getEtudiantById(id: number) {
    return this.etudiants.find(etudiant => etudiant.id === id);
  }

// parcourir la liste des id et faire id+1
  getLastIdEtudiant(): number{
    let idMAx = 0;
    this.etudiants.forEach(book =>{
      if(book.id && book.id > idMAx){
        idMAx = book.id;
      }
    });
    return idMAx +1;
  }

//      getEtudiantById(id: number) {
//     // eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-shadow
//     const Etudiant = this.etudiants.filter(value => value.note.id === id);
//     return Etudiant;
// }
}
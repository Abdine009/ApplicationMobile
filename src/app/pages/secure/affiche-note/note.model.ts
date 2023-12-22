import { Etudiant } from 'src/app/tabs/etudiant.model';


export interface  Note{
    id: number;
    etudiant: Etudiant;
    semestre: string;
    matiere: string;
    note: number;
    coeficient: number;
  }

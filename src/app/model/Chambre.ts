import {Bloc} from "./Bloc";
import {Reservation} from "./Reservation";

export enum TypeChambre {
  DOUBLE = 'DOUBLE',
  SIMPLE = 'SIMPLE',
  TRIPLE = 'TRIPLE',
}

export class Chambre {

    idChambre!: number;
    numeroChambre?: number;
   typeChambre?: TypeChambre ;
    bloc?: Bloc;
    //reservation?: Reservation;

    constructor(idChambre: number, numeroChambre: number, typeChambre: TypeChambre, bloc :Bloc ) {
        this.idChambre = idChambre;
        this.numeroChambre = numeroChambre;
        this.typeChambre = typeChambre;
        this.bloc=bloc;
       // this.reservation = reservation ;
    }
}

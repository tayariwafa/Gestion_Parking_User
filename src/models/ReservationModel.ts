import { ParkingModel } from "./ParkingModel";

export class ReservationModel{

    id : number = 0;
    ModePaiement : string = "";  
    Montant_carte  : string = "500"; 
    Montant_espece : string = "500"; 
    MontantPay : string= "500"; 
    Surplus : string = ""; 
    DateDeb : string ;
    DateFin : string ;
    HeurDeb : string ;
    HeurFin : string ;
    Id_Gard : number = 0;
    Id_ut : number ;
    Id_voiture : number ;
    Id_place: number = 0;
    Id_park: number ; 
    constructor(){}
}
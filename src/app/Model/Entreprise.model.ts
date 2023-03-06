import { Offre } from "./Offre.model";

export class Entreprise{
    constructor(
        public id?:number,
        public img?:String ,
        public nom?:String ,
        public adr?:String,
        public tel?:String,
        public email?:String,
        public mdp?:String,
        public offre:Offre[]=[]
        
    ){

    }
}
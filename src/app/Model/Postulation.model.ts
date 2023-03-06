import { Formateur } from "./Formateur.model";
import { Offre } from "./Offre.model";

export class Postulation{
    constructor(
       public id?:number,
       public cv?:String,
    //    public offre?:Offre,
    //    public formateur?:Formateur
    ){}
}
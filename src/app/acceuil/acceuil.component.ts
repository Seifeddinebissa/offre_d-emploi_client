import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Offre } from '../Model/Offre.model';
import { CrudService } from '../Service/crud.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
  liste : Offre[]=[]
  liste2 : Offre[]=[]
  liste3: Offre[]=[]
  nbrOffre:number=0
 page:number=1
  token:any
  user:any
  total:number=0
  constructor(
    private service:CrudService,
    private route:Router,
    private toast:NgToastService
  ) { }

  ngOnInit(): void {
    this.user=localStorage.getItem("user")
    this.service.getOffre().subscribe(offre=>{
      this.liste=offre
      this.nbrOffre=offre.length
      console.log(this.nbrOffre)
      this.total=this.liste2.length
      
      this.liste2=this.liste.filter(offre=>offre.etat==true)
      this.liste3=this.liste2
     
    })
  }
  postuler(){
    this.token=localStorage.getItem("mytoken");
    if(this.token==null)
    {
     this.route.navigate(["/loginFormateur"]);
     this.toast.info({
     detail:'error msg !!',
     summary:'Veuillez Connecter Pour Postuler !!'
   });
 }else{if(this.user=="formateur")
 {
   this.route.navigate(["/postulation"]);
 }}
     
   }
 
 
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Offre } from '../Model/Offre.model';
import { CrudService } from '../Service/crud.service';

@Component({
  selector: 'app-vosoffre',
  templateUrl: './vosoffre.component.html',
  styleUrls: ['./vosoffre.component.css']
})
export class VosoffreComponent implements OnInit {

  nbrOffre:number=0
  total:number=0
  page :number=1
  liste : Offre[]=[]
  liste2 : Offre[]=[]
  liste3 : Offre[]=[]
  token:any
  user:any
  titre:any
  constructor(
    private service:CrudService,
    private route:Router,
    private toast:NgToastService
  ) { }
  supprimerOffre(offre:Offre){
    if (confirm("voulez-vous supprimer cet Offre ?"))
    {
      this.service.deleteOffre(offre.id).subscribe(()=>{
        this.route.navigate(["/listeoffre"]).then(()=>{
          window.location.reload()
        })
      })
    }
  }
  Search(){
    if(this.titre !=""){
      this.liste2= this.liste2.filter(res =>{return res.titre!.toLocaleLowerCase().match(this.titre.toLocaleLowerCase());});   
    }else{
      this.liste2=this.liste3
    }
  }
  ngOnInit(): void {
    this.user=localStorage.getItem("user")
    this.service.getEntrepriseById(this.service.userDetail().idE).subscribe(entreprise=>{
      this.liste=entreprise.offre
      this.nbrOffre=entreprise.offre.length
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


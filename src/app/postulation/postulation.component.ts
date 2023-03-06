import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Postulation } from '../Model/Postulation.model';
import { CrudService } from '../Service/crud.service';

@Component({
  selector: 'app-postulation',
  templateUrl: './postulation.component.html',
  styleUrls: ['./postulation.component.css']
})
export class PostulationComponent implements OnInit {
 user:any
 currentuser:any
 userFile:any
 message?:String
//  RQ= new Postulation();
//  imgURL:String|ArrayBuffer={}
imgURL:any
 imagePath:any
 offreId:any
  constructor(  
    private service: CrudService,
    private router: Router,
    private fb: FormBuilder,
    private rout:ActivatedRoute,
    private toast:NgToastService) { }

  ngOnInit(): void {
    this.user=localStorage.getItem("user")
    this.currentuser=this.service.userDetail()
    this.offreId=this.rout.snapshot.params['id']
  }
  postulation(){
    this.message=`<div class="alert alert-primary" role="alert">en cours de télechargement ...</div>`
    if(this.imgURL!=undefined)
    {
      let RQ:any={} 
      RQ.idOffre=this.offreId
      RQ.idFormateur=Number(localStorage.getItem("mytoken"))
      RQ.cv=this.imgURL
      this.service.addpostulation(RQ).subscribe((data)=>{
        this.message=`<div class="alert alert-succes" role="alert">Ajouter avec succée ...</div>`;
        this.rediract();
      },
      err=>{
        this.message=`<div class="alert alert-danger" role="alert"> echec d'ajout </div>`;
        this.rediract();
      })
    }

  }
rediract(){
  setTimeout(()=>{
    this.message=""
    this.router.navigate(["/listeoffre"])
  },3000)
}
OnSelectFile(event:any){
  if(event.target.files.length>0){
    const file=event.target.files[0];
    this.userFile=file;
    var mimeType=event.target.files[0].type;
    var reader=new FileReader();
    this.imagePath=file;
    reader.readAsDataURL(file)
    reader.onload=(_event)=>{
      this.imgURL=reader.result;
      console.log(this.imgURL)
    };
  }

}
}

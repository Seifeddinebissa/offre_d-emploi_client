import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Formateur } from '../Model/Formateur.model';
import { CrudService } from '../Service/crud.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-modifierformateur',
  templateUrl: './modifierformateur.component.html',
  styleUrls: ['./modifierformateur.component.css']
})
export class ModifierformateurComponent implements OnInit {

  id: any;
  currentFormateur=new Formateur()
  user:any;
  userFile:any
  message?:String
  imgURL:any
  imagePath:any
   constructor(
      private service: CrudService,
     private router: Router,
     private fb: FormBuilder,
     private toast:NgToastService,
     private rout:ActivatedRoute)
      { 
      
     }
     onSelectFile(event: any) {
      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        this.userFile = file;
    
  
        var mimeType = event.target.files[0].type;
        if (mimeType.match(/image\/*/) == null) {
          this.message = 'Sauf les images sont acceptés.';
          return;
        }
  
        var reader = new FileReader();
  
        this.imagePath = file;
        reader.readAsDataURL(file);
        reader.onload = (_event) => {
          this.imgURL = reader.result;
          this.user.img=this.imgURL
        };
      }
    }
     
    modifierFormateur(){
     this.id=this.rout.snapshot.params["id"];
     console.log(this.id);
     this.service.updateFormateur(this.id,this.user).subscribe(Formateur=>{
       this.router.navigate(["/profile"]).then(()=>{
         window.location.reload();
       })
   
       
     })
    }
   
   ngOnInit(): void {
     this.service.getFormateurById(this.service.userDetail().id).subscribe(formateur=>{
      this.user=formateur
     })
     this.id=this.rout.snapshot.params["id"];
     this.getFormateur(this.id);
   }
   getFormateur(id:number)
   {
     this.service.getFormateurById(id).subscribe(data=>{
       this.currentFormateur=data
 
     })
   }
  
 }
 

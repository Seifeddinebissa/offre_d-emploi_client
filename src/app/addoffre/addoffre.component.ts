
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../Service/crud.service';
import { NgToastService } from 'ng-angular-popup';
import { Offre } from '../Model/Offre.model';
import { Entreprise } from '../Model/Entreprise.model';

@Component({
  selector: 'app-addoffre',
  templateUrl: './addoffre.component.html',
  styleUrls: ['./addoffre.component.css']
})
export class AddoffreComponent implements OnInit {

mydate=new Date()
 ajoutForm: FormGroup
 currentEntreprise=new Entreprise();
 user:any
 currentuser:any
 userFile:any
 message?:String
 imgURL:any
 imagePath:any
 offre2:Offre=new Offre();
  constructor(
     private service: CrudService,
    private router: Router,
    private fb: FormBuilder,
    private toast:NgToastService,
   ) { 
      this.user=this.service.userDetail()

      let formControls = {
        titre: new FormControl('', [
          Validators.required,
  
        ]),
       
        description: new FormControl('', [
          Validators.required,
  
        ]),
        experience: new FormControl('', [
          Validators.required,
  
        ]),
        logo: new FormControl('', [
          Validators.required,
  
        ]),
       type: new FormControl('', [
          Validators.required,
  
        ]),
        niveau: new FormControl('', [
          Validators.required,
  
        ]),
       
       datefin: new FormControl('', [
          Validators.required,
  
        ]),
  
        langue: new FormControl('', [
          Validators.required,
  
        ]),
         salaire: new FormControl('', [
          Validators.required,
  
        ]),
        genre: new FormControl('', [
          Validators.required,
  
        ]),
       nbpersonne: new FormControl('', [
          Validators.required,
  
        ]),
      }
      this.ajoutForm= this.fb.group(formControls)
    }
    // SaveEntreprise(){
    //    this.service.addOffre(this.offre2).subscribe(data=>{
    //     console.log(data)
    //     this.entrepriseListe();
    //   },
    //   error=>console.log(error)
    //   );
    // }
    // entrepriseListe()
    // {

    // }
    get titre() { return this.ajoutForm.get('titre') }
   
    get description() { return this.ajoutForm.get('description') }
    get experience() { return this.ajoutForm.get('experience') }
    get logo() { return this.ajoutForm.get('logo') }
    get langue() { return this.ajoutForm.get('langue') }
    get datedeb() { return this.ajoutForm.get('datedeb') }
    get datefin() { return this.ajoutForm.get('datefin') }
    get salaire() { return this.ajoutForm.get('salaire') }
    get niveau() { return this.ajoutForm.get('niveau') }
    get type() { return this.ajoutForm.get('type') }
    get genre() { return this.ajoutForm.get('genre') }
    get nbpersonne() { return this.ajoutForm.get('nbpersonne') }
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
        };
      }
    }
    ajouterOffre() {
      let data = this.ajoutForm.value;
      console.log(data);
      this.service.getEntrepriseById(Number(localStorage.getItem('idEntreprise'))).subscribe(res =>{
        this.currentEntreprise = res;
      });
      let offre = new Offre(
         undefined ,data.titre, data.etat, data.description,this.imgURL,this.mydate.toISOString().slice(0,10),
         data.datefin,data.experience,data.langue,data.niveau,data.type,data.salaire,data.genre,data.nbpersonne,JSON.parse(JSON.stringify(this.currentEntreprise)));
         console.log(this.mydate); 
         this.currentEntreprise.offre.push(offre);
         console.log(this.currentEntreprise)
         this.service.updateEntreprise(this.currentEntreprise.id!, this.currentEntreprise)
      if(data.titre==0||data.etat==0||data.description==0||this.imgURL==0||data.datedeb==0||data.datefin==0
        ||data.experience==0||data.langue==0||data.niveau==0||data.type==0||data.salaire==0||data.genre==0||data.nbpersonne==0)
      {this.toast.info({
        detail:'error msg !!',
        summary:'remplir votre champs'
      });}else {
        if (this.mydate.toISOString().slice(0, 10) > data.datefin) {
          this.toast.info({
            summary: "veuillez verifier la date d'expiration"
          })
        }else{
        
      this.service.addOffre(offre).subscribe(

  
        res => {
          console.log(res);
          this.toast.success({
            detail:'success msg',
            summary:'Ajout avec Succés'
          }); 
  
          this.router.navigate(['/listeoffre']);
        },
        err => {
          console.log(err);
          this.toast.error({
            detail:'error msg',
            summary:'verifier votre formulaire !'
          });
  
        }
  
      )
    }
  
    }}
  
    ngOnInit(): void {
      
      console.log(this.mydate)
      this.currentuser=localStorage.getItem("user")
      if(this.currentuser=="formateur")
      {
        this.router.navigate(['/home']);
        this.toast.error({
          summary:'vous ne pouvez pas acceder à cette page !'
        });
      }

      this.service.getEntrepriseById(this.service.userDetail().idE).subscribe(entreprise=>{
        this.currentEntreprise=entreprise
      })
    }
  
  }

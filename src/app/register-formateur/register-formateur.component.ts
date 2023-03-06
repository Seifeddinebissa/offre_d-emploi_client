import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../Service/crud.service';
import { NgToastService } from 'ng-angular-popup';
import { Formateur } from '../Model/Formateur.model';
@Component({
  selector: 'app-register-formateur',
  templateUrl: './register-formateur.component.html',
  styleUrls: ['./register-formateur.component.css']
})
export class RegisterFormateurComponent implements OnInit {
  registerFormateurForm:FormGroup
  userFile:any
  message?:String
  imgURL:any
  imagePath:any
  constructor( 
    private service: CrudService,
    private router: Router,
    private fb: FormBuilder,
    private toast:NgToastService
  ) {
    let formControls = {
      nom: new FormControl('', [
        Validators.required,

      ]),
      img: new FormControl('', [
        Validators.required,

      ]),
      prenom: new FormControl('', [
        Validators.required,

      ]),
      mdp: new FormControl('', [
        Validators.required,

      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email

      ]),
      adr: new FormControl('', [
        Validators.required,
        

      ]),
      tel: new FormControl('', [
        Validators.required,
      ])

    }
    this.registerFormateurForm= this.fb.group(formControls)

  }
  get email() { return this.registerFormateurForm.get('email') }
  get nom() { return this.registerFormateurForm.get('nom') }
  get prenom() { return this.registerFormateurForm.get('prenom') }
  get mdp() { return this.registerFormateurForm.get('mdp') }
  get adr() { return this.registerFormateurForm.get('adr') }
  get tel() { return this.registerFormateurForm.get('tel') }
  get img() { return this.registerFormateurForm.get('img') }
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
  
  registerFormateur() {
    let data = this.registerFormateurForm.value;
    console.log(data);
    let formateur = new Formateur(
      undefined,data.nom,this.imgURL, data.prenom,data.adr ,data.tel,data.email,data.mdp);
       console.log(formateur);
    if(data.nom==0||data.prenom==0||data.email==0||data.mdp==0||data.adr==0||data.tel==0||this.imgURL==0)
    {this.toast.info({
      detail:'error msg !!',
      summary:'remplir votre champs'
    });}else{
      
    this.service.addFormateur(formateur).subscribe(

      res => {
        console.log(res);

        this.router.navigate(['/loginFormateur']);
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

  }

  ngOnInit(): void {
  }

}

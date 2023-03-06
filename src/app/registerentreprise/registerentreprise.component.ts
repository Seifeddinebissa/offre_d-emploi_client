import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../Service/crud.service';
import { NgToastService } from 'ng-angular-popup';
import { Entreprise } from '../Model/Entreprise.model';

@Component({
  selector: 'app-registerentreprise',
  templateUrl: './registerentreprise.component.html',
  styleUrls: ['./registerentreprise.component.css']
})
export class RegisterentrepriseComponent implements OnInit {

  registerEntrepriseForm: FormGroup
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
      adr: new FormControl('', [
        Validators.required,

      ]),
      tel: new FormControl('', [
        Validators.required,

      ]),
      mdp: new FormControl('', [
        Validators.required,

      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email

      ])


    }
    this.registerEntrepriseForm = this.fb.group(formControls)

  }
  get email() { return this.registerEntrepriseForm.get('email') }
  get nom() { return this.registerEntrepriseForm.get('nom') }
  get tel() { return this.registerEntrepriseForm.get('tel') }
  get mdp() { return this.registerEntrepriseForm.get('mdp') }
  get adr() { return this.registerEntrepriseForm.get('adr') }
  get img() { return this.registerEntrepriseForm.get('img') }
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

  registerEntreprise() {
    let data = this.registerEntrepriseForm.value;
    console.log(data);
    let entreprise = new Entreprise(
      undefined,this.imgURL,data.nom, data.adr, data.tel,data.email, data.mdp);
       console.log(entreprise);
    if(data.nom==0||data.prenom==0||data.email==0||data.adr==0||data.tel==0||data.mdp==0||this.imgURL==0)
    {this.toast.info({
      detail:'error msg !!',
      summary:'remplir votre champs'
    });}else{
      
    this.service.addEntreprise(entreprise).subscribe(

      res => {
        console.log(res);

        this.router.navigate(['/loginEntreprise']);
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

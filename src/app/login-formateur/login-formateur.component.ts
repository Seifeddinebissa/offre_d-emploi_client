import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../Service/crud.service';
import { NgToastService } from 'ng-angular-popup';
import { Formateur } from '../Model/Formateur.model';


@Component({
  selector: 'app-login-formateur',
  templateUrl: './login-formateur.component.html',
  styleUrls: ['./login-formateur.component.css']
})
export class LoginFormateurComponent implements OnInit {

  loginFormateurForm: FormGroup
  constructor(
    private service: CrudService,
    private router: Router,
    private fb: FormBuilder,
    private toast:NgToastService
  ) {
    let formControls = {
      mdp: new FormControl('', [
        Validators.required,

      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email

      ])


    }
    this. loginFormateurForm = this.fb.group(formControls)

  }
  get email() { return this. loginFormateurForm.get('email') }
  get mdp() { return this. loginFormateurForm.get('mdp') }
  
 loginFormateur() {
    let data = this. loginFormateurForm.value;
    console.log(data);
    let formateur = new Formateur(undefined ,undefined ,undefined ,undefined,undefined ,undefined,data.email, data.mdp);
       console.log(formateur);
    if(data.email==0||data.mdp==0)
    {this.toast.info({
      detail:'error msg !!',
      summary:'remplir votre champs'
    });}else{
      
    this.service.loginFormateur(formateur).subscribe(

      res => {
        console.log(res);
        let token=res.token;
        localStorage.setItem("mytoken",token);
        localStorage.setItem("user","formateur");
        this.router.navigate(['/home']);
      },
      err => {
        console.log(err);
        this.toast.error({
          detail:'error msg',
          summary:'Formateur introuvable !!!!'
        });

      }

    )
  }

  }
  ngOnInit(): void {
  }

}


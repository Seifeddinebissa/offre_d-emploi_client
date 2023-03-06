import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Entreprise } from '../Model/Entreprise.model';
import { CrudService } from '../Service/crud.service';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-logi-entreprise',
  templateUrl: './logi-entreprise.component.html',
  styleUrls: ['./logi-entreprise.component.css'],
})
export class LogiEntrepriseComponent implements OnInit {
  loginEntrepriseForm: FormGroup;
  constructor(
    private service: CrudService,
    private router: Router,
    private fb: FormBuilder,
    private toast: NgToastService
  ) {
    let formControls = {
      mdp: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    };
    this.loginEntrepriseForm = this.fb.group(formControls);
  }
  get email() {
    return this.loginEntrepriseForm.get('email');
  }
  get mdp() {
    return this.loginEntrepriseForm.get('mdp');
  }

  loginEntreprise() {
    let data = this.loginEntrepriseForm.value;
    console.log(data);
    let entreprise = new Entreprise(undefined,undefined,undefined,undefined,undefined,data.email,data.mdp);
    console.log(entreprise);
    if (data.email == 0 || data.mdp == 0) {
      this.toast.info({
        detail: 'error msg !!',
        summary: 'remplir votre champs',
      });
    } else {
      this.service.loginEntreprise(entreprise).subscribe(
        (res) => {
          console.log(res);
          let token = res.token;
          let entreprise =res.entreprise;
          localStorage.setItem('mytoken', token);
          localStorage.setItem('user', 'entreprise');
          localStorage.setItem('idEntreprise',entreprise.id);
          //localStorage.setItem("id",)
          this.router.navigate(['/home']);
        },
        (err) => {
          console.log(err);
          if (data.etat == false) {
            this.toast.error({
              detail: 'error msg',
              summary: "entreprise n'est pas autorisé  !!!!",
            });
          } else {
            this.toast.error({
              detail: 'error msg',
              summary: 'entreprise introuvable !!!!',
            });
          }
        }
      );
    }
  }
  ngOnInit(): void {}
}

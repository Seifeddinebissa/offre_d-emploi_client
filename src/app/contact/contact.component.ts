import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../Service/crud.service';
import { NgToastService } from 'ng-angular-popup';
import { Contact } from '../Model/Contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
   user:any
  currentuser:any
  ajoutForm: FormGroup
   constructor(
      private service: CrudService,
     private router: Router,
     private fb: FormBuilder,
     private toast:NgToastService) { 
 
       let formControls = {
        nom: new FormControl('', [
           Validators.required,
   
         ]),
         email: new FormControl('', [
           Validators.required,
           Validators.email,
   
         ]),
        sujet: new FormControl('', [
           Validators.required,
   
         ]),
         msg: new FormControl('', [
           Validators.required,
   
         ]),
         tel: new FormControl('', [
           Validators.required,
   
         ]),
        
       }
       this.ajoutForm= this.fb.group(formControls)
   
     }
     get nom() { return this.ajoutForm.get('nom') }
     get email() { return this.ajoutForm.get('email') }
     get sujet() { return this.ajoutForm.get('sujet') }
     get msg() { return this.ajoutForm.get('msg') }
     get tel() { return this.ajoutForm.get('tel') }
    
     ajouterContact() {
       let data = this.ajoutForm.value;
       console.log(data);
       if(this.user!=null)
       {
        data.nom=this.currentuser.nom,
        data.tel=this.currentuser.tel,
        data.email=this.currentuser.email
       }
       let contact = new Contact(
          undefined ,data.nom, data.email, data.sujet,data.msg,
          data.tel);
          console.log(contact);
        
      
       if(data.nom==0||data.email==0||data.sujet==0||data.msg==0||data.tel==0)
       {this.toast.info({
         detail:'error msg !!',
         summary:'remplir votre champs'
       });}else{
         
       this.service.addContact(contact).subscribe(
 
   
         res => {
           console.log(res);
           
           this.router.navigate(["/contact"]).then(()=>{
            window.location.reload();
          })
      
          
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
      this.user=localStorage.getItem("user")
      this.currentuser=this.service.userDetail()
     }
   
   }
 
